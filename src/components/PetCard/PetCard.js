import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../UI/button/button.js';

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
`;
const StyledInfo = styled.p`
  margin-top: 10px;
  padding: 5px;
  text-align: center;
`;
const StyledYears = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

class PetCard extends Component {
  render() {
    return (
      <StyledCard>
        <StyledImg src={this.props.photoUrl} alt="" />
        <StyledInfo>
          {this.props.petName} proud pet of {this.props.ownerName}
        </StyledInfo>
        <StyledYears>{this.props.years}</StyledYears>
        <Button label="To profile" />
      </StyledCard>
    );
  }
}

export default PetCard;
