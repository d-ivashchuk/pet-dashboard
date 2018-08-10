import React, { Component } from 'react';
import styled from 'styled-components';
import Vaccination from './Vaccination/Vaccination.js';

import Button from '../../../UI/button/button.js';
import EditPanel from '../../../UI/EditPanel/EditPanel.js';
import Input from '../../../UI/Input/Input.js';
import { db } from '../../../../firebase';

const StyledWrapper = styled.div`
  max-width: 400px;
  width: 40%;
  @media (max-width: 500px) {
    width: 65%;
  }
`;
const StyledPetVaccinations = styled.div`
  text-align: center;
  margin: auto;
  color: #665;
  padding: 10px 20px 20px 20px
  border: 1px solid #ccc;
`;

const INITIAL_STATE = {
  date: '',
  type: '',
  validTill: '',
  showNewVaccine: false
};

class PetVaccinations extends Component {
  state = {
    ...INITIAL_STATE
  };
  onValueChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  toggleNewVaccine = () => {
    this.setState({
      showNewVaccine: !this.state.showNewVaccine
    });
  };

  submitHandler = event => {
    this.setState({
      ...INITIAL_STATE
    });
    event.preventDefault();
    const { type, date, validTill } = this.state;
    const { user, petId } = this.props;
    db.doAddVaccination(user.slice(0, -4), petId, type, date, validTill);
    this.toggleNewVaccine();
    this.props.fetch(user.slice(0, -4), petId);
  };
  render() {
    return (
      <StyledWrapper>
        <EditPanel label="Vaccinations" />
        <StyledPetVaccinations>
          {!this.state.showNewVaccine ? (
            <Button
              color="#ccc"
              label="New vaccination"
              clicked={this.toggleNewVaccine}
            />
          ) : (
            <React.Fragment>
              <form onSubmit={this.submitHandler}>
                <Input
                  label="type"
                  value={this.state.type}
                  onValueChange={this.onValueChange.bind(this, 'type')}
                />
                <Input
                  label="date"
                  value={this.state.date}
                  onValueChange={this.onValueChange.bind(this, 'date')}
                />
                <Input
                  label="valid"
                  value={this.state.validTill}
                  onValueChange={this.onValueChange.bind(this, 'validTill')}
                />
                <Button color="#ccc" type="submit" label="add" />
              </form>
            </React.Fragment>
          )}
          {this.props.vaccinations
            ? Object.entries(this.props.vaccinations).map(vaccination => (
                <Vaccination
                  key={vaccination[0]}
                  fetch={this.props.fetch}
                  user={this.props.user}
                  petId={this.props.petId}
                  vaccinationId={vaccination[0]}
                  date={vaccination[1].date}
                  type={vaccination[1].type}
                  validTill={vaccination[1].validTill}
                />
              ))
            : null}
        </StyledPetVaccinations>
      </StyledWrapper>
    );
  }
}

export default PetVaccinations;
