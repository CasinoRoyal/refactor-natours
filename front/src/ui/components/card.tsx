import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/button';
import { Tour } from '../../domains/tour.entity';

// export type CardItemProps = {
//   cardData: {
//     ratingsAverage: string;
//     ratingsQuantity: string;
//     name: string;
//     duration: string;
//     maxGroupSize: string;
//     difficulty: string;
//     price: string;
//     summary: string;
//     imageCover: string;
//     startLocation: { description: string };
//     startDates: Date[];
//     locations: string;
//     id: string;
//   };
// };

type CardProps = { cardData: Tour };

export function Card({ cardData }: CardProps): ReactElement {
  const {
    ratingsAverage,
    ratingsQuantity,
    name,
    duration,
    maxGroupSize,
    difficulty,
    price,
    summary,
    imageCover,
    startLocation,
    startDates,
    locations,
    id,
  } = cardData;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src={`img/tours/${imageCover}`}
            alt={name}
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">{`${difficulty} ${duration}-day tour`}</h4>
        <p className="card__text">{summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-map-pin" />
          </svg>
          <span>{startLocation?.description ?? 'desription'}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-calendar" />
          </svg>
          <span>{startDates[0]?.toLocaleString() ?? 'dates'}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-flag" />
          </svg>
          <span>{`${locations.length} stops`}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-user" />
          </svg>
          <span>{`${maxGroupSize} people`}</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">{`$${price}`} &nbsp;</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{ratingsAverage} &nbsp;</span>
          <span className="card__footer-text">{`rating (${ratingsQuantity})`}</span>
        </p>
        <Link to={`/tour/${id}`}>
          <Button color="green">Details</Button>
        </Link>
      </div>
    </div>
  );
}
