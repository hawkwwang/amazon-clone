// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD63PezcKKa30EvSEOvpuwV_VAokWYAPQY",
    authDomain: "clone-af699.firebaseapp.com",
    projectId: "clone-af699",
    storageBucket: "clone-af699.appspot.com",
    messagingSenderId: "450087788948",
    appId: "1:450087788948:web:34c444574c4dba1df1ef81",
    measurementId: "G-22EFFJ11F7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};