import React from 'react';

import { withRouter } from 'react-router-dom';

import AuthUserContext from '../../context/AuthUserContext/AuthUserContext.js';
import { firebase } from '../../firebase/index.js';
import * as routes from '../../constants/routes.js';

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }
  return withRouter(WithAuthorization);
};

export default withAuthorization;
