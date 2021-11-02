import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { PrivateRoute } from './private-route';
import { Home } from '../pages/home';
import { Tour } from '../pages/tour';
import { NotFound } from '../pages/not-found';

export function AppRouter(): ReactElement {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/tour/:tourId" component={Tour} exact />
      {/*<PrivateRoute path="/profile" component={} exact />*/}
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
