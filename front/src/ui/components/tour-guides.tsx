import { ReactElement } from 'react';
import { Tour } from '../../domains/tour.entity';
import './tour-guides.css';

type GuidesType = Pick<Tour, 'guides'>;

export function Guides({ guides }: GuidesType): ReactElement {
  return (
    <div className="overview-box__group">
      <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

      {guides.map(({ role, photo, name }, idx) => {
        const guideLabel = role === 'lead-guide' ? 'Lead guide' : 'Tour guide';

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
        );
      })}
    </div>
  );
}
