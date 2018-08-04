import React, { Component } from 'react';
import styled from 'styled-components';

import { auth } from '../../../firebase/index.js';

const StyledForm = styled.form`
  width: 300px;
  margin: auto;
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
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class PasswordChangeForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey('passwordOne', event.target.value))
          }
          type="password"
          placeholder="New Password"
        />
        <StyledInput
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey('passwordTwo', event.target.value))
          }
          type="password"
          placeholder="Confirm New Password"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Reset My Password
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

export default PasswordChangeForm;
