const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require('../models/tour-model');
const User = require('../models/user-model');
const Booking = require('../models/booking-model');
const catchAsyncError = require('../utils/catch-async-error');
const AppError = require('../utils/app-error');
const generateQrCode = require('../utils/qr-generator');
const factory = require('./handler-factory');

exports.getCheckoutSession = catchAsyncError(async (req, res, next) => {
  const tour = await Tour.findById(req.params.tourId);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${process.env.CLIENT_HOST}/profile/my-tours`,
    cancel_url: `${req.protocol}://${process.env.CLIENT_HOST}/${req.params.tourId}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        name: `${tour.name} tour`,
        description: `${tour.summary}`,
        images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1
      }
    ]
  })

  res.status(200).json({
    status: 'success',
    session
  })
});

const createBookingCheckout = async session => {
  try {
    const tour = session.client_reference_id;
    const user = (await User.findOne({ email: session.customer_email })).id;
    const price = session.display_items[0].amount / 100;
    const code = generateQrCode({
      tour, user, price
    });
    const book = await Booking.create({ tour, user, price, code });
    console.log('BOOK ', book)
  } catch(e) {
    console.log(e);
  }
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed')
    createBookingCheckout(event.data.object);

  res.status(200).json({ received: true });
};

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);