import { ReactElement } from 'react';
import { Welcome } from '../components/welcome';
import { Cards } from '../components/cards';
import { useCustomTours } from '../hooks/use-tours';
import { Loader } from '../elements/loader';

export function Home(): ReactElement {
  const { isLoading, data } = useCustomTours('tours/5-cheapest-tour');

  if (isLoading) return <Loader />;

  return (
    <>
      <Welcome />
      <h3 className="heading-secondary ma-bt-md ma-t-md">Our bestsellers</h3>
      {data && <Cards cards={data} />}
    </>
  );
}
