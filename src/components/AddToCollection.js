import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../helpers/UserContext';
import { db } from '../helpers/firebase';
import Auth from './Auth';
import ManageCollections from './ManageCollections';
import Modal from './Modal';

const AddToCollection = ({ id, filters, img, title, list }) => {
  const user = useContext(UserContext);
  const { name } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemove = async () => {
    if (!name) return;
    if (!id) return;

    try {
      const plants = doc(db, user.uid, name, 'plants', id);
      await deleteDoc(plants);
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
                {list ? (
                  <IconButton
                    color='disabled'
                    aria-label='remove item'
                    id='remove-button'
                    aria-haspopup='false'
                    size='large'
                    onClick={handleRemove}>
                    <DeleteIcon fontSize='large' />
                  </IconButton>
                ) : (
                  <Button
                    size='large'
                    variant='contained'
                    fullWidth
                    onClick={handleRemove}
                    startIcon={<RemoveIcon />}
                    color='warning'>
                    Remove from collection
                  </Button>
                )}
              </Grid>
            </Grid>
          ) : (
            <Grid container direction='row' spacing={2} alignItems='center'>
              <Grid item xs={12}>
                {list ? (
                  <IconButton
                    aria-label='add item'
                    id='add-button'
                    aria-haspopup='true'
                    aria-controls={open ? 'add-button' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    size='large'
                    onClick={handleOpen}>
                    <AddIcon fontSize='large' />
                  </IconButton>
                ) : (
                  <Button
                    size='large'
                    variant='contained'
                    fullWidth
                    onClick={handleOpen}
                    startIcon={<AddIcon />}
                    color='secondary'>
                    Add to collection
                  </Button>
                )}
                <Modal open={open} handleClose={handleClose}>
                  <ManageCollections img={img} id={id} name={title}>
                    <Typography mb={1} variant='h2' align='center'>
                      Your Collections
                    </Typography>
                    <Typography mb={2} variant='h5' align='center'>
                      <>
                        Choose a collection to add <strong>{title}</strong> to
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
              fullWidth
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
