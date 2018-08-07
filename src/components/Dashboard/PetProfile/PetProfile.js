import React, { Component } from 'react';
import { db } from '../../../firebase';

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
    const pets = this.state.pet ? (
      <div>
        <p>{this.state.pet.age}</p>
        <p>{this.state.pet.name}</p>
        <p>{this.state.pet.animal}</p>
        <p>{this.state.pet.breed}</p>
      </div>
    ) : null;
    return <div>{pets}</div>;
  }
}

export default PetProfile;
