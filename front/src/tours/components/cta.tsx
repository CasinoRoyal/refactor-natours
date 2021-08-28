import React, { FC, ReactElement } from 'react';

import { Tour } from '../types';

type TourCTAPropsType = Pick<Tour, 'images' | 'duration' >;

export const CTA: FC<TourCTAPropsType> = ({images , duration}): ReactElement => {
  const daysDurationText = duration > 1 ? `${duration} days` : `${duration} day`;
  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img src="img/logo-white.png" alt="Natours logo" className="" />
        </div>
        <img src={`img/${images[1]}`} alt="" className="cta__img cta__img--1" />
        <img src={`img/${images[2]}`} alt="" className="cta__img cta__img--2" />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {`${daysDurationText}. 1 adventure. Infinite memories. Make it yours today!`}
          </p>
          <button className="btn btn--green span-all-rows">Book tour now!</button>
        </div>
      </div>
    </section>  
  );
}