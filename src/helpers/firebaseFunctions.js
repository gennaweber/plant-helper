// const addDocument = async (collection = 'New') => {
//   const kebabCase = _.kebabCase(collection);
//   const plants = doc(db, user.uid, kebabCase, 'plants', id);
//   const docInfo = doc(db, user.uid, kebabCase);

//   if (await checkIfExists(collection)) {
//     try {
//       await deleteDoc(plants);
//       await checkIfExists(collection);
//     } catch (error) {
//       console.error(error);
//       setError(`Something went wrong! Error message: ${error}`);
//     }
//   } else {
//     try {
//       await setDoc(plants, {
//         collection: collection,
//         plantID: id,
//         name: name,
//         img: img,
//         timestamp: serverTimestamp(),
//       });

//       await updateDoc(docInfo, {
//         img: img,
//         timestamp: serverTimestamp(),
//       });

//       console.log(id);
//     } catch (error) {
//       console.error(error);
//       return error;
//     }
//   }
// };
