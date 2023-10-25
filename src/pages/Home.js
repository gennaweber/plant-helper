import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Collapse, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicContainer from "../components/BasicContainer";
import Drawer from "../components/Drawer";
import { CustomHits } from "../components/Hit";
import NHits from "../components/NHits";
import TabsRouter from "../components/TabsRouter";

const Home = ({ state, toggleDrawer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
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
          <Grid item mt={2}>
            <Typography variant="body1">
              Cultivar/trade will be in single quotes. Common/alternative names
              or descriptors will be in brackets.
            </Typography>
          </Grid>
          <Grid item mt={2} mb={2}>
            <Typography variant="body1">
              This reference doesn&apos;t claim to be perfect but it is being
              constantly updated as new things are learned. Feel free to reach
              out with suggestions!
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <Button
              sx={{ minWidth: 0 }}
              onClick={handleExpandClick}
              startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            >
              <Typography variant="h5">
                {expanded ? "Less Info" : "More Info"}
              </Typography>
            </Button>
          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid item mt={2}>
              <Typography variant="h5">Fussiness Legend</Typography>
              <Typography mt={1} variant="body1">
                Fussiness is ranked out of 10 with 1 being the easiest and 10
                being the hardest. It is completely subjective but usually
                indicates how far you can deviate from the ideal conditions and
                still be okay. A large factor is how much 'neglect' it can
                tolerate, i.e. how long the plant can go without water.
              </Typography>
            </Grid>
            <Grid item mt={4}>
              <Typography variant="h5">Light Legend</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>As much as possible:</strong> 3000+ foot candles
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Direct sun:</strong> 1500+ foot candles
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>High, some direct sun</strong>: 800 - 1500 foot
                    candles
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Bright indirect:</strong> 400 - 800 foot candles
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Medium, no direct sun:</strong> 300 - 400 foot
                    candles
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Low to medium:</strong> 200 - 300 foot candles
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong> Low:</strong> 100 - 200 foot candles
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="h5">Watering Legend</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>Keep wet:</strong> Substrate should be near
                    saturation and never allowed to dry out.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Keep moist:</strong> Water as soon as substrate
                    becomes dry to the touch on the surface but never allow it
                    to dry out completely.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>When partially dry:</strong> Water when soil is 25%
                    to 50% dry (first couple inches/cm of soil are dry).
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>When mostly dry:</strong> Water when the soil is 75%
                    to 95% dry but don't allow it to get bone dry. Most hoyas
                    fall into this category and don't like to stay dry for
                    extended periods.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>When dry:</strong> Water when the soil is 100% dry,
                    aka bone dry. Can be left a long time between waterings.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>When totally dry:</strong> Water when the soil is
                    100% dry, aka bone dry. Can be left a long time between
                    waterings.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="h5">Substrate Legend</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>Extremely well-draining, small particles:</strong>{" "}
                    At least 50% perlite or equivalent.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>
                      Well-draining, small- to medium-sized particles:
                    </strong>{" "}
                    Examples include Pon-like substrates with or without a
                    self-watering setup, houseplant soil mixed 50/50 with
                    perlite, or aroid mix.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>
                      Well-draining, medium- to large-sized particles:
                    </strong>{" "}
                    Examples would be an{" "}
                    <Link
                      underline="none"
                      href="https://drive.google.com/file/d/1dr0koW5_ZonR36Nu_lSxnMJ-TaAQFvQD/view?usp=share_link"
                    >
                      aroid mix
                    </Link>{" "}
                    with 40% water retention, 60% drainage. Perlite and orchid
                    bark can be added to improve drainage. Large particles
                    prevent soil compaction and allow more airflow to the roots.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Water-retaining:</strong> Holds a lot of water and
                    takes a long time to dry out; achieved using coco coir or
                    peat moss. Most store-bought houseplant soils fall into this
                    category.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>
                      Water-retaining, medium- to large-sized particles:
                    </strong>{" "}
                    A good ratio is 60% water-retaining elements like peat or
                    coco coir and 40% drainage, such as using perlite or orchid
                    bark. Large particles prevent soil compaction and allow more
                    airflow to the roots.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="h5">Price Legend</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>$:</strong> Under $10 CAD
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>$ - $$:</strong> $10 - $30 CAD
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>$$:</strong> $40 - $70 CAD
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>$$ - $$$:</strong> $70 - $100 CAD
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>$$$:</strong> $100 - $500 CAD
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>$$$ - $$$$:</strong> $500 - $1000 CAD
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong> $$$$</strong> $1000+ CAD
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="h5">Rarity Legend</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>Common:</strong> Easy to find at most garden
                    centres.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Uncommon:</strong> Some garden centres may carry it
                    but probably won't have it in stock all the time.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Very uncommon:</strong> Very unlikely to be found in
                    a garden centre but not impossible to find in specialty
                    shops or from private sellers.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Rare:</strong> Hard to find even in specialty shops.
                    Generally these plants have to be imported from tropical
                    countries.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Very rare:</strong> Usually passed around amongst
                    private collectors and not sold publically. Your best chance
                    of finding these plants is usually in auctions.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item mt={4}>
              <Typography variant="body1">
                NOTE: Rarity and price information is based on where I live in
                Ontario, Canada, but may fluctuate over time and be completely
                different where you live.
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Button
                sx={{ minWidth: 0 }}
                onClick={handleExpandClick}
                startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              >
                <Typography variant="h5">
                  {expanded ? "Less Info" : "More Info"}
                </Typography>
              </Button>
            </Grid>
          </Collapse>
        </Grid>
      </BasicContainer>
      <Typography variant="h5" align="center" mb={4}>
        Number of results: <NHits />
      </Typography>
      <CustomHits />
    </>
  );
};

export default Home;
