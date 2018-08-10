import React from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { firebase } from './firebase/index.js';

import * as routes from './constants/routes.js';

import Navigation from './components/Navigation/Navigation.js';

import SignUp from './components/SignUp/SignUp.js';
import SignIn from './components/SignIn/SignIn.js';
import PasswordForget from './components/PasswordForget/PasswordForget.js';
import Home from './components/Home/Home.js';
import Account from './components/Account/Account.js';
import Dashboard from './components/Dashboard/Dashboard.js';

import withAuthentication from './containers/withAuthentication/withAuthentication.js';

injectGlobal`
body{
margin:0;
padding: 0;
}
`;

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + routes.LANDING}
            component={SignIn}
          />
          <Route exact path={routes.SIGN_IN} component={SignIn} />
        </Switch>
        <Route exact path={routes.SIGN_UP} component={SignUp} />
        <Route exact path={routes.PASSWORD_FORGET} component={PasswordForget} />
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.ACCOUNT} component={Account} />
        <Route path={routes.DASHBOARD} component={Dashboard} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default withAuthentication(App);
