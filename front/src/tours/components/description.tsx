import React, { FC, ReactElement } from 'react';

import { Tour } from '../types';
import { Guides } from './guides';

type TourDescriptionType = Pick<
  Tour,
  'startDates' | 'difficulty' | 'maxGroupSize' | 'ratingsAverage' | 'guides' | 'name' | 'description'
>;

export const Description: FC<TourDescriptionType> = (props): ReactElement => {
  const {
    startDates, 
    difficulty, 
    maxGroupSize, 
    ratingsAverage, 
    guides, 
    name,
    description
  } = props;

  const descriptionParagraphs = description.split('\n');

  return (
    <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="img/icons.svg#icon-calendar"></use>
                </svg>
                <span className="overview-box__label">Next date</span>
                <span className="overview-box__text">{startDates[0]}</span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="img/icons.svg#icon-trending-up"></use>
                </svg>
                <span className="overview-box__label">Difficulty</span>
                <span className="overview-box__text">{difficulty}</span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="img/icons.svg#icon-user"></use>
                </svg>
                <span className="overview-box__label">Participants</span>
                <span className="overview-box__text">
                  {`${maxGroupSize} people`}
                </span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="img/icons.svg#icon-star"></use>
                </svg>
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">
                  {`${ratingsAverage} / 5`}
                </span>
              </div>
            </div>

            <Guides guides={guides} />

          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{`About ${name} tour`}</h2>
           {
             descriptionParagraphs.map((text, i) => {
               return <p key={i} className="description__text">{text}</p>
             })
           }
        </div>
      </section>
  );
}      


      