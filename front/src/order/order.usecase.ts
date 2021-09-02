import { Tour } from '../tour/tour.entity';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';
import { PaymentServiceAdapter } from '../payment/payment.adapter';

export function useOrder() {
  
  async function createOrder(
    user: User,
    tour: Tour,
    numberOfParticipants: number,
  ): Promise<Order> {
    const isAvailable = tour.isAvailableSeats(numberOfParticipants);

    if (!isAvailable) {
      throw new Error(
        `Available number of participants is ${tour.availableSeats}`,
      );
    }

    const totalPrice = tour.calculateTourPrice(numberOfParticipants);

    const order = new Order(user, tour, numberOfParticipants, totalPrice);

    try{
      await PaymentServiceAdapter.pay(order.totalPrice)
    } catch() {
      throw new Error('Your payment was rejected')
    }

    return order;
  }

  return {
    createOrder
  }
}
