import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Typography } from '@mui/material';
import { deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
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

  // const handleClick = async (collection, collectionName) => {
  //   return await addDocument(
  //     collection,
  //     collectionName,
  //     user.uid,
  //     id,
  //     name,
  //     img
  //   );
  // };

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
                  <ManageCollections img={img} id={id} name={name}>
                    <Typography mb={1} variant='h2' align='center'>
                      Your Collections
                    </Typography>
                    <Typography mb={2} variant='h5' align='center'>
                      <>
                        Choose a collection to add <strong>{name}</strong> to
                      </>
                    </Typography>
                  </ManageCollections>
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
