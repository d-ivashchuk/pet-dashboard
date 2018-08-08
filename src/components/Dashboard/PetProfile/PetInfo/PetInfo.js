import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPetInfo = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
  color: #ccc;
  padding: 20px;
`;

class PetInfo extends Component {
  render() {
    return (
      <StyledPetInfo>
        <div>Name: {this.props.info.name}</div>
        <div>Species: {this.props.info.animal}</div>
        <div>Breed: {this.props.info.breed}</div>
        <div>Sex: {this.props.info.sex}</div>
        <div>Date of birth: {this.props.info.birthDate}</div>
        <div>Color: {this.props.info.color}</div>
      </StyledPetInfo>
    );
  }
}

export default PetInfo;
