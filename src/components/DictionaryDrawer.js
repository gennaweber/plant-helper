import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Drawer, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import { ClearRefinements, RefinementList } from "react-instantsearch-dom";
import Search from "./Search";

const DictionaryDrawer = ({ state, toggleDrawer }) => {
  return (
    <div>
      <Fab
        color="primary"
        size="large"
        className="searchButton"
        onClick={() => toggleDrawer(true)}
      >
        <ManageSearchIcon fontSize="large" color="#fff" />
      </Fab>
      <Drawer
        anchor="left"
        open={state}
        onClose={() => toggleDrawer(false)}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Grid p={2} container direction="column" spacing={2}>
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <ClearRefinements />
          </Grid>
          <Grid item>
            <Typography variant="h5">Category</Typography>
            <RefinementList
              attribute="Category"
              limit={5}
              showMore
              showMoreLimit={30}
            />
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
};

export default DictionaryDrawer;
