import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Card,
  Collapse,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import { useState } from "react";
import AddToCollection from "./AddToCollection";

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

const sunTip = {
  "As much as possible": "3000+ foot candles",
  "Direct sun": "1500+ foot candles",
  "High, some direct sun": "800 - 1500 foot candles",
  "Bright indirect": "400 - 800 foot candles",
  "Medium, no direct sun": "300 - 400 foot candles",
  "Low to medium": "200 - 300 foot candles",
  Low: "100 - 200 foot candles",
};

const waterTip = {
  "Keep wet": "Substrate should never allowed to dry out.",
  "Keep moist": "Water as soon as substrate becomes dry to the touch.",
  "When partially dry": "25% to 50%",
  "When mostly dry": "50% to 75%",
  "When dry": "75% to 95%",
  "When totally dry": "100%",
};

const priceTip = {
  $: "Under $10 CAD",
  "$ - $$": "$10 - $30 CAD",
  $$: "$40 - $70 CAD",
  "$$ - $$$": "$70 - $100 CAD",
  $$$: "$100 - $500 CAD",
  "$$$ - $$$$": "$500 - $1000 CAD",
  $$$$: "$1000+ CAD",
};

const FactCard = ({ hit, filters, toggleCard }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    UID: id,
    Genus: genus,
    Species: species,
    Rarity: rarity,
    Price_Point: price,
    Light_min: minLight,
    Light_prefers: prefLight,
    Light_max: maxLight,
    Humidity_tolerates: tolHumid,
    Humidity_prefers: prefHumid,
    Water: water,
    Fussiness: fuss,
    Fertilizer: fert,
    Growth_Pattern: pattern,
    Propagation: prop,
    Notes: note,
    Rate_of_Growth: speed,
    Hashtag: hashtag,
    Image: src,
    Photo: photo,
    Word: word,
    Category: category,
    Meaning: explanation,
    Reference: link,
    Substrate: substrate,
    Temperature: temp,
    Celsius: celsius,
    Last_Updated: date,
    Humidity_Current: hcurrent,
    Substrate_Current: scurrent,
  } = hit;

  const updated = new Date(date);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card onClick={toggleCard || null}>
        {(src || photo) && (
          <img
            referrerPolicy="no-referrer"
            width="100%"
            src={src || photo}
            alt={`${genus} ${species}` || word}
          />
        )}
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" item p={3} spacing={2}>
            {genus && (
              <Grid item>
                <Typography variant="h3" align="center">
                  {genus} {species}
                </Typography>
              </Grid>
            )}
            {word && (
              <Grid item>
                <Typography variant="h3" align="left">
                  {word}
                </Typography>
              </Grid>
            )}
            {category && (
              <Grid item>
                <Typography color="primary" variant="body2">
                  <em>{category}</em>
                </Typography>
              </Grid>
            )}
            {explanation && (
              <Grid item>
                <Typography variant="body1">{explanation}</Typography>
              </Grid>
            )}
            {link && (
              <Grid item>
                <Typography variant="body2">
                  <strong>Reference: </strong>
                  <a href={link}>{link}</a>
                </Typography>
              </Grid>
            )}
            {note && (
              <Grid item>
                <Typography variant="body1">{note}</Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="body2">
                Last updated {updated.getMonth() + 1}-{updated.getDate() + 1}-
                {updated.getFullYear()}
              </Typography>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
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
            <Grid item>
              <Divider />
            </Grid>
          </Grid>
          <Collapse
            in={expanded}
            timeout="auto"
            sx={{ width: "100%" }}
            unmountOnExit
          >
            <Grid container direction="column" item px={3} pb={3} spacing={2}>
              {fuss && (
                <>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
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
                </>
              )}
              {minLight && (
                <>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      spacing={2}
                      flexWrap="nowrap"
                      alignItems="center"
                    >
                      <Grid item>
                        <img
                          src={`/assets/images/${sun[prefLight]}.png`}
                          alt={`sun icon for ${prefLight}`}
                          width="50px"
                          height="50px"
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1" mb={1}>
                          <strong>Minimum light: </strong>
                          <br />
                          {`${minLight} (${sunTip[minLight]})`}
                        </Typography>
                        <Typography variant="body1" mb={1}>
                          <strong>Preferred light: </strong>
                          <br />
                          {`${prefLight} (${sunTip[prefLight]})`}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Maximum light: </strong>
                          <br />
                          {`${maxLight} (${sunTip[maxLight]})`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {water && (
                <>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      flexWrap="nowrap"
                      spacing={2}
                      alignItems="center"
                    >
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
                          <br />
                          {`${water} (${waterTip[water]})`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {(substrate || scurrent) && (
                <>
                  <Grid item>
                    {substrate && (
                      <Typography variant="body1">
                        <strong>Substrate: </strong>
                        <br />
                        {substrate}
                      </Typography>
                    )}
                    {scurrent && (
                      <Typography variant="body1" mt={1}>
                        <strong>Currently growing in: </strong>
                        <br />
                        {scurrent === "Aroid mix" ? (
                          <a href="https://drive.google.com/file/d/1dr0koW5_ZonR36Nu_lSxnMJ-TaAQFvQD/view?usp=share_link">
                            {scurrent}
                          </a>
                        ) : (
                          scurrent
                        )}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {temp && (
                <>
                  <Grid item>
                    <Typography variant="body1">
                      <strong>Temperature range: </strong>
                      {temp}°F / {celsius}°C
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {tolHumid && (
                <>
                  <Grid item>
                    <Typography variant="body1">
                      <strong>Minimum humidity: </strong>
                      {tolHumid}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Preferred humidity: </strong>
                      {prefHumid}
                    </Typography>
                    {hcurrent && (
                      <Typography variant="body1">
                        <strong>Currently growing in: </strong>
                        {hcurrent}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {(pattern || speed) && (
                <>
                  <Grid item>
                    {pattern && (
                      <Typography variant="body1">
                        <strong>Growth pattern: </strong>
                        {pattern}
                      </Typography>
                    )}
                    {speed && (
                      <Typography variant="body1">
                        <strong>Speed of growth: </strong>
                        {speed}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {(rarity || price) && (
                <>
                  <Grid item>
                    {rarity && (
                      <Typography variant="body1">
                        <strong>Rarity: </strong>
                        {rarity}
                      </Typography>
                    )}
                    {price && (
                      <Typography variant="body1">
                        <strong>Price: </strong>
                        {priceTip[price]}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {fert && (
                <>
                  <Grid item>
                    <Typography variant="body1">
                      <strong>Fertilizer: </strong>
                      {fert}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {prop && (
                <>
                  <Grid item>
                    <Typography variant="body1">
                      <strong>Propagation: </strong>
                      {prop}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
              {hashtag && (
                <>
                  <Grid item>
                    <Typography variant="body1">
                      <strong>Hashtag: </strong>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.instagram.com/explore/tags/${hashtag.substring(
                          1
                        )}`}
                      >
                        {hashtag}
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider />
                  </Grid>
                </>
              )}
            </Grid>
          </Collapse>
          <Grid container direction="column" item px={3} pb={3} spacing={2}>
            {genus && (
              <Grid item>
                <AddToCollection
                  id={id}
                  img={src}
                  title={`${genus} ${species}`}
                  filters={filters}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default FactCard;
