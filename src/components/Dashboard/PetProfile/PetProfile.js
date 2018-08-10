import React, { Component } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase';

import foot from '../../../assets/pet_icons/foot.svg';
import dog from '../../../assets/pet_icons/dog.svg';
import cat from '../../../assets/pet_icons/cat.svg';
import hamster from '../../../assets/pet_icons/hamster.svg';
import fish from '../../../assets/pet_icons/fish.svg';
import parrot from '../../../assets/pet_icons/parrot.svg';

import PetInfo from './PetInfo/PetInfo.js';
import PetDescription from './PetDescription/PetDescription.js';
import PetMarking from './PetMarking/PetMarking.js';
import PetVaccinations from './PetVaccinations/PetVaccinations.js';
import DeletePet from './DeletePet/DeletePet.js';
import Icon from '../../UI/Icon/Icon.js';
import IconLoader from '../../UI/IconLoader/IconLoader.js';
import TextLoader from '../../UI/TextLoader/TextLoader.js';

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
  margin-bottom: 10px;
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
    this.state.pet ? (animal = this.state.pet.info.animal) : (animal = 'foot');

    switch (animal.toLowerCase()) {
      case 'dog':
        icon = dog;
        break;
      case 'cat':
        icon = cat;
        break;
      case 'hamster':
        icon = hamster;
        break;
      case 'fish':
        icon = fish;
        break;
      case 'parrot':
        icon = parrot;
        break;
      default:
        icon = foot;
    }

    const pet = this.state.pet ? (
      <StyledProfile>
        {this.state.pet ? (
          <React.Fragment>
            <Icon src={icon} height="150px" width="150px" />
            <StyledAge>{this.state.pet.info.age}</StyledAge>
            <StyledName>{this.state.pet.info.name}</StyledName>
            <StyledAnimal>{this.state.pet.info.animal}</StyledAnimal>
            <PetDescription description={this.state.pet.description} />
            <PetInfo
              fetch={this.fetchData}
              user={this.props.user}
              petId={this.props.petId}
              info={this.state.pet.info}
            />
            <PetMarking
              marking={this.state.pet.marking}
              fetch={this.fetchData}
              user={this.props.user}
              petId={this.props.petId}
            />
            <PetVaccinations
              user={this.props.user}
              petId={this.props.petId}
              vaccinations={this.state.pet.vaccinations}
              fetch={this.fetchData}
            />
            <DeletePet user={this.props.user} petId={this.props.petId} />
          </React.Fragment>
        ) : null}
      </StyledProfile>
    ) : (
      <React.Fragment>
        <IconLoader height="150px" width="150px" />
        <TextLoader height="20px" width="100px" lines="3" />
        <br />
        <br />
        <TextLoader height="15px" width="200px" lines="4" />
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <div>{pet}</div>
      </React.Fragment>
    );
  }
}

export default PetProfile;
