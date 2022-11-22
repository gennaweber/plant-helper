import { Grid, Typography } from "@mui/material";
import BasicContainer from "../components/BasicContainer";
import DictionaryDrawer from "../components/DictionaryDrawer";
import { CustomHits } from "../components/Hit";
import TabsRouter from "../components/TabsRouter";

const Dictionary = ({ state, toggleDrawer }) => (
  <div>
    <DictionaryDrawer state={state} toggleDrawer={toggleDrawer} />
    <TabsRouter />
    <BasicContainer width="sm">
      <Grid container direction="column">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="h1" align="center" mt="2vh" mx="2vh">
            Plant Term Dictionary
          </Typography>
        </Grid>
        <Grid item mt="2vh" mb="5vh">
          <Typography variant="h5" align="center">
            Non-scientific explanations of words and abbreviations used in the
            plant community.
          </Typography>
        </Grid>
      </Grid>
    </BasicContainer>
    <CustomHits />
  </div>
);

export default Dictionary;
