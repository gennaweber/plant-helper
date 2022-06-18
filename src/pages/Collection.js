import { Grid, Typography } from '@mui/material';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import BasicContainer from '../components/BasicContainer';
import Drawer from '../components/Drawer';
import { CustomHits } from '../components/Hit';
import { UserContext } from '../helpers/UserContext';

import { db } from '../helpers/firebase';

const Collection = (props) => {
  const [ids, setIds] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, user.uid, 'my-collection', 'plants'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          // console.log('New: ', change.doc.data());
          setIds((prev) => [...prev, change.doc.data().plantID]);
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
      setIds([]);
      unsubscribe();
    };
  }, [user]);

  console.log(ids);

  return (
    <>
      <div>
        <Drawer state={props.state} toggleDrawer={props.toggleDrawer} />
        {/* <TabsRouter /> */}
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
                Plant Helper
              </Typography>
            </Grid>
            <Grid item mt='2vh' mb='5vh'></Grid>
          </Grid>
        </BasicContainer>
        <CustomHits filters={ids} />
      </div>
    </>
  );
};

export default Collection;
