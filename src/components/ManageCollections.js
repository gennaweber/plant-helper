import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc
} from "firebase/firestore";
import _ from "lodash";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../helpers/firebase";
import { UserContext } from "../helpers/UserContext";
import CollectionButton from "./CollectionButton";
import MoreMenu from "./MoreMenu";

const style = {
  border: "5px dashed #F3C892",
  backgroundColor: "rgba(243, 200, 146, 0.2)",
  color: "#F3C892",
  fontSize: "3rem",
  height: "200px",
  margin: "10px",
};

const CreateCollection = ({
  img = null,
  id,
  name,
  viewCollection = false,
  children,
}) => {
  const user = useContext(UserContext);

  const [textBox, setTextBox] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [collections, setCollections] = useState([]);
  const [extra, setExtra] = useState({});
  const [loading, setLoading] = useState(true);
  const [existing, setExisting] = useState({});

  console.log(extra, loading, existing);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const toggleTextBox = () => setTextBox(!textBox);

  const checkIfExists = useCallback(
    async (collection) => {
      if (!collection) return;
      const kebabCase = _.kebabCase(collection);
      if (!id) return;
      const plant = doc(db, user.uid, kebabCase, "plants", id);
      const res = await getDoc(plant);
      if (res.exists()) {
        setExisting((prev) => ({ ...prev, [kebabCase]: true }));
        return true;
      }
      setExisting((prev) => ({ ...prev, [kebabCase]: false }));
      return false;
    },
    [id, user]
  );

  const addDocument = async (collection = "New") => {
    const kebabCase = _.kebabCase(collection);
    if (!id) return;
    const plants = doc(db, user.uid, kebabCase, "plants", id);
    const docInfo = doc(db, user.uid, kebabCase);

    if (await checkIfExists(collection)) {
      try {
        await deleteDoc(plants);
        await checkIfExists(collection);
      } catch (error) {
        console.error(error);
        setError(`Something went wrong! Error message: ${error}`);
      }
    } else {
      try {
        await setDoc(plants, {
          collection,
          plantID: id,
          name,
          img,
          timestamp: serverTimestamp(),
        });

        await updateDoc(docInfo, {
          img,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  };

  const handleSubmit = async () => {
    const kebabName = _.kebabCase(title);
    const collection = doc(db, user.uid, kebabName);

    // check if collection with that name already exists
    const res = await getDoc(collection);
    if (res.exists()) {
      setError(
        "You already have a collection with that name; try choosing something else."
      );
    } else {
      try {
        await setDoc(collection, {
          name: title,
          timestamp: serverTimestamp(),
          img,
        });
        setSuccess(true);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
  };

  const handleDeleteCollection = async (name) => {
    const kebabName = _.kebabCase(name);
    const collection = doc(db, user.uid, kebabName);

    // console.log("handle delete activated");
    try {
      await deleteDoc(collection);
      // console.log("attempt to delete");
    } catch (err) {
      console.error(err);
      // console.log("attempt to delete failed");
      setError(err);
    }
  };

  // clear error message after a set amount of time
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
      setLoading(true);
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        const kebabName = _.kebabCase(data.name);

        if (change.type === "added") {
          // console.log('New: ', data);
          setCollections((prev) => [...prev, data.name]);
          setExtra((prev) => ({ ...prev, [kebabName]: data.img }));
          checkIfExists(kebabName);
        }
        if (change.type === "modified") {
          // console.log('Modified: ', data);
          checkIfExists(kebabName);
          // setExtra((prev) => ({ ...prev, [kebabName]: img }));
        }
        if (change.type === "removed") {
          // console.log('Removed: ', data);
          checkIfExists(kebabName);
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
  }, [user, img, checkIfExists]);

  const getStyle = (name) => {
    const kebabName = _.kebabCase(name);

    const defaultStyle = {
      border: "5px solid #146356",
      backgroundColor: "#616161",
      height: "200px",
      width: "200px",
      margin: "10px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: existing[kebabName]
        ? `url("/assets/images/check-mark.png")`
        : `url("${extra[kebabName]}")`,
      backgroundBlendMode: "multiply",
      "&:hover": {
        backgroundColor: "#616161",
      },
    };

    return defaultStyle;
  };

  return (
    <Box>
      {children}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {!loading &&
          collections.map((collection) => (
            <div key={`button-${collection}`}>
              {viewCollection ? (
                <div style={{ position: "relative" }}>
                  <MoreMenu
                    handleDeleteCollection={handleDeleteCollection}
                    collection={collection}
                  />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/collection/${_.kebabCase(collection)}`}
                  >
                    <CollectionButton style={getStyle(collection)}>
                      {collection}
                    </CollectionButton>
                  </Link>
                </div>
              ) : (
                <div style={{ position: "relative" }}>
                  <MoreMenu
                    handleDeleteCollection={handleDeleteCollection}
                    collection={collection}
                  />
                  <CollectionButton
                    style={getStyle(collection)}
                    onClick={() => addDocument(collection)}
                  >
                    {collection}
                  </CollectionButton>
                </div>
              )}
            </div>
          ))}
        <Button sx={style} onClick={toggleTextBox}>
          <AddCircleIcon fontSize="3rem" />
        </Button>
      </Grid>
      {textBox && (
        <Grid
          container
          sx={{ margin: "auto", maxWidth: "400px" }}
          direction="column"
          spacing={1}
          mt={1}
        >
          <Grid item>
            <TextField
              fullWidth
              value={title}
              onChange={handleChange}
              id="outlined-basic"
              label="Name your new collection"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              disabled={title.length < 1}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            {error && (
              <Alert severity="error">
                <Typography variant="body1">
                  <>Creating the collection failed. {error}</>
                </Typography>
              </Alert>
            )}
            {success && (
              <Alert severity="success">
                <Typography variant="body1">
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
