import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import app from '../helpers/firebase';

const { firebase } = app;

console.log(firebase);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      {false && (
        <>
          <p>
            Welcome {firebase.auth().currentUser.displayName}! You are now
            signed-in!
          </p>
          <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </>
      )}
    </div>
  );
}

export default SignInScreen;
