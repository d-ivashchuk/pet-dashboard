import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPetInfo = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
  color: #ccc;
`;

class PetInfo extends Component {
  render() {
    return (
      <StyledPetInfo>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam fugiat
        totam eum cupiditate laboriosam, aliquam, sed expedita quae placeat quis
        quaerat ex dolores animi error aliquid tenetur, illum, esse nisi?
      </StyledPetInfo>
    );
  }
}

export default PetInfo;
