import { ReactElement } from 'react';
import { Tour } from '../../domains/tour.entity';
import { usePaymentService } from '../../adapters/payment/payment.adapter';
import './cta.css';

type TourCtaPropsType = Pick<Tour, 'images' | 'duration' | 'id'>;

export function Cta({ id, images, duration }: TourCtaPropsType): ReactElement {
  const { pay } = usePaymentService();

  const daysDurationText =
    duration > 1 ? `${duration} days` : `${duration} day`;
  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="/img/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img
          src={`/img/tours/${images[1]}`}
          alt="ad tour photo"
          className="cta__img cta__img--1"
        />
        <img
          src={`/img/tours/${images[2]}`}
          alt="ad tour photo"
          className="cta__img cta__img--2"
        />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {`${daysDurationText}. 1 adventure. Infinite memories. Make it yours today!`}
          </p>
          <button
            onClick={() => pay(id)}
            className="btn btn--green span-all-rows"
          >
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  );
}
