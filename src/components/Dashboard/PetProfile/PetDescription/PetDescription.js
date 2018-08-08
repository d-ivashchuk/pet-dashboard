import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPetDescription = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
  color: #ccc;
  padding: 20px;
`;

class PetDescription extends Component {
  render() {
    return (
      <StyledPetDescription>{this.props.description}</StyledPetDescription>
    );
  }
}

export default PetDescription;
