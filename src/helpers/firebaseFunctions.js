import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const addDocument = async ({
  collection = 'my-collection',
  collectionName = 'My Collection',
  uid,
  id,
  name = null,
  img = null,
}) => {
  const plants = doc(db, uid, collection, 'plants', id);
  try {
    await setDoc(plants, {
      collection: collectionName,
      plantID: id,
      name: name,
      img: img,
      timestamp: serverTimestamp(),
    });
    console.log(id);
  } catch (error) {
    console.error(error);
    return error;
  }
};
