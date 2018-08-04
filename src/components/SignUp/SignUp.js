import React from 'react';
import SignUpForm from './SignUpForm/SignUpForm.js';
import { withRouter } from 'react-router-dom';

const signUp = ({ history }) => {
  return (
    <React.Fragment>
      <SignUpForm history={history} />
    </React.Fragment>
  );
};

export default withRouter(signUp);
