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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate placeat obcaecati id incidunt, error officiis alias ea atque totam maiores ad sunt impedit aut saepe, facilis dolorem illum. Doloremque.',
      info: {
        sex: 'male',
        birthDate: '14/01/2018',
        color: 'grey',
        name: name,
        age: age,
        animal: animal,
        breed: breed
      },
      marking: {
        code: 616093900359337,
        applicationDate: '5/03/2018',
        location: 'Lena Stona 5241'
      },
      vaccinations: {
        type: 'anti-rabies',
        date: '27.04.2018',
        validTill: '27.04.2019'
      }
    });
};

export const onceGetUsers = () => db.ref('users').once('value');
export const onceGetPets = () => db.ref('pets').once('value');
export const onceGetPet = (user, petId) =>
  db.ref(`pets/${user}/${petId}`).once('value');
