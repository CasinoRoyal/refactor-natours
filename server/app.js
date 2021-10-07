const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const tourRouter = require('./routes/tour-routers');
const userRouter = require('./routes/user-routers');
const reviewRouter = require('./routes/review-routes');
const bookingRouter = require('./routes/booking-routes');
const AppError = require('./utils/app-error');
const handleError = require('./controllers/error-controller');
const { webhookCheckout } = require('./controllers/booking-controller');

const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,UPDATE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers', 
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization'
  );

  next();
});
app.options('*', function (req,res) { res.sendStatus(200); });

app.use(helmet());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};

const apiLimiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000
});
app.use('/api/', apiLimiter);

app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webhookCheckout
);

app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

app.use(mongoSanitize());

app.use(xss());

app.use(hpp({
  whitelist: [
    'duration',
    'price',
    'difficulty',
    'maxGroupSize',
    'ratingsAverage'
  ]
}));
app.use(compression());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/booking', bookingRouter);

app.all('*', (req, res, next) => {
  const message = `We can't find ${req.originalUrl}. Sorry :(`;
  
  next(new AppError(message, 404));
});

app.use(handleError);

module.exports = app;