import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Billboards from './containers/billboards/billboards';
import {NotFound} from './containers/shared/common';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Billboards}/>
      <Redirect from="/billboards" to="/"/>
      <Route component={NotFound} />
    </Switch>
  </Router>
)