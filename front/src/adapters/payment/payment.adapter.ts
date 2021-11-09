import { http } from '../http/http.adapter';
import { IPayment } from '../../application/ports/out/payment.port';

export const usePaymentService = (): IPayment => {
  const url = `/webhook-checkout`;

  return {
    async pay(totalPrice: number): Promise<boolean> {
      try {
        await http<boolean, number>(url, {
          method: 'GET',
          body: { totalPrice },
        });
        return true;
      } catch (e) {
        console.log('Pay error');
        return false;
      }
    },
  };
};
