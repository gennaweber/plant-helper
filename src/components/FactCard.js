import React from "react";
import { Card, Typography, Grid, Divider } from "@mui/material";

const FactCard = ({
  genus,
  species,
  rarity,
  price,
  minLight,
  maxLight,
  prefLight,
  tolHumid,
  prefHumid,
  fert,
  prop,
  pattern,
  water,
  fuss,
  note,
  hashtag,
  speed,
  src,
  alt,
}) => {
  const faces = {
    10: "stunned",
    9: "crying",
    8: "suffering",
    7: "grin",
    6: "neutral",
    5: "wink",
    4: "happy",
    3: "smiling",
    2: "in-love",
    1: "angel",
    0: "angel",
  };

  const sun = {
    "As much as possible": "sun-1",
    "Direct sun": "sun-2",
    "High, some direct sun": "sun-3",
    "Bright indirect": "sun-4",
    "Medium, no direct sun": "sun-6",
    "Low to medium": "sun-7",
    Low: "sun-8",
  };

  const drop = {
    "Keep wet": "water-1",
    "Keep moist": "water-2",
    "When partially dry": "water-4",
    "When mostly dry": "water-5",
    "When dry": "water-6",
    "When totally dry": "water-7",
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ minHeight: 100 }}>
        {src && <img width="100%" src={src} alt={alt} />}
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" item p={3} spacing={2}>
            <Grid item>
              <Typography variant="h2" align="center">
                {genus} {species}
              </Typography>
            </Grid>
            {note && (
              <Grid item>
                <Typography variant="body1">{note}</Typography>
              </Grid>
            )}
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src={`/assets/images/${faces[fuss]}.png`}
                    alt={`${faces[fuss]} icon`}
                    width="50px"
                    height="50px"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Fussiness: </strong>
                    {fuss}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src={`/assets/images/${sun[prefLight]}.png`}
                    alt={`sun icon for ${prefLight}`}
                    width="50px"
                    height="50px"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Minimum light: </strong>
                    {minLight}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Preferred light: </strong>
                    {prefLight}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Maximum light: </strong>
                    {maxLight}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item>
                  <img
                    src={`/assets/images/${drop[water]}.png`}
                    alt={`water drop icon for ${water}`}
                    width="50px"
                    height="50px"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    <strong>Water: </strong>
                    {water}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Minimum humidity: </strong>
                {tolHumid}
              </Typography>
              <Typography variant="body1">
                <strong>Preferred humidity: </strong>
                {prefHumid}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Growth pattern: </strong>
                {pattern}
              </Typography>
              <Typography variant="body1">
                <strong>Speed of growth: </strong>
                {speed}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Rarity: </strong>
                {rarity}
              </Typography>
              <Typography variant="body1">
                <strong>Price: </strong>
                {price}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Fertilizer: </strong>
                {fert}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong>Propagation: </strong>
                {prop}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            {hashtag && (
              <Grid item>
                <Typography variant="body1">
                  <strong>Hashtag: </strong>
                  {hashtag}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default FactCard;
