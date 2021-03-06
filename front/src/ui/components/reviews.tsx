import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Review } from '../../domains/review.entity';
import { useCheckAuth } from '../hooks/use-auth';
import { ReviewCard } from './review-card';
import { ReviewFeedback } from './review-feedback';
import './reviews.css';

type ReviewsPropsType = {
  reviews: Review[];
};

export function Reviews({ reviews }: ReviewsPropsType): ReactElement {
  const { pathname } = useLocation();
  const { data: user } = useCheckAuth();
  const haveReviews = reviews.length > 0;

  const renderReviewCards = () => {
    return reviews.map((review: Review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };

  const renderEmptyReviewMessage = () => {
    return (
      <div className="reviews-box">
        <h3>Nobody left comment yet. You can be the first one!</h3>
      </div>
    );
  };

  return (
    <section className="section-reviews">
      <div className="reviews">
        {haveReviews ? renderReviewCards() : renderEmptyReviewMessage()}
      </div>
      {user ? (
        <ReviewFeedback />
      ) : (
        <div className="reviews-box">
          <h3>Only authenticated users can left a feedback.</h3>
          <Link
            className="btn-text"
            to={{ pathname: '/auth/login', state: { path: pathname } }}
          >
            Sign in
          </Link>
        </div>
      )}
    </section>
  );
}
