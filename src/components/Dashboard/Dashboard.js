import React, { Component } from 'react';
import PetProfile from './PetProfile/PetProfile.js';
import AuthUserContext from '../../context/AuthUserContext/AuthUserContext.js';

class Dashboard extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <React.Fragment>
              <PetProfile
                user={authUser.email}
                petId={this.props.location.pathname.replace('/dashboard/', '')}
              />
            </React.Fragment>
          ) : null
        }
      </AuthUserContext.Consumer>
    );
  }
}

export default Dashboard;
