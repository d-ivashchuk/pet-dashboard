import React, { Component } from 'react';
import styled from 'styled-components';
import { auth } from '../../../firebase/index.js';

const StyledForm = styled.form`
  width: 300px;
  margin: auto;
  margin-bottom: 30px;
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
  email: '',
  error: null
};

class PasswordForgetForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  onSubmit = event => {
    const { email } = this.state;
    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          value={this.state.email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <StyledButton disabled={isInvalid} type="submit">
          Reset My Password
        </StyledButton>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

export default PasswordForgetForm;
