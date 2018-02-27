import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import MeteoritesLanding from './MeteoritesLanding';
import MeteoritesIndex from './MeteoritesIndex';
import MeteoritesNew from './MeteoritesNew';
import MeteoritesEdit from './MeteoritesEdit';
import MeteoritesShow from './MeteoritesShow';

const MeteoritesRoutes = () => {
  return(
    <Switch>
      <Route exact path="/" component={ MeteoritesLanding } />
      <Route exact path="/meteorites" component={ MeteoritesIndex } />
      <ProtectedRoute path="/meteorites/new" component={MeteoritesNew} />
      <Route path="/meteorites/:id/edit" component={MeteoritesEdit} />
      <Route path="/meteorites/:id" component={MeteoritesShow} />
    </Switch>
  );
};

export default MeteoritesRoutes;
