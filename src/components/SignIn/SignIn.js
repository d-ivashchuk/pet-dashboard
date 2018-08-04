import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm.js';
import SignUpLink from '../SignUp/SignUpForm/SignUpLink/SignUpLink.js';
import PasswordForgetLink from '../PasswordForget/PasswordForgetForm/PasswordForgetLink/PasswordForgetLink.js';

const signIn = ({ history }) => (
  <React.Fragment>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </React.Fragment>
);

export default withRouter(signIn);
