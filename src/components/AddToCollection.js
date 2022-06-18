import AddIcon from '@mui/icons-material/Add';
import { Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../helpers/UserContext';

const AddToCollection = () => {
  const user = useContext(UserContext);

  console.log(user);

  return (
    <>
      {user ? (
        <>
          <Grid container direction='row' spacing={2} alignItems='center'>
            <Grid item xs={12}>
              <Button
                size='large'
                variant='contained'
                fullWidth={true}
                startIcon={<AddIcon />}
                color='secondary'>
                Add to collection
              </Button>
            </Grid>
          </Grid>
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
