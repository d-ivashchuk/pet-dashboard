import { db } from './firebase.js';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    petName: 'dima',
    ownerName: 'jora'
  });

export const doCreatePet = (name, age, animal, breed, user) => {
  db
    .ref(`pets/${user}`)
    .push()
    .set({
      name: name,
      age: age,
      animal: animal,
      breed: breed
    });
};

export const onceGetUsers = () => db.ref('users').once('value');
export const onceGetPets = () => db.ref('pets').once('value');
