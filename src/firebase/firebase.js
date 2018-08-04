import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAW1MUVd8xph53rXp_nCzbNFhwJ3WAKrEc',
  authDomain: 'fir-app-963ab.firebaseapp.com',
  databaseURL: 'https://fir-app-963ab.firebaseio.com',
  projectId: 'fir-app-963ab',
  storageBucket: 'fir-app-963ab.appspot.com',
  messagingSenderId: '495754624293'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
