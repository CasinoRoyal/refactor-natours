import { ReactElement } from 'react';
import { Cards } from '../components/cards';
import { useTour } from '../hooks/use-tour';
import { Loader } from '../elements/loader';

export function Catalog(): ReactElement {
  const { data, isLoading } = useTour();

  if (isLoading) return <Loader />;

  return <Cards cards={data.tours} />;
}
