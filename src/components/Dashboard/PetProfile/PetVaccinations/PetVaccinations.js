import React, { Component } from 'react';
import styled from 'styled-components';

import EditPanel from '../../../UI/EditPanel/EditPanel.js';

const StyledPetVaccinations = styled.div`
  max-width: 400px;
  text-align: center;
  margin: auto;
  color: #ccc;
  padding: 20px;
  border: 1px solid #ccc;
`;

class PetVaccinations extends Component {
  render() {
    return (
      <div>
        <EditPanel />
        <StyledPetVaccinations>
          <div>type: {this.props.vaccinations.type}</div>
          <div>date: {this.props.vaccinations.date}</div>
          <div>valid until: {this.props.vaccinations.validTill}</div>
        </StyledPetVaccinations>
      </div>
    );
  }
}

export default PetVaccinations;
