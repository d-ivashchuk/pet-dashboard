import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SignOut from '../SignOut/SignOut.js';
import AuthUserContext from '../../context/AuthUserContext/AuthUserContext.js';

import * as routes from '../../constants/routes.js';

const StyledNavi = styled.ul`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #10aded;
  margin: 0;
  height: 3em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  align-items: center;
  padding-left: 0;
  z-index: 999;

  > li {
    text-decoration: none;
    list-style: none;
    height: 1.2rem;
    margin: 0 5px 0 15px;
  }
  > li > a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    &:hover {
      color: #333;
    }
    &.active {
      color: #333;
    }
  }
`;
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <StyledNavi>
    <li>
      <NavLink to={routes.HOME} exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.ACCOUNT} exact>
        Account
      </NavLink>
    </li>

    <SignOut />
  </StyledNavi>
);

const NavigationNonAuth = () => (
  <StyledNavi>
    <li>
      <NavLink to={routes.SIGN_IN} exact>
        Sign In
      </NavLink>
    </li>
  </StyledNavi>
);

export default Navigation;
