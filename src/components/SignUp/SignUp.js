import React from 'react';
import SignUpForm from './SignUpForm/SignUpForm.js';
import { withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import Headroom from 'react-headroom';

const signUp = ({ history }) => {
  return (
    <React.Fragment>
      <Headroom>
        <Navigation />
      </Headroom>
      <SignUpForm history={history} />
    </React.Fragment>
  );
};

export default withRouter(signUp);
