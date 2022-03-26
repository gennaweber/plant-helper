import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import BasicContainer from "../components/BasicContainer";
import FactCard from "../components/FactCard";
import Search from "../components/Search";
import { withGoogleSheets } from "react-db-google-sheets";

const Home = (props) => {
  const sheet = props.db.Ratings;

  const [searchString, setSearchString] = useState("");

  return (
    <>
      <div>
        <BasicContainer width="lg">
          <Grid container direction="column">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Typography variant="h1" align="center" mx="2vh">
                Plant Helper
              </Typography>
            </Grid>
            <Grid item mt="2vh" mb="5vh">
              <Typography variant="h5" align="center">
                Ratings for 300+ species of houseplants based on observations
                and experience from{" "}
                <a
                  href="https://www.instagram.com/gennasplants/"
                  className="attributionLinkDark"
                >
                  {" "}
                  @gennasplants
                </a>
              </Typography>
            </Grid>
            <Grid item>
              <Search
                searchString={searchString}
                setSearchString={setSearchString}
              />
            </Grid>
            <Grid container direction="row" spacing={2} item>
              {sheet.map((row, i) => (
                <FactCard
                  key={i}
                  genus={row.Genus}
                  species={row.Species}
                  rarity={row.Rarity}
                  price={row.Price_Point}
                  minLight={row.Light_min}
                  prefLight={row.Light_prefers}
                  maxLight={row.Light_max}
                  tolHumid={row.Humidity_tolerates}
                  prefHumid={row.Humidity_prefers}
                  water={row.Water}
                  fuss={row.Fussiness}
                  fert={row.Fertilizer}
                  pattern={row.Growth_Pattern}
                  prop={row.Propagation}
                  note={row.Notes}
                  speed={row.Rate_of_Growth}
                  hashtag={row.hashtag}
                  src={row.Image}
                  alt={`${row.Genus} ${row.Species}`}
                />
              ))}
            </Grid>
          </Grid>
        </BasicContainer>
      </div>
    </>
  );
};

export default withGoogleSheets("Ratings")(Home);
