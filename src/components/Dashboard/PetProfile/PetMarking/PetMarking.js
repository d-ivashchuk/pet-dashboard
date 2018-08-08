import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPetMarking = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
  color: #ccc;
  padding: 20px;
`;

class PetMarking extends Component {
  render() {
    return (
      <StyledPetMarking>
        <div>Transponder alphanumeric code: {this.props.marking.code}</div>
        <div>Date of application: {this.props.marking.applicationDate}</div>
        <div>Location: {this.props.marking.location}</div>
      </StyledPetMarking>
    );
  }
}

export default PetMarking;
