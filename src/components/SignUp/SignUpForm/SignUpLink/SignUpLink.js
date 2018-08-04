import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../../../constants/routes.js';

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

const signUpLink = props => (
  <StyledLink>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </StyledLink>
);

export default signUpLink;
