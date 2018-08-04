import React, { Component } from 'react';
import { auth } from '../../../firebase/index.js';
import * as routes from '../../../constants/routes.js';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 300px;
  margin: auto;
  margin-top: 3rem;
  border-radius: 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const StyledInput = styled.input`
  display: block;
  font-size: 1em;
  padding: 20px;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
`;

const StyledButton = styled.button`
  display: block;
  font-size: 1em;
  width: 100%;
  padding: 20px;
  font-family: 'Roboto';
  -webkit-appearance: none;
  outline: 0;
  border: 0;
  color: white;
  background: #10aded;
  &:hover {
    background: #10ad99;
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
      </StyledForm>
    );
  }
}

export default SignInForm;
