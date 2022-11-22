import { Grid, Typography } from "@mui/material";
import React from "react";
import BasicContainer from "../components/BasicContainer";
import Drawer from "../components/Drawer";
import { CustomHits } from "../components/Hit";
import NHits from "../components/NHits";
import TabsRouter from "../components/TabsRouter";

const Home = ({ state, toggleDrawer }) => (
  <div>
    <Drawer state={state} toggleDrawer={toggleDrawer} />
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
            Plant Helper
          </Typography>
        </Grid>
        <Grid item mt="2vh" mb={2}>
          <Typography variant="h5" align="center">
            <br />
            <br />
            Hover or <strong>tap and hold</strong> on the card text for
            clarification. Rarity and price information is based on where I live
            in Ontario, Canada, but may fluctuate over time and be completely
            different where you live.
            <br />
            <br />
            This reference doesn&apos;t claim to be perfect but it is being
            constantly updated as new things are learned. Feel free to reach out
            with suggestions!
          </Typography>
        </Grid>
      </Grid>
    </BasicContainer>
    <Typography variant="h5" align="center" mb={4}>
      Number of results: <NHits />
    </Typography>
    <CustomHits />
  </div>
);

export default Home;
