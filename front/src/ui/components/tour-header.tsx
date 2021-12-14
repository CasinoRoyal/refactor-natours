import { ReactElement } from 'react';
import { Tour } from '../../domains/tour.entity';
import './tour-header.css';

type TourHeaderType = Pick<
  Tour,
  'name' | 'imageCover' | 'startLocation' | 'duration'
>;

export function TourHeader(props: TourHeaderType): ReactElement {
  const { name, imageCover, startLocation, duration } = props;

  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">&nbsp;</div>
        <img
          src={`/img/tours/${imageCover}`}
          alt={name}
          className="header__hero-img"
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">{name}</h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use href="img/icons.svg#icon-clock"></use>
            </svg>
            <span className="heading-box__text">{`${duration} days`}</span>
          </div>
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use href="img/icons.svg#icon-map-pin"></use>
            </svg>
            <span className="heading-box__text">
              {startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
