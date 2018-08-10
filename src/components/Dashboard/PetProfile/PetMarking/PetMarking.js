import React, { Component } from 'react';
import styled from 'styled-components';

import PetMarkingEdit from './PetMarkingEdit/PetMarkingEdit.js';
import Backdrop from '../../../UI/Backdrop/backdrop.js';

import EditPanel from '../../../UI/EditPanel/EditPanel.js';

const StyledWrapper = styled.div`
  max-width: 400px;
  width: 40%;
  @media (max-width: 500px) {
    width: 65%;
  }
`;
const StyledPetMarking = styled.div`
  text-align: center;
  margin: 0 auto 5px auto;
  color: #665;
  padding: 20px;
  border: 1px solid #ccc;
  div {
    margin: 10px;
  }
`;

class PetMarking extends Component {
  state = {
    showBackdrop: false
  };

  toggleBackdrop = () => {
    this.setState({
      showBackdrop: !this.state.showBackdrop
    });
  };
  render() {
    return (
      <StyledWrapper>
        <EditPanel editable label="Marking" clicked={this.toggleBackdrop} />
        <StyledPetMarking>
          <div>
            Transponder alphanumeric code:
            {this.props.marking.code}
          </div>
          <div>Date of application: {this.props.marking.applicationDate}</div>
          <div>Location: {this.props.marking.location}</div>
        </StyledPetMarking>
        <PetMarkingEdit
          fetch={this.props.fetch}
          user={this.props.user}
          petId={this.props.petId}
          show={this.state.showBackdrop}
          clicked={this.toggleBackdrop}
        />
        <Backdrop
          clicked={this.toggleBackdrop}
          show={this.state.showBackdrop}
        />
      </StyledWrapper>
    );
  }
}

export default PetMarking;
