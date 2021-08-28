import React, { FC, ReactElement } from 'react';

import { CardItem, CardItemProps } from './card-item';
import { Tours } from '../../../tours/types';

export const CardsList: FC<{tours: Tours}> = ({ tours }): ReactElement => {

  return (
    <div className="card-container">
      {
        tours.map((tour, idx): ReactElement<CardItemProps> => {
          return <CardItem key={tour.id} cardData={tour} />
        })
      }
    </div>
  );
};