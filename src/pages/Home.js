import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BasicContainer from "../components/BasicContainer";

const Home = ({}) => {
  return (
    <>
      <div>
        <BasicContainer width="xs">
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h1" align="center" mx="2vh">
              Plant Helper
            </Typography>
          </Grid>
          <Grid item mt="2vh" mb="5vh">
            <Typography variant="h5" align="center">
              Ratings for various 300+ species of houseplants based on
              observations and experience from{" "}
              <a href="https://www.instagram.com/gennasplants/">
                {" "}
                @gennasplants
              </a>
            </Typography>
          </Grid>
        </BasicContainer>
      </div>
    </>
  );
};

export default Home;
