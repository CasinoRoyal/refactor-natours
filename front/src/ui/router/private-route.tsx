import { ComponentType } from 'react';
import { Redirect, Route } from 'react-router-dom';

type PrivateRouteProps = {
  component: ComponentType;
  path: string;
  exact?: boolean;
};

export function PrivateRoute({ component, path, exact }: PrivateRouteProps) {
  const useHook = () => false;
  const condition = useHook();

  if (!condition) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} component={component} exact={exact} />;
}
