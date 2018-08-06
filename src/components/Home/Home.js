import React from 'react';
import withAuthorization from '../../containers/withAuthorization/withAuthorization.js';
import styled from 'styled-components';
import PetCard from '../PetCard/PetCard.js';
import NewPetCard from '../NewPet/NewPetCard/NewPetCard.js';
import { db } from '../../firebase';
import { auth } from '../../firebase/firebase.js';
import Backdrop from '../UI/Backdrop/backdrop.js';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator.js';
import NewPetForm from '../NewPet/NewPetForm/NewPetForm.js';

const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Home extends React.Component {
  state = {
    users: null,
    pets: null,
    showBackdrop: false
  };
  fetchData = () => {
    db
      .onceGetPets()
      .then(snapshot => this.setState(() => ({ pets: snapshot.val() })));
    db
      .onceGetUsers()
      .then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  };

  componentDidMount() {
    if (!this.state.pets) this.fetchData();
  }

  toggleBackdrop = () => {
    this.setState({
      showBackdrop: !this.state.showBackdrop
    });
  };

  render() {
    const currentUser = auth.currentUser.email.slice(0, -4);
    const { pets, showBackdrop } = this.state;

    return (
      <StyledLayout>
        <NewPetCard clicked={this.toggleBackdrop} />
        {pets ? (
          pets[currentUser] ? (
            Object.entries(pets[currentUser]).map(pet => {
              return (
                <PetCard
                  key={pet[0]}
                  ownerName={currentUser}
                  petName={pet[1].name}
                  years={pet[1].age}
                  photoUrl="https://source.unsplash.com/random"
                />
              );
            })
          ) : (
            <div>No pets currently</div>
          )
        ) : (
          <LoadingIndicator />
        )}

        <Backdrop show={showBackdrop} clicked={this.toggleBackdrop} />
        <NewPetForm show={showBackdrop} reloadData={this.fetchData} />
      </StyledLayout>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Home);
