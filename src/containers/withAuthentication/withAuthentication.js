import React from 'react';

import { firebase } from '../../firebase/index.js';
import AuthUserContext from '../../context/AuthUserContext/AuthUserContext.js';

const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    state = {
      authUser: null
    };
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }
    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  };

export default withAuthentication;
