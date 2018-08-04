import React from 'react';
import withAuthorization from '../../containers/withAuthorization/withAuthorization.js';
import styled from 'styled-components';
import { db } from '../../firebase';

const StyledUl = styled.ul`
  display: flex;
  margin: auto;
  background: #bada55;
  width: 300px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 29px 36px -22px rgba(0, 0, 0, 0.75);
  padding: 0;
`;
const StyledLi = styled.li`
  font-size: 1.2rem;
  list-style: none;
  text-transform: capitalize;
  padding: 5px;
  color: white;
  font-weight: bold;
`;

class Home extends React.Component {
  state = {
    users: null
  };
  componentDidMount() {
    db
      .onceGetUsers()
      .then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  }
  render() {
    const { users } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center' }}>Home Page</h1>
        <h2 style={{ textAlign: 'center' }}>List of Users</h2>
        {!!users && <UserList users={users} />}
      </React.Fragment>
    );
  }
}

const UserList = ({ users }) => (
  <StyledUl>
    {Object.keys(users).map(key => (
      <StyledLi key={key}>{users[key].username}</StyledLi>
    ))}
  </StyledUl>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Home);
