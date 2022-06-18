import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';
import { deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';

const AddToCollection = ({ id, filters }) => {
  const user = useContext(UserContext);

  const handleClick = async () => {
    if (!user) return;
    const collection = doc(db, user.uid, 'my-collection');
    const plants = doc(db, user.uid, 'my-collection', 'plants', id);
    try {
      await setDoc(collection, {
        name: 'My Collection',
        timestamp: serverTimestamp(),
      });

      await setDoc(plants, {
        collection: 'My Collection',
        plantID: id,
        timestamp: serverTimestamp(),
      });
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async () => {
    try {
      const plants = doc(db, user.uid, 'my-collection', 'plants', id);
      await deleteDoc(plants, {
        collection: 'My Collection',
        plantID: id,
        timestamp: serverTimestamp(),
      });
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {user ? (
        <>
          {filters.includes(id) ? (
            <Grid container direction='row' spacing={2} alignItems='center'>
              <Grid item xs={12}>
                <Button
                  size='large'
                  variant='contained'
                  fullWidth={true}
                  onClick={handleRemove}
                  startIcon={<AddIcon />}
                  color='error'>
                  Remove from collection
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container direction='row' spacing={2} alignItems='center'>
              <Grid item xs={12}>
                <Button
                  size='large'
                  variant='contained'
                  fullWidth={true}
                  onClick={handleClick}
                  startIcon={<AddIcon />}
                  color='secondary'>
                  Add to collection
                </Button>
              </Grid>
            </Grid>
          )}
        </>
      ) : (
        <Grid container direction='row' spacing={2} alignItems='center'>
          <Grid item xs={12}>
            <Link to='/auth'>
              <Button
                size='large'
                variant='contained'
                fullWidth={true}
                startIcon={<AddIcon />}
                color='secondary'>
                Log in to add to collection
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default AddToCollection;
