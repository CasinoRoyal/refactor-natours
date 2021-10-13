import { http } from '../http/http.adapter';
import { PaymentService } from './payment.port';

// TODO NOTIFICATION

// export class PaymentServiceAdapter implements PaymentService {
//   async pay(amount: number): Promise<boolean> {
//     const res = await http
//       .pushResourse(url, amount)
//       .catch(() => false);

//     return res
//   }
// }


export const usePaymentService = (): PaymentService => {
  return {
    async pay(totalPrice: number): Promise<boolean> {
      const res = await http
        .pushResourse(url, totalPrice)
        .catch(() => false);

      return res
    }
  }
}