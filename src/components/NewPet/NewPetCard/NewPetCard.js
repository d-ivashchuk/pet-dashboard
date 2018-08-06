import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 10px;
  min-width: 200px;
  height: 300px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  > span {
    transition: all 0.2s ease-out;
    font-size: 200px;
    &:hover {
      transition: all 1s;
      font-size: 230px;
      cursor: pointer;
    }
  }
`;

class NewPetCard extends Component {
  render() {
    return (
      <StyledCard>
        <span onClick={this.props.clicked}>+</span>
        <p>Create new Pet</p>
      </StyledCard>
    );
  }
}

export default NewPetCard;
