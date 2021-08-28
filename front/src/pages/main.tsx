import React, { FC, ReactElement } from 'react';

import { CardsList } from '../shareable/ui/cards/cards-list';
import { WrappedSpinner } from '../shareable/ui/wrapper';
import { useToursFetch } from '../tours/hooks/use-tours-fetch';


export const MainPage: FC = (): ReactElement => {
  const { data, isFetching, error } = useToursFetch()

  if (isFetching || data.length ===0) {
    return <WrappedSpinner />
  }

  return (
    <main className="main">
      <CardsList tours={data} />
    </main>
  );
}