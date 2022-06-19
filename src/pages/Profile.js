import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import Auth from '../components/Auth';
import BasicContainer from '../components/BasicContainer';
import Drawer from '../components/Drawer';
import TabsRouter from '../components/TabsRouter';
import { app } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';

const { firebase } = app;

const Home = (props) => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div>
        <Drawer state={props.state} toggleDrawer={props.toggleDrawer} />
        <TabsRouter />
        {user ? (
          <BasicContainer width='sm'>
            <Grid container direction='column'>
              <Grid
                item
                container
                direction='row'
                alignItems='center'
                justifyContent='flex-start'
                sx={{ width: '100%' }}>
                <Grid item xs={12}>
                  <Typography variant='h1' align='center' mt='2vh' mx='2vh'>
                    Profile
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h5' my={2}>
                    Logged in as: {user.displayName || user.email}
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
              </Grid>
            </Grid>
          </BasicContainer>
        ) : (
          <Auth />
        )}
      </div>
    </>
  );
};

export default Home;
