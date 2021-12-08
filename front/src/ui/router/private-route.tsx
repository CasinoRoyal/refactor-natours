import { ComponentType, ReactElement } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAppSelector, selectUser } from '../store/store';

type PrivateRouteProps = {
  component: ComponentType;
  path: string;
  exact?: boolean;
};

export function PrivateRoute({
  component,
  path,
  exact,
}: PrivateRouteProps): ReactElement {
  const { pathname } = useLocation();
  const { data } = useAppSelector(selectUser);

  if (!data.user) {
    return (
      <Redirect to={{ pathname: '/auth/login', state: { path: pathname } }} />
    );
  }

  return <Route path={path} component={component} exact={exact} />;
}
