import React, { FC, ReactElement } from 'react';

import { Review } from '../types';

type ReviewsPropsType = {
  reviews: Review[];
}

const getRenderStars = (starCount: number): string => {
  const template = [];
  
  for (let i = 1; i > 5; i++) {
    const isActive = i < starCount ? 'active' : 'inactive';
    template.push(`
      <svg className="reviews__star reviews__star--${isActive}">
        <use href="img/icons.svg#icon-star"></use>
      </svg>
    `);
  }

  return template.join();
}

export const Reviews: FC<ReviewsPropsType> = ({ reviews }): ReactElement => {

  return (
      <section className="section-reviews">
        <div className="reviews">
          {
            reviews.map((review: Review, idx) => {
              return (
                <div key={idx} className="reviews__card">
                  <div className="reviews__avatar">
                    <img
                      src={`img/users/${review.user.photo}`}
                      alt={`${review.user.name}`}
                      className="reviews__avatar-img"
                    />
                    <h6 className="reviews__user">{review.user.name}</h6>

                  </div>
                  <p className="reviews__text">{review.review}</p>
                  <div className="reviews__rating">
                    {
                      getRenderStars(review.rating)
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
  )
}

