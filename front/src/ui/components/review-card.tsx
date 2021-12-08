import { ReactElement } from 'react';
import { Review } from '../../domains/review.entity';
import { ReactComponent as SvgSprite } from './icons.svg';

type ReviewPropsType = {
  review: Review;
};

const renderRatingStars = (starCount: number) => {
  const template = [];

  for (let i = 1; i <= 5; i++) {
    const isActive = i < starCount ? 'active' : 'inactive';
    template.push(
      <div key={i}>
        <SvgSprite />
        <svg className={`reviews__star reviews__star--${isActive}`}>
          <use href="#icon-star"></use>
        </svg>
      </div>,
    );
  }

  return template;
};

export function ReviewCard({ review }: ReviewPropsType): ReactElement {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`img/users/${review.user.photo}`}
          alt={`${review.user.name}`}
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">{renderRatingStars(review.rating)}</div>
    </div>
  );
}
