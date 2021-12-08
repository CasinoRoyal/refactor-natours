import { ReactElement } from 'react';
import { Welcome } from '../components/welcome';
import { Cards } from '../components/cards';
import { useTour } from '../hooks/use-tour';
import { Loader } from '../elements/loader';

export function Home(): ReactElement {
  const { isLoading, data } = useTour({ endPoint: 'tours/5-cheapest-tour' });

  if (isLoading) return <Loader />;

  return (
    <>
      <Welcome />
      <h3 className="heading-secondary ma-bt-md ma-t-md">Our bestsellers</h3>
      <Cards cards={data.tours} />
    </>
  );
}
