import React, { Component } from 'react';
import { db } from '../../../../firebase';
import { withRouter } from 'react-router-dom';

import Button from '../../../UI/button/button.js';

class DeletePet extends Component {
  deletePet = (user, petId) => {
    db.deletePet(user, petId);
    this.props.history.push('/home');
  };

  render() {
    return (
      <Button
        clicked={() =>
          this.deletePet(this.props.user.slice(0, -4), this.props.petId)
        }
        label="delete profile"
      />
    );
  }
}

export default withRouter(DeletePet);
