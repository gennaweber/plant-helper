import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';
import { deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { db } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';
import Auth from './Auth';
import ManageCollections from './ManageCollections';
import Modal from './Modal';

const AddToCollection = ({ id, filters, img, name }) => {
  const user = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      // console.log(id);
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
      // console.log(id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {user ? (
        <>
          {filters && filters.includes(id) ? (
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
                  onClick={handleOpen}
                  startIcon={<AddIcon />}
                  color='secondary'>
                  Add to collection
                </Button>
                <Modal open={open} handleClose={handleClose}>
                  <ManageCollections img={img} id={id} name={name} />
                </Modal>
              </Grid>
            </Grid>
          )}
        </>
      ) : (
        <Grid container direction='row' spacing={2} alignItems='center'>
          <Grid item xs={12}>
            <Button
              size='large'
              variant='contained'
              fullWidth={true}
              startIcon={<AddIcon />}
              color='secondary'
              onClick={handleOpen}>
              Log in to add to collection
            </Button>
          </Grid>
          <Modal open={open} handleClose={handleClose}>
            <Auth />
          </Modal>
        </Grid>
      )}
    </>
  );
};

export default AddToCollection;
