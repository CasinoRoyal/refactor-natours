import { ReactElement } from 'react';
import { Cards } from '../components/cards';
import { useTours } from '../hooks/use-tours';
import { Loader } from '../elements/loader';

export function Catalog(): ReactElement {
  const { data, isLoading } = useTours();

  if (!data || isLoading) return <Loader />;

  return <Cards cards={data} />;
}
