// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, About, Beers, Protected, PrivateRoute, PageNotFound } from './routes';
// #endregion

const MainRoutes = () => {
  return (
    <Switch>
      {/* public views: */}
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route path="/about" component={About} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
      {/* page not found */}
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
