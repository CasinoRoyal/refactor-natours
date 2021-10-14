import { http } from '../http/http.adapter';
import { PaymentService } from '../../application/ports/payment.port';

export const usePaymentService = (): PaymentService => {
  const url = `${baseUrl}/webhook-checkout`;

  return {
    async pay(totalPrice: number): Promise<boolean> {
      try {
        await http.post(url, totalPrice).catch(() => false);
        return true;
      } catch(e) {
        throw new Error('Payment service error')
      }
    }
  };
};
