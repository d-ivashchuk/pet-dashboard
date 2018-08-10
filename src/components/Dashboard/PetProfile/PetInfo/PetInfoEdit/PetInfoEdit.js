import React from 'react';
import styled from 'styled-components';
import Input from '../../../../UI/Input/Input.js';
import Button from '../../../../UI/button/button.js';
import passport from '../../../../../assets/pet_icons/passport.svg';
import close from '../../../../../assets/ui_icons/close.svg';

import { db } from '../../../../../firebase';

const StyledPetInfoEdit = styled.form`
  position: fixed;

  z-index: 101;
  background-color: white;
  width: 40%;
  max-width: 800px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  padding: 30px;
  left: 30%;
  top: 25%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  opacity: ${props => (props.show ? '1' : '0')};
  z-index: ${props => (props.show ? '500' : '-1')};
  display: : ${props => (props.show ? 'block' : 'none')};
  @media(max-width: 560px) {
  position: absolute;
  left: 10%;
  width:80%;

  }
`;

const StyledImg = styled.img`
  display: block;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;
const StyledClose = styled.img`
  height: 15px;
  width: 15px;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    transition: all 1s;
    height: 20px;
    width: 20px;
  }
`;

class PetInfoEdit extends React.Component {
  state = {
    name: '',
    age: '',
    breed: '',
    animal: '',
    color: '',
    birthDate: '',
    sex: ''
  };

  fetchData = (user, pet) => {
    db
      .onceGetInfo(user, pet)
      .then(snapshot => this.setState(() => ({ ...snapshot.val() })));
  };

  updateInfo(user, pet, updatedInfo) {
    db.updateInfo(this.props.user.slice(0, -4), this.props.petId, this.state);
  }

  onValueChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  componentDidMount() {
    this.fetchData(this.props.user.slice(0, -4), this.props.petId);
  }

  submitHandler = event => {
    this.updateInfo();
    event.preventDefault();
    this.props.clicked();
    this.props.fetch(this.props.user.slice(0, -4), this.props.petId);
  };

  render() {
    return this.state ? (
      <StyledPetInfoEdit show={this.props.show} onSubmit={this.submitHandler}>
        <StyledClose src={close} onClick={this.props.clicked} />
        <StyledImg src={passport} />
        <Input
          label="name"
          value={this.state.name}
          onValueChange={this.onValueChange.bind(this, 'name')}
        />
        <Input
          label="age"
          value={this.state.age}
          onValueChange={this.onValueChange.bind(this, 'age')}
        />
        <Input
          label="breed"
          value={this.state.breed}
          onValueChange={this.onValueChange.bind(this, 'breed')}
        />
        <Input
          label="species"
          value={this.state.animal}
          onValueChange={this.onValueChange.bind(this, 'animal')}
        />
        <Input
          label="color"
          value={this.state.color}
          onValueChange={this.onValueChange.bind(this, 'color')}
        />
        <Input
          label="birthDate"
          value={this.state.birthDate}
          onValueChange={this.onValueChange.bind(this, 'birthDate')}
        />
        <Input
          label="sex"
          value={this.state.sex}
          onValueChange={this.onValueChange.bind(this, 'sex')}
        />
        <Button type="submit" label="Edit" />
      </StyledPetInfoEdit>
    ) : null;
  }
}

export default PetInfoEdit;
