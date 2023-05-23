import { Grid, Typography } from "@mui/material";
import React from "react";
import BasicContainer from "../components/BasicContainer";
import DictionaryDrawer from "../components/DictionaryDrawer";
import { RefHits } from "../components/RefHit";
import TabsRouter from "../components/TabsRouter";

const Refs = ({ state, toggleDrawer }) => (
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
            References
          </Typography>
        </Grid>
      </Grid>
    </BasicContainer>
    <RefHits />
  </div>
);

export default Refs;
