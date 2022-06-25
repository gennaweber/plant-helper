import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { db } from '../helpers/firebase';
import { UserContext } from '../helpers/UserContext';

const style = {
  border: '5px dashed #F3C892',
  backgroundColor: 'rgba(243, 200, 146, 0.2)',
  color: '#F3C892',
  fontSize: '3rem',
  height: '200px',
  margin: '10px',
};

const CreateCollection = ({ img, id, name, handleClick }) => {
  const user = useContext(UserContext);

  const [textBox, setTextBox] = useState(false);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [collections, setCollections] = useState([]);
  const [extra, setExtra] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const toggleTextBox = () => setTextBox(!textBox);

  const addDocument = async (collection = 'New') => {
    const kebabCase = _.kebabCase(collection);

    const plants = doc(db, user.uid, kebabCase, 'plants', id);

    const docInfo = doc(db, user.uid, kebabCase);

    try {
      await setDoc(plants, {
        collection: collection,
        plantID: id,
        name: name,
        img: img,
        timestamp: serverTimestamp(),
      });

      await updateDoc(docInfo, {
        img: img,
        timestamp: serverTimestamp(),
      });

      console.log(id);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const handleSubmit = async () => {
    const kebabName = _.kebabCase(title);
    const collection = doc(db, user.uid, kebabName);

    //check if collection with that name already exists
    const res = await getDoc(collection);
    if (res.exists()) {
      setError(
        'You already have a collection with that name; try choosing something else.'
      );
      return;
    } else {
      try {
        await setDoc(collection, {
          name: title,
          timestamp: serverTimestamp(),
          img: img,
        });
        setSuccess(true);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
  };

  //clear error message after a set amount of time
  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 50000);
  }, [success, error]);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, user.uid));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();

        if (change.type === 'added') {
          // console.log('New: ', data);
          const kebabName = _.kebabCase(data.name);
          setCollections((prev) => [...prev, data.name]);
          setExtra((prev) => ({ ...prev, [kebabName]: data.img }));
        }
        if (change.type === 'modified') {
          console.log('Modified: ', data);
          const kebabName = _.kebabCase(data.name);
          setExtra((prev) => ({ ...prev, [kebabName]: img }));
        }
        if (change.type === 'removed') {
          // console.log('Removed: ', data);
          setCollections((prev) => prev.filter((name) => name !== data.name));
        }
      });
      setLoading(false);
    });

    return () => {
      unsubscribe();
      setLoading(true);
      setCollections([]);
    };
  }, [user, img]);

  const getStyle = (name) => {
    const kebabName = _.kebabCase(name);
    return {
      border: '5px solid #146356',
      backgroundColor: 'rgba(20, 99, 86, 1)',
      color: '#146356',
      height: '200px',
      maxHeight: '200px',
      maxWidth: '200px',
      margin: '10px',
      backgroundPosition: 'center',
      backgroundImage: `url("${extra[kebabName]}")`,
      backgroundBlendMode: 'multiply',
      '&:hover': {
        backgroundBlendMode: 'multiply',
      },
    };
  };

  return (
    <Box pt={6}>
      <Typography mb={1} variant='h2' align='center'>
        Your Collections
      </Typography>
      <Typography mb={2} variant='h5' align='center'>
        <>
          Choose a collection to add <strong>{name}</strong> to
        </>
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'>
        {!loading &&
          collections.map((collection, i) => (
            <Button
              key={i}
              elevation={2}
              variant='contained'
              onClick={() => addDocument(collection)}
              sx={getStyle(collection)}>
              <Typography
                variant='h5'
                xs={12}
                sx={{ width: '100%', color: '#fff' }}>
                <>{collection}</>
              </Typography>
            </Button>
          ))}
        <Button sx={style} onClick={toggleTextBox}>
          <AddCircleIcon fontSize='3rem' />
        </Button>
      </Grid>
      {textBox && (
        <Grid container direction='column' spacing={1} mt={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={title}
              onChange={handleChange}
              id='outlined-basic'
              label='Name your new collection'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={handleSubmit}
              variant='contained'
              color='primary'
              disabled={title.length < 1}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            {error && (
              <Alert severity='error'>
                <Typography variant='body1'>
                  <>Creating the collection failed. {error}</>
                </Typography>
              </Alert>
            )}
            {success && (
              <Alert severity='success'>
                <Typography variant='body1'>
                  Collection created successfully!
                </Typography>
              </Alert>
            )}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CreateCollection;
