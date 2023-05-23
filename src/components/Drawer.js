import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Drawer, Fab, Grid, Typography } from "@mui/material";
import React from "react";
import {
  ClearRefinements,
  NumericMenu,
  RefinementList,
  SortBy
} from "react-instantsearch-dom";
import Search from "./Search";

const Draw = ({ state, toggleDrawer }) => (
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
          <Typography variant="h5">Sort by:</Typography>
          <SortBy
            defaultRefinement="plants_newest"
            items={[
              { value: "plants", label: "Alphabetical" },
              { value: "plants_newest", label: "Newest first" },
            ]}
          />
        </Grid>
        <Grid item>
          <ClearRefinements />
        </Grid>
        <Grid item>
          <Typography variant="h5">Genus</Typography>
          <RefinementList
            attribute="Genus"
            limit={5}
            showMore
            showMoreLimit={30}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Fussiness</Typography>
          <NumericMenu
            attribute="Fussiness"
            items={[
              { label: "Very easy", end: 2 },
              { label: "Easy", start: 3, end: 4 },
              { label: "Intermediate", start: 5, end: 7 },
              { label: "Difficult", start: 8 },
            ]}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Rarity</Typography>
          <RefinementList
            attribute="Rarity"
            limit={5}
            showMore
            showMoreLimit={30}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Cost</Typography>
          <RefinementList
            attribute="Price_Point"
            limit={5}
            showMore
            showMoreLimit={30}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Lowest tolerated light</Typography>
          <RefinementList
            attribute="Light_min"
            limit={5}
            showMore
            showMoreLimit={30}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Lowest tolerated humidity</Typography>
          <RefinementList
            attribute="Humidity_tolerates"
            limit={5}
            showMore
            showMoreLimit={30}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">Water</Typography>
          <RefinementList
            attribute="Water"
            limit={5}
            showMore
            showMoreLimit={30}
          />
        </Grid>
      </Grid>
    </Drawer>
  </div>
);

export default Draw;
