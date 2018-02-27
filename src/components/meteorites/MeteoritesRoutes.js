import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import MeteoritesIndex from './MeteoritesIndex';
import MeteoritesNew from './MeteoritesNew';

const MeteoritesRoutes = () => {
  return(
    <Switch>
      <Route exact path="/meteorites" component={ MeteoritesIndex } />
      <ProtectedRoute path="/meteorites/new" component={MeteoritesNew} />
    </Switch>
  );
};

export default MeteoritesRoutes;
