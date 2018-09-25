// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home/Home';
import Content from './components/Content/Content';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/content" component={Content} exact />
    </Switch>
  </App>
);

export default AppRoutes;
