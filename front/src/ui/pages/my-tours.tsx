import { ReactElement } from 'react';
import { Card } from '../components/card';

export function MyTours(): ReactElement {
  const tours: any[] = [];

  return (
    <div>
      <h2 className="heading-secondary">My tours</h2>
      {tours.map((tour) => (
        <Card key={tour.id} cardData={tour} />
      ))}
      {tours.length < 1 && <div>Where you gonna go?</div>}
    </div>
  );
}
