import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPetVaccinations = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
  color: #ccc;
  padding: 20px;
`;

class PetVaccinations extends Component {
  render() {
    return (
      <StyledPetVaccinations>
        <div>type: {this.props.vaccinations.type}</div>
        <div>date: {this.props.vaccinations.date}</div>
        <div>valid until: {this.props.vaccinations.validTill}</div>
      </StyledPetVaccinations>
    );
  }
}

export default PetVaccinations;
