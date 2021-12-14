import { useState } from 'react';
import { Modal } from '../elements/modal';
import './review-feedback.css';

export function ReviewFeedback() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    handleClose();
  };

  const handleClose = () => {
    setShowModal((value) => !value);
  };

  return (
    <>
      <div className="reviews-box">
        <button className="btn-small" onClick={handleClick}>
          write a comment
        </button>
      </div>

      <Modal isOpened={showModal} onClose={handleClose}>
        <div className="review-feedback">
          <form>
            <h3 className="heading-secondary">Share your vibes with us!</h3>
            <textarea name="review" placeholder="Leave a message" />
            <fieldset className="review-rating">
              <legend className="heading-secondary">Rate a tour</legend>
              <label htmlFor="5">5</label>
              <input type="radio" name="rating" id="5" value="5" />
              <label htmlFor="4">4</label>
              <input type="radio" name="rating" id="4" value="4" />
              <label htmlFor="3">3</label>
              <input type="radio" name="rating" id="3" value="3" />
              <label htmlFor="2">2</label>
              <input type="radio" name="rating" id="2" value="2" />
              <label htmlFor="1">1</label>
              <input type="radio" name="rating" id="1" value="1" />
            </fieldset>
            <button className="btn btn--small">Share</button>
          </form>
        </div>
      </Modal>
    </>
  );
}
