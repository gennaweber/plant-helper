// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'gennas-plant-helper.firebaseapp.com',
  databaseURL: 'https://gennas-plant-helper-default-rtdb.firebaseio.com',
  projectId: 'gennas-plant-helper',
  storageBucket: 'gennas-plant-helper.appspot.com',
  messagingSenderId: '532731289422',
  appId: '1:532731289422:web:ea0c75a83d2dc7d3d7481f',
  measurementId: 'G-CGYTCEFM7H',
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

// export const db = firebase.firestore();
// console.log(db);
// const analytics = getAnalytics(app);
