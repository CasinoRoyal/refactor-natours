import { http } from '../http/http.adapter';
import { IPayment } from '../../application/ports/out/payment.port';

export const usePaymentService = (): IPayment => {
  const url = `/webhook-checkout`;

  return {
    async pay(totalPrice: number): Promise<boolean> {
      try {
        await http.post(url, totalPrice).catch(() => false);
        return true;
      } catch (e) {
        throw new Error('Payment service error');
      }
    },
  };
};
