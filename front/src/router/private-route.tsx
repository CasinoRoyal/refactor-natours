import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUser } from '../user/hooks/use-user';

type PrivateRoutePropsType = {
  component: FC;
  exact: boolean;
  path: string;
};

export const PrivateRoute: FC<PrivateRoutePropsType> = (props) => {
  const { data } = useUser();

  if (!data) {
    return <Redirect to='/auth/login' />
  }

  return <Route {...props} />
}