import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';

const { firebase } = app;

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
  const user = useContext(UserContext);
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      p={2}
      mt={6}>
      <Grid item>
        <Typography variant='h3'>Please sign-in:</Typography>
      </Grid>
      <Grid item>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Grid>
      {user && (
        <>
          <Grid item>
            <Typography variant='body1'>
              Welcome {firebase.auth().currentUser.displayName}! You are now
              signed-in!
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => firebase.auth().signOut()}>
              Sign-out
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default SignInScreen;
