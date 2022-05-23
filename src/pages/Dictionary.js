import { Grid, Typography } from "@mui/material";
import React from "react";
import { Pagination } from "react-instantsearch-dom";
import BasicContainer from "../components/BasicContainer";
import DictionaryDrawer from "../components/DictionaryDrawer";
import DictionaryHits from "../components/DictionaryHit";
import TabsRouter from "../components/TabsRouter";

const Dictionary = (props) => {
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
                Plant Term Dictionary
              </Typography>
            </Grid>
            <Grid item mt="2vh" mb="5vh">
              <Typography variant="h5" align="center">
                Non-scientific explanations of words and abbreviations used in
                the plant community.
              </Typography>
            </Grid>
          </Grid>
        </BasicContainer>
        <DictionaryHits />
        <Grid container py={5} justifyContent="center">
          <Grid item>
            <Pagination />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dictionary;
