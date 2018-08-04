import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div`
  text-align: center;
  margin-top: 30px;
  a {
    text-decoration: none;
    color: #10aded;
    &:hover {
      color: #10ad99;
    }
  }
`;

const PasswordForgetLink = () => (
  <StyledLink>
    <Link to="/pw-forget">Forgot Password</Link>
  </StyledLink>
);

export default PasswordForgetLink;
