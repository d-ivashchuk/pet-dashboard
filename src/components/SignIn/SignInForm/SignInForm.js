import React, { Component } from 'react';
import styled from 'styled-components';
import { auth } from '../../../firebase/index.js';
import * as routes from '../../../constants/routes.js';
import Icon from '../../UI/Icon/Icon.js';

import reward from '../../../assets/pet_icons/reward.svg';

const StyledForm = styled.form`
  position: relative;
  z-index: 1;
  background: white;
  max-width: 300px;
  margin: 100px auto 50px auto;
  padding: 30px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const StyledInput = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-sizing: border-box;
  font-size: 14px;
`;

const StyledButton = styled.button`
  outline: 0;
  background: #be3433;
  width: 100%;
  border: 0;
  padding: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  &:hover {
    background: #ef3b3a;
    cursor: pointer;
  }
  &:disabled {
    background-color: #ccc;
    color: #777;
    cursor: not-allowed;
  }
`;

const StyledErrorMessage = styled.div`
  padding: 1em;
  text-align: center;
  color: #ff545e;
`;

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <Icon width="160px" height="160px" src={reward} />
        <StyledInput
          value={email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <StyledInput
          value={password}
          onChange={event =>
            this.setState(byPropKey('password', event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Sign In
        </StyledButton>

        {error && (
          <StyledErrorMessage>
            Password is wrong or user does not exist.
          </StyledErrorMessage>
        )}
        {this.props.children}
      </StyledForm>
    );
  }
}

export default SignInForm;
