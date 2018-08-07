import React, { Component } from 'react';
import styled from 'styled-components';
import kennel from '../../../assets/pet_icons/kennel.svg';

import Icon from '../../UI/Icon/Icon.js';

const StyledCard = styled.div`
  margin: 10px;
  min-width: 200px;
  height: 300px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  > span {
    display: flex;
    margin: 40px auto 0 auto;
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
const StyledInfo = styled.p`
  margin-top: 45px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

class NewPetCard extends Component {
  render() {
    return (
      <StyledCard>
        <Icon height="100px" width="100px" src={kennel} />
        <StyledInfo>Add a new pet</StyledInfo>
        <span onClick={this.props.clicked}>
          <StyledPlusButton>+</StyledPlusButton>
        </span>
      </StyledCard>
    );
  }
}

export default NewPetCard;
