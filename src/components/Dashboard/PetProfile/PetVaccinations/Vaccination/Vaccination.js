import React from 'react';
import styled from 'styled-components';

import { db } from '../../../../../firebase';

const StyledVaccination = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #ccc;
  margin: 10px auto 5px auto;
  div {
    text-align: center;
  }
`;
const StyledClose = styled.div`
  width: 10px;
  height: 10px;
  cursor: pointer;
  color: red;
`;

class Vaccination extends React.Component {
  deleteHandler = () => {
    db.deleteVaccination(
      this.props.user.slice(0, -4),
      this.props.petId,
      this.props.vaccinationId
    );
    this.props.fetch(this.props.user.slice(0, -4), this.props.petId);
  };
  render() {
    return (
      <StyledVaccination>
        <StyledClose onClick={this.deleteHandler}>x</StyledClose>
        <div>Type: {this.props.type}</div>
        <div>Date: {this.props.date}</div>
        <div>Valid untill: {this.props.validTill}</div>
      </StyledVaccination>
    );
  }
}

export default Vaccination;
