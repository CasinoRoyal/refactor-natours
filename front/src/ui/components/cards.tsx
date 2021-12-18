import { ReactElement } from 'react';
import { Card } from './card';
import { Tour } from '../../domains/tour.entity';
import './cards.css';

type CardsProps<T> = {
  cards: T[];
};

export function Cards({ cards }: CardsProps<Tour>): ReactElement {
  return (
    <div className="card-container">
      {cards.map((tour) => {
        return <Card key={tour.id} cardData={tour} />;
      })}
    </div>
  );
}
