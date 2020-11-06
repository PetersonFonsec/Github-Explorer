import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Route
        path="/repositorios/:repository+"
        component={lazy(() => import('../pages/Repository/index'))}
      />
    </Suspense>
  </Switch>
);

export default Routes;
