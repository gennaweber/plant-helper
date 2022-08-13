import {
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../components/Auth';
import BasicContainer from '../components/BasicContainer';
import { CustomHits } from '../components/Hit';
import { app, db } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';
import Loader from './Loader';

const { firebase } = app;

const Collection = () => {
  const { name } = useParams();

  const [title, setTitle] = useState('Loading...');
  const [loading, setLoading] = useState(true);
  const [ids, setIds] = useState([]);
  const [list, setList] = useState(false);

  const user = useContext(UserContext);

  const handleToggle = (event, value) => {
    setList(value);
  };

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
      setLoading(false);
    });
    return () => {
      unsubscribe();
      setLoading(true);
      setIds([]);
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
              </Grid>
            </BasicContainer>
            {loading ? (
              <BasicContainer>
                <Loader />
              </BasicContainer>
            ) : (
              <>
                {ids.length < 1 ? (
                  <BasicContainer>
                    <Typography>
                      Add some plants to this collection using the "Care Guide"
                      tab
                    </Typography>
                  </BasicContainer>
                ) : (
                  <>
                    <BasicContainer>
                      <ToggleButtonGroup
                        value={list}
                        exclusive
                        onChange={handleToggle}
                        aria-label='text alignment'>
                        <ToggleButton value={false} aria-label='card view'>
                          <Typography variant='h5'>Card View</Typography>
                        </ToggleButton>
                        <ToggleButton value={true} aria-label='list view'>
                          <Typography variant='h5'>List View</Typography>
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </BasicContainer>
                    <CustomHits filters={ids} list={list} />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <Grid container mt={8}>
            <Auth />
          </Grid>
        )}
      </div>
    </>
  );
};

export default Collection;
