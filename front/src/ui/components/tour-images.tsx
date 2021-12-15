import { ReactElement } from 'react';
import { Tour } from '../../domains/tour.entity';
import './tour-images.css';

type TourImagesType = Pick<Tour, 'images' | 'name'>;

export function TourImages({ images, name }: TourImagesType): ReactElement {
  return (
    <section className="section-pictures">
      {images.map((src, idx: number): ReactElement => {
        return (
          <div key={idx} className="picture-box">
            <img
              className={`picture-box__img picture-box__img--${idx + 1}`}
              src={`/img/tours/${src}`}
              alt={`${name} Tour ${idx}`}
            />
          </div>
        );
      })}
    </section>
  );
}
