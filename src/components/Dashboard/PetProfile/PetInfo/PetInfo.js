import React, { Component } from 'react';
import styled from 'styled-components';

import EditPanel from '../../../UI/EditPanel/EditPanel.js';

import PetInfoEdit from './PetInfoEdit/PetInfoEdit.js';
import Backdrop from '../../../UI/Backdrop/backdrop.js';

const StyledPetInfo = styled.div`
  text-align: center;
  margin: 0 auto 5px auto;
  color: #ccc;
  padding: 20px;
  border: 1px solid #ccc;
`;

class PetInfo extends Component {
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
      <div>
        <EditPanel clicked={this.toggleBackdrop} />
        <StyledPetInfo>
          <div>Name: {this.props.info.name}</div>
          <div>Species: {this.props.info.animal}</div>
          <div>Breed: {this.props.info.breed}</div>
          <div>Sex: {this.props.info.sex}</div>
          <div>Date of birth: {this.props.info.birthDate}</div>
          <div>Color: {this.props.info.color}</div>
        </StyledPetInfo>
        <PetInfoEdit
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
      </div>
    );
  }
}

export default PetInfo;
