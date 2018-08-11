import React from 'react';
import withAuthorization from '../../containers/withAuthorization/withAuthorization.js';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import Navigation from '../Navigation/Navigation.js';

import { db } from '../../firebase';
import { auth } from '../../firebase/firebase.js';

import PetCard from '../PetCard/PetCard.js';
import NewPetCard from '../NewPet/NewPetCard/NewPetCard.js';
import Backdrop from '../UI/Backdrop/backdrop.js';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator.js';
import NewPetForm from '../NewPet/NewPetForm/NewPetForm.js';
import Icon from '../UI/Icon/Icon.js';

import wanted from '../../assets/pet_icons/wanted.svg';

const StyledWrapper = styled.div`
  margin: auto;
`;
const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
`;

class Home extends React.Component {
  state = {
    users: null,
    pets: null,
    showBackdrop: false,
    showNewPetCard: false
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
    if (!this.state.pets) {
      this.fetchData();
    }
  }

  toggleBackdrop = () => {
    this.setState({
      showBackdrop: !this.state.showBackdrop
    });
  };
  toggleNewPetCard = () => {
    this.setState({
      showNewPetCard: !this.state.showNewPetCard
    });
  };

  render() {
    const currentUser = auth.currentUser.email.slice(0, -4);
    const { pets, showBackdrop } = this.state;

    return (
      <React.Fragment>
        <Headroom>
          <Navigation />
          <NewPetCard clicked={this.toggleBackdrop} />
        </Headroom>

        <StyledLayout>
          {pets ? (
            pets[currentUser] ? (
              Object.entries(pets[currentUser]).map(pet => {
                return (
                  <StyledWrapper key={pet[0]}>
                    <PetCard
                      currentUser={currentUser}
                      petName={pet[1].info.name}
                      years={pet[1].info.age}
                      animal={pet[1].info.animal}
                      breed={pet[1].info.breed}
                      photoUrl="https://source.unsplash.com/random"
                      link={pet[0]}
                    />
                  </StyledWrapper>
                );
              })
            ) : (
              <React.Fragment>
                <Icon width="150px" height="150px" src={wanted} />
              </React.Fragment>
            )
          ) : (
            <LoadingIndicator />
          )}

          <Backdrop show={showBackdrop} clicked={this.toggleBackdrop} />

          <NewPetForm
            toggleBackdrop={this.toggleBackdrop}
            show={showBackdrop}
            reloadData={this.fetchData}
          />
        </StyledLayout>
      </React.Fragment>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Home);
