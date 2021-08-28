import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Tour } from '../../../tours/types';

export type CardItemProps = {
  cardData: Tour;
}

export const CardItem: FC<CardItemProps> = (props: CardItemProps): ReactElement => {
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
    id
  } = props.cardData;

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
          <span>{startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-calendar" />
          </svg>
          <span>{startDates[0].toLocaleString()}</span>
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
        <Link to={`/tour/${id}`} className="btn btn--green btn--small">Details</Link>
      </div>
    </div>
  );
};