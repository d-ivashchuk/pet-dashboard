import React from 'react';
import styled from 'styled-components';
import SignUp from '../SignUp/SignUp.js';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes.js';

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

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInfo = styled.div`
  margin: auto;
  margin-top: 20px;

  text-align: center;
  background-color: palevioletred;
  color: white;
  padding: 10px;
  > a {
    text-decoration: none;
    color: #bada55;
    &:hover {
      color: ;
    }
  }
`;

const landing = props => {
  return (
    <React.Fragment>
      <StyledLanding>
        <StyledInfo>
          This project serves as an example of working React.js + Firebase app
          with full user journey and integrated real time data-base.
          <br />Styled with
          <span
            style={{ marginLeft: '5px' }}
            role="img"
            aria-label="nail-polish">
            💅
          </span>
          <br />
          <a href="https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/">
            Tutorial
          </a>
        </StyledInfo>
        <SignUp />
        <StyledLink>
          Already have an account? <Link to={routes.SIGN_IN}>Sign In</Link>
        </StyledLink>
      </StyledLanding>
    </React.Fragment>
  );
};

export default landing;
