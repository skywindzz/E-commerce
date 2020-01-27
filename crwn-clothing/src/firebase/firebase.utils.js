import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAQVGIjwCW-vVaUrR5vZCVZlXS9qnwoHvo',
  authDomain: 'crwn-db-b56b5.firebaseapp.com',
  databaseURL: 'https://crwn-db-b56b5.firebaseio.com',
  projectId: 'crwn-db-b56b5',
  storageBucket: 'crwn-db-b56b5.appspot.com',
  messagingSenderId: '51529190156',
  appId: '1:51529190156:web:33acc327f847b781645729',
  measurementId: 'G-R73KJ4K3V4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
