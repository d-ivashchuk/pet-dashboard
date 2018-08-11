import React from 'react';
import PasswordForget from '../PasswordForget/PasswordForget.js';
import PasswordChange from '../PasswordChange/PasswordChange.js';
import AuthUserContext from '../../context/AuthUserContext/AuthUserContext.js';
import withAuthorization from '../../containers/withAuthorization/withAuthorization.js';
import Navigation from '../Navigation/Navigation.js';
import Headroom from 'react-headroom';

const account = props => (
  <React.Fragment>
    <Headroom>
      <Navigation />
    </Headroom>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <h3 style={{ textAlign: 'center' }}> Email: {authUser.email}</h3>
        ) : null
      }
    </AuthUserContext.Consumer>
    <PasswordForget />
    <PasswordChange />
  </React.Fragment>
);

const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(account);
