import React from 'react';
import { IndexRoute } from 'react-router';
import { MainApp } from './store/configStore';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import ChartPage from './containers/broker/ChartPage';
import TablePage from './containers/broker/TablePage';
import Dashboard from './containers/broker/DashboardPage';
import PopUpComponent from './components/Utilities/PopUpComponent';

import { Router } from 'react-router';

const routes_bro = (
   <Router>
    <Router path="/" component={MainApp}>
      <IndexRoute component={LoginPage} />
      <Router path="dashboard" component={Dashboard} />
      <Router path="chart" component={ChartPage} />
      <Router path="table" component={TablePage} />
      <Router path="create" component={PopUpComponent} />
    </Router>
  </Router>
);

const routes_em = (
   <Router>
    <Router path="/" component={MainApp}>
      <IndexRoute component={LoginPage} />
    </Router>
  </Router>
);

export default (
 
);
