import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Billboards from './containers/billboards/Billboards';
import NewBillboard from './containers/billboards/NewBillboard';
import DeleteBillboard from './containers/billboards/DeleteBillboard';
import {NotFound} from './containers/shared/Common';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Billboards}/>
      <Route path="/newbillboard" component={NewBillboard}/>
      <Route path="/deleteBillboard" component={DeleteBillboard}/>
      <Redirect from="/billboards" to="/"/>
      <Route component={NotFound} />
    </Switch>
  </Router>
)