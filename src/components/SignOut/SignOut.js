import React from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase/index.js';

const StyledAnchor = styled.a`
  color: white;
  margin-left: auto;
  margin-right: 12px;
  background: transparent;
  border: none;
  font-size: 16.5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    color: #ccc;
  }
`;
const signOut = props => (
  <StyledAnchor onClick={auth.doSignOut}>Sign Out</StyledAnchor>
);

export default signOut;
