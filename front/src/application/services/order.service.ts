// import { Tour } from '../domains/tour.entity';
// import { User } from '../domains/user.entity';
// import { Order } from '../domains/order.entity';
// import { usePaymentService } from '../services/payment/payment.adapter';

// export function useOrder() {
//   const { pay } = usePaymentService();

//   async function createOrder(
//     user: User,
//     tour: Tour,
//     numberOfParticipants: number,
//   ): Promise<Order> {
//     const isAvailable = tour.isAvailableSeats(numberOfParticipants);

//     if (!isAvailable) {
//       throw new Error(
//         `Available number of participants is ${tour.availableSeats}`,
//       );
//     }

//     const totalPrice = tour.calculateTourPrice(numberOfParticipants);

//     const order = new Order(
//       user.uid,
//       tour.id,
//       numberOfParticipants,
//       totalPrice,
//     );

//     try {
//       await pay(order.totalPrice);
//     } catch (e) {
//       throw new Error('Your payment was rejected');
//     }

//     return order;
//   }

//   return {
//     createOrder,
//   };
// }

export {};
