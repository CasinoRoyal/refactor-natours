import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { PrivateRoute } from './private-route';
import { Home } from '../pages/home';
import { Tour } from '../pages/tour';
import { Catalog } from '../pages/catalog';
import { NotFound } from '../pages/not-found';
import { Auth } from '../pages/authentication';

export function AppRouter(): ReactElement {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/tour/all-tours" component={Catalog} exact />
      <Route path="/tour/:tourId" component={Tour} exact />
      <Route path="/auth/:auth" component={Auth} exact />
      {/*<PrivateRoute path="/profile" component={} exact />*/}
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
