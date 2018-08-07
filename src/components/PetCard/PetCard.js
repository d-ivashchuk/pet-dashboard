import React, { Component } from 'react';

import styled from 'styled-components';

import Link from '../UI/Link/Link.js';
import foot from '../../assets/pet_icons/foot.svg';

const StyledCard = styled.div`
  margin: 10px;
  min-width: 200px;
  height: 300px;
  padding: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const StyledImg = styled.img`
  display: block;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
`;

const StyledName = styled.div`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
  color: #665;
`;
const StyledAge = styled.div`
  display: block;
  margin: auto;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  max-width: 30px;
  border-radius: 50px;
  border: 2px solid #10aded;
  color: #665;
`;
const StyledAnimal = styled.div`
  display: block;
  text-align: center;
  opacity: 0.5;
  margin-bottom: 30px;
`;

class PetCard extends Component {
  render() {
    return (
      <StyledCard>
        <StyledImg src={foot} alt="" />
        <StyledAge>{this.props.years}</StyledAge>
        <StyledName>{this.props.petName}</StyledName>
        <StyledAnimal>{this.props.animal}</StyledAnimal>
        <Link route={`/dashboard/${this.props.link}`} label="To profile" />
      </StyledCard>
    );
  }
}

export default PetCard;
