import { loadStripe } from '@stripe/stripe-js';
import { http } from '../http/http.adapter';
import { IPayment } from '../../application/ports/out/payment.port';

type PaymentSession = {
  status: string;
  session: any;
};

export const usePaymentService = (): IPayment => {
  const url = '/booking/checkout-session';

  return {
    async pay(itemId: string): Promise<void> {
      try {
        const stripe = await loadStripe(
          'pk_test_65MqCGHOGKKpcDMgirCqofLK00OhMbtFmT',
        );
        const { data } = await http<PaymentSession>(`${url}/${itemId}`, {
          method: 'GET',
          withCredentials: true,
        });

        if (stripe) {
          await stripe.redirectToCheckout({ sessionId: data.session.id });
        }

        throw new Error('Transaction session error');
      } catch (e) {
        throw new Error('Pay error');
      }
    },
  };
};
