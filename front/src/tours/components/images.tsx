import React, { FC, ReactElement } from 'react';

import { Tour } from '../types';

type TourImagesType = Pick<Tour, 'images' | 'name'>

export const Images: FC<TourImagesType> = ({ images, name }): ReactElement => {

  return(
    <section className="section-pictures">
      {
        images.map((pic: string, idx: number): ReactElement => {
          return (
            <div key={idx} className="picture-box">
              <img
                className={`picture-box__img picture-box__img--${idx + 1}`}
                src="img/tour-5-1.jpg"
                alt={`${name} Tour ${idx}`}
              />
            </div>
          )
        })
      }
    </section>
  )
}