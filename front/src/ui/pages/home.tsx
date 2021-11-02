import { ReactElement } from 'react';
import { Card } from '../components/card';
import { useTours } from '../hooks/use-tour';

export function Home(): ReactElement {
  const { tours, isLoading } = useTours();

  if (isLoading || tours.length === 0) return <div>LOADING...</div>;

  return (
    <div className="card-container">
      {tours &&
        tours.map((tour) => {
          return <Card key={tour.id} cardData={tour} />;
        })}
    </div>
  );
}
