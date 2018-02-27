import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import MeteoritesIndex from './MeteoritesIndex';

const MeteoritesRoutes = () => {
  return(
    <Switch>
      <Route exact path="/meteorites" component={ MeteoritesIndex } />
    </Switch>
  );
};

export default MeteoritesRoutes;
