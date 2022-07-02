import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import Auth from '../components/Auth';
import BasicContainer from '../components/BasicContainer';
import ManageCollections from '../components/ManageCollections';
import TabsRouter from '../components/TabsRouter';
import { app } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';

const { firebase } = app;

const Collections = () => {
  const viewCollection = true;
  const user = useContext(UserContext);

  return (
    <div>
      <TabsRouter />
      {user ? (
        <BasicContainer width='lg'>
          <ManageCollections viewCollection={viewCollection}>
            <Grid container direction='column'>
              <Grid
                item
                container
                direction='row'
                alignItems='center'
                justifyContent='center'
                sx={{ width: '100%' }}>
                <Typography variant='h1' align='center' mt='2vh' mx='2vh'>
                  Your Collections
                </Typography>
                <Grid item xs={12}>
                  <Typography variant='h5' my={2} align='center'>
                    Logged in as: {user.displayName || user.email}
                  </Typography>
                </Grid>
                <Grid item mb={2}>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => firebase.auth().signOut()}>
                    Sign-out
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </ManageCollections>
        </BasicContainer>
      ) : (
        <Grid container mt={8}>
          <Auth />
        </Grid>
      )}
    </div>
  );
};

export default Collections;
