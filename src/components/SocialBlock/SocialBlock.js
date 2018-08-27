import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const StyledSocialWrapper = styled.div`
  width: 300px;
  display: flex;
  margin: auto;
  justify-content: space-around;
`;

const SocialBlock = props => (
  <React.Fragment>
    <div
      style={{
        textAlign: 'center',
        margin: '20px',
        fontWeight: 'bold',
        color: '#555'
      }}>
      Find me on social networks and github!
    </div>
    <StyledSocialWrapper>
      <SocialIcon url="http://twitter.com/ivashchukD" />
      <SocialIcon url="http://github.com/d-ivashchuk" />
      <SocialIcon url="https://www.facebook.com/profile.php?id=100009132657431" />
    </StyledSocialWrapper>
  </React.Fragment>
);

export default SocialBlock;
