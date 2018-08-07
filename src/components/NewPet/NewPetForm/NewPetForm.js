import React from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input/Input.js';
import Button from '../../UI/button/button.js';
import passport from '../../../assets/pet_icons/passport.svg';
import close from '../../../assets/ui_icons/close.svg';

import { db } from '../../../firebase';
import { auth } from '../../../firebase/firebase.js';

const StyledNewPetForm = styled.form`
  position: fixed;

  z-index: 500;
  background-color: white;
  width: 40%;
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

const INITIAL_STATE = {
  name: '',
  age: '',
  animal: '',
  breed: ''
};

class NewPetForm extends React.Component {
  state = {
    ...INITIAL_STATE
  };

  onValueChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  submitHandler = event => {
    const { name, age, animal, breed } = this.state;

    db.doCreatePet(
      name,
      age,
      animal,
      breed,
      auth.currentUser.email.slice(0, -4)
    );
    this.setState({ ...INITIAL_STATE });
    event.preventDefault();
    this.props.reloadData();
    this.props.toggleBackdrop();
  };

  render() {
    const { name, age, animal, breed } = this.state;

    const isInvalid = name === '' || age === '' || animal === '';

    return (
      <StyledNewPetForm show={this.props.show} onSubmit={this.submitHandler}>
        <StyledClose src={close} onClick={this.props.toggleBackdrop} />
        <StyledImg src={passport} />
        <Input
          type="text"
          label="name"
          value={name}
          onValueChange={this.onValueChange.bind(this, 'name')}
        />
        <Input
          type="number"
          label="age"
          value={age}
          onValueChange={this.onValueChange.bind(this, 'age')}
        />
        <Input
          type="text"
          label="animal"
          value={animal}
          onValueChange={this.onValueChange.bind(this, 'animal')}
        />
        <Input
          type="text"
          label="breed"
          value={breed}
          onValueChange={this.onValueChange.bind(this, 'breed')}
        />
        <Button disabled={isInvalid} type="submit" label="Create new" />
      </StyledNewPetForm>
    );
  }
}

export default NewPetForm;
