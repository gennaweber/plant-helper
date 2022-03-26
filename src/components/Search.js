import React, { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const cleanSearch = (s) => {
//   var words = ["of", "the", "in", "on", "at", "to", "a", "is", "for"];
//   var re = new RegExp("\\b(" + words.join("|") + ")\\b", "g");
//   return (s || "").replace(re, "").replace(/[ ]{2,}/, " ");
// };

const Search = ({ searchString, setSearchString }) => {
  const [searched, setSearched] = useState(false);

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     createStringQuery();
  //   }
  // };

  return (
    <div className="accordianContainer">
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <SearchIcon sx={{ fontSize: "30px" }} />
        </Grid>
        <Grid item flexGrow="2">
          <TextField
            value={searchString}
            variant="outlined"
            onChange={(e) => {
              setSearchString(e.target.value);
              setSearched(true);
            }}
            // onKeyDown={(e) => handleKeyPress(e)}
            fullWidth={true}
            label="Search"
          ></TextField>
        </Grid>
        {(searchString.length > 0 || searched) && (
          <>
            <Grid item>
              <Button
                sx={{ minWidth: 0 }}
                className="roundButton"
                variant="contained"
                color="error"
                onClick={() => {
                  setSearchString("");
                  setSearched(false);
                }}
              >
                <CloseIcon fontSize="large" />
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ minWidth: 0 }}
                className="roundButton"
                variant="contained"
                color="primary"
                // onClick={() => createStringQuery()}
              >
                <ArrowForwardIcon fontSize="large" />
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Search;
