import React, { Component } from 'react';

import styled from 'styled-components';

import Link from '../UI/Link/Link.js';
import Icon from '../UI/Icon/Icon.js';

import foot from '../../assets/pet_icons/foot.svg';
import dog from '../../assets/pet_icons/dog.svg';
import cat from '../../assets/pet_icons/cat.svg';
import hamster from '../../assets/pet_icons/hamster.svg';
import fish from '../../assets/pet_icons/fish.svg';
import parrot from '../../assets/pet_icons/parrot.svg';

const StyledCard = styled.div`
  margin: 10px;
  min-width: 200px;
  height: 300px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media (max-width: 560px) {
    margin: 10px auto 10px auto;
  }
`;

const StyledName = styled.div`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 2px;
  color: #665;
`;
const StyledAge = styled.div`
  border-radius: 50%;
  margin: auto;
  width: 20px;
  height: 20px;
  padding: 8px;
  background: #fff;
  border: 2px solid #10aded;
  color: #666;
  text-align: center;
  font: 16px Arial, sans-serif;
`;
const StyledAnimal = styled.div`
  display: block;
  text-align: center;
  opacity: 0.5;
  margin-bottom: 30px;
`;

class PetCard extends Component {
  render() {
    let animal = '';
    let icon = null;
    this.props.animal ? (animal = this.props.animal) : (animal = 'foot');

    switch (animal.toLowerCase()) {
      case 'dog':
        console.log('dog');
        icon = dog;
        break;
      case 'cat':
        console.log('cat');
        icon = cat;
        break;
      case 'hamster':
        console.log('hamster');
        icon = hamster;
        break;
      case 'fish':
        console.log('fish');
        icon = fish;
        break;
      case 'parrot':
        console.log('parrot');
        icon = parrot;
        break;
      default:
        icon = foot;
    }
    return (
      <StyledCard>
        <Icon height="100px" width="100px" src={icon} />
        <StyledAge>{this.props.years}</StyledAge>
        <StyledName>{this.props.petName}</StyledName>
        <StyledAnimal>{this.props.animal}</StyledAnimal>
        <Link route={`/dashboard/${this.props.link}`} label="To profile" />
      </StyledCard>
    );
  }
}

export default PetCard;
