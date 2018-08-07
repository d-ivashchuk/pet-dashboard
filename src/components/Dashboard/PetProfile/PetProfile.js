import React, { Component } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase';

import foot from '../../../assets/pet_icons/foot.svg';
import dog from '../../../assets/pet_icons/dog.svg';
import cat from '../../../assets/pet_icons/cat.svg';
import hamster from '../../../assets/pet_icons/hamster.svg';
import fish from '../../../assets/pet_icons/fish.svg';
import parrot from '../../../assets/pet_icons/parrot.svg';

import Icon from '../../UI/Icon/Icon.js';
import LoadingIndicator from '../../UI/LoadingIndicator/LoadingIndicator.js';

const StyledProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  > img {
    margin-top: 20px;
  }
`;

const StyledName = styled.div`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
  color: #665;
`;
const StyledAge = styled.div`
  border-radius: 50%;
  margin: 5px auto 0 auto;
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

class PetProfile extends Component {
  state = {
    pet: null
  };

  fetchData = (user, pet) => {
    db
      .onceGetPet(user, pet)
      .then(snapshot => this.setState(() => ({ pet: snapshot.val() })));
  };

  componentDidMount() {
    this.fetchData(this.props.user.slice(0, -4), this.props.petId);
  }

  render() {
    let animal = '';
    let icon = null;
    this.state.pet ? (animal = this.state.pet.animal) : (animal = 'foot');

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

    const pet = this.state.pet ? (
      <StyledProfile>
        <Icon src={icon} height="150px" width="150px" />
        <StyledAge>{this.state.pet.age}</StyledAge>
        <StyledName>{this.state.pet.name}</StyledName>
        <StyledAnimal>{this.state.pet.animal}</StyledAnimal>
      </StyledProfile>
    ) : (
      <LoadingIndicator />
    );
    return <div>{pet}</div>;
  }
}

export default PetProfile;
