import React, { FC, ReactElement } from 'react';

import { Tour } from '../types';

type GuidesType = Pick<Tour, 'guides'>

export const Guides: FC<GuidesType> = ({ guides }): ReactElement => {
  return (
    <div className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

       {
        guides.map(({ role, photo, name }, idx) => {
          const guideLabel = role === 'lead-guide' 
            ? 'Lead guide'
            : 'Tour guide';

          return (
            <div key={idx} className="overview-box__detail">
              <img
                src={`img/users/${photo}`}
                alt={guideLabel}
                className="overview-box__img"
              />
              <span className="overview-box__label">{guideLabel}</span>
              <span className="overview-box__text">{name}</span>
            </div>
          )
        })
       }
    </div>
  );
}