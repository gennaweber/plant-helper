import { Button, Grid, Typography } from '@mui/material';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../components/Auth';
import BasicContainer from '../components/BasicContainer';
import { CustomHits } from '../components/Hit';
import { app, db } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';

const { firebase } = app;

const Collection = () => {
  const { name } = useParams();

  const [title, setTitle] = useState('Loading...');
  const [ids, setIds] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) return;
    if (!name) return;

    const q = query(collection(db, user.uid, name, 'plants'));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          // console.log('New: ', change.doc.data());
          setIds((prev) => [...prev, change.doc.data().plantID]);
          setTitle(change.doc.data().collection);
        }
        if (change.type === 'modified') {
          console.log('Modified: ', change.doc.data());
          setIds((prev) => [...prev, change.doc.data().plantID]);
        }
        if (change.type === 'removed') {
          console.log('Removed: ', change.doc.data());
          setIds((prev) =>
            prev.filter((id) => id !== change.doc.data().plantID)
          );
        }
      });
    });
    return () => {
      unsubscribe();
    };
  }, [user, name]);

  return (
    <>
      <div>
        {user ? (
          <>
            <BasicContainer width='sm'>
              <Grid container direction='column'>
                <Grid
                  item
                  container
                  direction='row'
                  alignItems='center'
                  justifyContent='center'
                  sx={{ width: '100%' }}>
                  <Typography variant='h1' align='center' mt='2vh' mx='2vh'>
                    {title}
                  </Typography>
                  <Grid item xs={12}>
                    <Typography variant='h5' my={2} align='center'>
                      Logged in as: {user.displayName || user.email}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => firebase.auth().signOut()}>
                      Sign-out
                    </Button>
                  </Grid>
                </Grid>
                <Grid item mt='2vh' mb='5vh'></Grid>
              </Grid>
            </BasicContainer>
            {ids.length < 1 ? (
              <BasicContainer>
                <Typography>
                  Add some plants to this collection using the "Care Guide" tab
                </Typography>
              </BasicContainer>
            ) : (
              <CustomHits filters={ids} />
            )}
          </>
        ) : (
          <Auth />
        )}
      </div>
    </>
  );
};

export default Collection;
