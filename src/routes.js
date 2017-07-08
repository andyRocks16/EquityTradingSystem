import React from 'react';
import { IndexRoute, Router } from 'react-router';
import { MainApp } from './store/configStore';
import { Login } from './components/Login';
import { Dashboard } from './components/PortfolioManagers/dashboard';
import { Order } from './components/PortfolioManagers/order';
import { Drafts } from './components/PortfolioManagers/draft';
import { ETDashboard } from './components/EquityTraders/dashboard';
import { ETOrder } from './components/EquityTraders/order';


export default (
  <Router>
    <Router path="/" component={MainApp}>
      <IndexRoute component={Login} />
      <Router path="pm_dashboard" component={Dashboard} />
      <Router path="pm_order" component={Order} />
      <Router path="pm_drafts" component={Drafts} />
      <Router path="et_dashboard" component={ETDashboard} />
      <Router path="et_order" component={ETOrder} />
    </Router>
  </Router>
);
