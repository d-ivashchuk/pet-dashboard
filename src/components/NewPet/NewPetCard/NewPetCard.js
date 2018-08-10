import React, { Component } from 'react';
import styled from 'styled-components';
import kennel from '../../../assets/pet_icons/kennel.svg';

import Icon from '../../UI/Icon/Icon.js';

const StyledCard = styled.div`
  position: sticky;
  background: white;
  top: 48px;
  max-width: 1140px;
  margin: 10px auto 10px auto;
  padding: 20px;
  z-index: 100;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.5s linear;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-100vh)')};
  opacity: ${props => (props.show ? '1' : '0')};
  @media (max-width: 560px) {
    margin: 10px auto 10px auto;
  }

  > span {
    display: flex;
    margin: 20px auto 0 auto;
    height: 60px;
    width: 60px;
    background: #10aded;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    transition: all 1s;
    &:hover {
      height: 70px;
      width: 70px;
      transition: all 1s;
      cursor: pointer;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &:active {
      display: flex;
      margin: 20px auto 0 auto;
      height: 60px;
      width: 60px;
      background: #10aded;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      transition: all 0.1s;
      box-shadow: none;
    }
  }
`;

const StyledPlusButton = styled.div`
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

class NewPetCard extends Component {
  render() {
    return (
      <StyledCard show={this.props.show}>
        <Icon height="100px" width="100px" src={kennel} />
        <span onClick={this.props.clicked}>
          <StyledPlusButton>+</StyledPlusButton>
        </span>
      </StyledCard>
    );
  }
}

export default NewPetCard;
