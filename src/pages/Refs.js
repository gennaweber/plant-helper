import { Grid, Typography } from "@mui/material";
import React from "react";
import BasicContainer from "../components/BasicContainer";
import DictionaryDrawer from "../components/DictionaryDrawer";
import RefHit from "../components/RefHit";
import TabsRouter from "../components/TabsRouter";

const Refs = (props) => {
  return (
    <>
      <div>
        <DictionaryDrawer
          state={props.state}
          toggleDrawer={props.toggleDrawer}
        />
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
            <Grid item mt="2vh" mb="5vh">
              <Typography variant="h5" align="center">
                Links to external sites and resources that I've found helpful.
              </Typography>
            </Grid>
          </Grid>
        </BasicContainer>
        <RefHit />
      </div>
    </>
  );
};

export default Refs;
