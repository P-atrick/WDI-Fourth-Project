import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import MeteoritesLanding from './MeteoritesLanding';
import MeteoritesIndex from './MeteoritesIndex';
import MeteoritesSale from './MeteoritesSale';
import MeteoritesNew from './MeteoritesNew';
import MeteoritesEdit from './MeteoritesEdit';
import MeteoritesShow from './MeteoritesShow';
import UsersShow from '../users/UsersShow';
import UsersMeteorites from '../users/UsersMeteorites';
import UsersMeteoritesSale from '../users/UsersMeteoritesSale';

const MeteoritesRoutes = () => {
  return(
    <Switch>
      <Route exact path="/" component={ MeteoritesLanding } />
      <Route exact path="/meteorites" component={ MeteoritesIndex } />
      <Route exact path="/meteorites/sale" component={ MeteoritesSale } />
      <ProtectedRoute path="/meteorites/new" component={MeteoritesNew} />
      <ProtectedRoute path="/meteorites/:id/edit" component={MeteoritesEdit} />
      <Route path="/meteorites/:id" component={MeteoritesShow} />
      <ProtectedRoute path="/users/:id/meteorites/sale" component={UsersMeteoritesSale} />
      <ProtectedRoute path="/users/:id/meteorites" component={UsersMeteorites} />
      <ProtectedRoute path="/users/:id" component={UsersShow} />
    </Switch>
  );
};

export default MeteoritesRoutes;
