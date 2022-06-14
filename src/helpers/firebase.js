// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'gennas-plant-helper.firebaseapp.com',
  projectId: 'gennas-plant-helper',
  storageBucket: 'gennas-plant-helper.appspot.com',
  messagingSenderId: '532731289422',
  appId: '1:532731289422:web:ea0c75a83d2dc7d3d7481f',
  measurementId: 'G-CGYTCEFM7H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
