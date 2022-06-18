import { Card, Divider, Grid, Tooltip, Typography } from '@mui/material';
import AddToCollection from './AddToCollection';

const faces = {
  10: 'stunned',
  9: 'crying',
  8: 'suffering',
  7: 'grin',
  6: 'neutral',
  5: 'wink',
  4: 'happy',
  3: 'smiling',
  2: 'in-love',
  1: 'angel',
  0: 'angel',
};

const sun = {
  'As much as possible': 'sun-1',
  'Direct sun': 'sun-2',
  'High, some direct sun': 'sun-3',
  'Bright indirect': 'sun-4',
  'Medium, no direct sun': 'sun-6',
  'Low to medium': 'sun-7',
  Low: 'sun-8',
};

const drop = {
  'Keep wet': 'water-1',
  'Keep moist': 'water-2',
  'When partially dry': 'water-4',
  'When mostly dry': 'water-5',
  'When dry': 'water-6',
  'When totally dry': 'water-7',
};

const sunTip = {
  'As much as possible':
    '3000 foot candles or more for the majority of the day',
  'Direct sun': '1000+ foot candles',
  'High, some direct sun': '500 - 1000 foot candles',
  'Bright indirect': '400 - 600 foot candles',
  'Medium, no direct sun': '300 - 400 foot candles',
  'Low to medium': '200 - 300 foot candles',
  Low: '100 - 200 foot candles',
};

const waterTip = {
  'Keep wet':
    'Substrate should be near saturation and never allowed to dry out.',
  'Keep moist':
    'Water as soon as substrate becomes dry to the touch on the surface but never allow it to dry out completely.',
  'When partially dry':
    'Water when soil is 25% to 50% dry (first couple inches/cm of soil are dry).',
  'When mostly dry': 'Water when soil is 50% to 75% dry.',
  'When dry':
    "Water when the soil is 75% to 95% dry but don't allow it to get bone dry. Most hoyas fall into this category and don't like to stay dry for extended periods.",
  'When totally dry':
    'Water when the soil is 100% dry, aka bone dry. Can be left a long time between waterings.',
};

const priceTip = {
  $: 'Under $10 CAD',
  '$ - $$': '$10 - $30 CAD',
  $$: '$40 - $70 CAD',
  '$$ - $$$': '$70 - $100 CAD',
  $$$: '$100 - $500 CAD',
  '$$$ - $$$$': '$500 - $1000 CAD',
  $$$$: '$1000+ CAD',
};

const rareTip = {
  Common: 'Easy to find at most garden centres.',
  Uncommon:
    "Some garden centres may carry it but probably won't have it in stock all the time.",
  'Very uncommon':
    'Very unlikely to be found in a garden centre but not impossible to find in specialty shops or from private sellers.',
  Rare: 'Hard to find even in specialty shops. Generally these plants have to be imported from tropical countries.',
  'Very rare':
    'Usually passed around amongst private collectors and not sold publically. Your best chance of finding these plants is usually in auctions.',
};

const FactCard = ({ hit, UserContext }) => {
  const {
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
  } = hit;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ minHeight: 100 }}>
        {(src || photo) && (
          <img
            referrerPolicy='no-referrer'
            width='100%'
            src={src || photo}
            alt={`${genus} ${species}` || word}
          />
        )}
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent='center'
          alignItems='center'>
          <Grid container direction='column' item p={3} spacing={2}>
            {genus && (
              <Grid item>
                <Tooltip
                  title={[
                    "Cultivar/trade names should be in single quotes 'like so'.",
                    <br />,
                    <br />,
                    'Common names should be in brackets (like so). May be a name it was formerly known by before being reclassified.',
                  ]}>
                  <Typography variant='h3' align='center'>
                    {genus} {species}
                  </Typography>
                </Tooltip>
              </Grid>
            )}
            {word && (
              <Grid item>
                <Typography variant='h3' align='left'>
                  {word}
                </Typography>
              </Grid>
            )}
            {category && (
              <Grid item>
                <Typography color='primary' variant='body2'>
                  <em>{category}</em>
                </Typography>
              </Grid>
            )}
            {explanation && (
              <Grid item>
                <Typography variant='body1'>{explanation}</Typography>
              </Grid>
            )}
            {link && (
              <Grid item>
                <Typography variant='body2'>
                  <strong>Reference: </strong>
                  <a href={link}>{link}</a>
                </Typography>
              </Grid>
            )}
            {note && (
              <>
                <Grid item>
                  <Typography variant='body1'>{note}</Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
              </>
            )}
            {fuss && (
              <>
                <Grid item>
                  <Grid
                    container
                    direction='row'
                    spacing={2}
                    alignItems='center'>
                    <Grid item>
                      <img
                        src={`/assets/images/${faces[fuss]}.png`}
                        alt={`${faces[fuss]} icon`}
                        width='50px'
                        height='50px'
                      />
                    </Grid>
                    <Grid item>
                      <Tooltip
                        title={[
                          '(out of 10, lower is better)',
                          <br />,
                          <br />,
                          "Fussiness is completely subjective but usually indicates how far you can deviate from the ideal conditions and still be okay. A large factor is how much 'neglect' it can tolerate, i.e. how long the plant can go without water.",
                        ]}>
                        <Typography variant='body1'>
                          <strong>Fussiness: </strong>
                          {fuss}
                        </Typography>
                      </Tooltip>
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
                    direction='row'
                    spacing={2}
                    alignItems='center'>
                    <Grid item>
                      <img
                        src={`/assets/images/${sun[prefLight]}.png`}
                        alt={`sun icon for ${prefLight}`}
                        width='50px'
                        height='50px'
                      />
                    </Grid>
                    <Grid item>
                      <Tooltip title={`${minLight} = ${sunTip[minLight]}`}>
                        <Typography variant='body1'>
                          <strong>Minimum light: </strong>
                          {`${minLight}`}
                        </Typography>
                      </Tooltip>
                      <Tooltip title={`${prefLight} = ${sunTip[prefLight]}`}>
                        <Typography variant='body1'>
                          <strong>Preferred light: </strong>
                          {`${prefLight}`}
                        </Typography>
                      </Tooltip>
                      <Tooltip title={`${maxLight} = ${sunTip[maxLight]}`}>
                        <Typography variant='body1'>
                          <strong>Maximum light: </strong>
                          {`${maxLight}`}
                        </Typography>
                      </Tooltip>
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
                    direction='row'
                    spacing={2}
                    alignItems='center'>
                    <Grid item>
                      <img
                        src={`/assets/images/${drop[water]}.png`}
                        alt={`water drop icon for ${water}`}
                        width='50px'
                        height='50px'
                      />
                    </Grid>
                    <Grid item>
                      <Tooltip title={waterTip[water]}>
                        <Typography variant='body1'>
                          <strong>Water: </strong>
                          {`${water}`}
                        </Typography>
                      </Tooltip>
                    </Grid>
                    {substrate && (
                      <Grid item>
                        <Typography variant='body1'>
                          <strong>Substrate: </strong>
                          {substrate}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
              </>
            )}
            {tolHumid && (
              <>
                <Grid item>
                  <Typography variant='body1'>
                    <strong>Minimum humidity: </strong>
                    {tolHumid}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Preferred humidity: </strong>
                    {prefHumid}
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
              </>
            )}
            {pattern && (
              <>
                <Grid item>
                  <Typography variant='body1'>
                    <strong>Growth pattern: </strong>
                    {pattern}
                  </Typography>
                  <Typography variant='body1'>
                    <strong>Speed of growth: </strong>
                    {speed}
                  </Typography>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
              </>
            )}
            {rarity && (
              <>
                <Grid item>
                  <Tooltip title={`${rarity} = ${rareTip[rarity]}`}>
                    <Typography variant='body1'>
                      <strong>Rarity: </strong>
                      {rarity}
                    </Typography>
                  </Tooltip>
                  <Tooltip title={priceTip[price]}>
                    <Typography variant='body1'>
                      <strong>Price: </strong>
                      {price}
                    </Typography>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
              </>
            )}
            {fert && (
              <>
                <Grid item>
                  <Typography variant='body1'>
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
              <Grid item>
                <Typography variant='body1'>
                  <strong>Propagation: </strong>
                  {prop}
                </Typography>
              </Grid>
            )}
            {hashtag && (
              <>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid item>
                  <Typography variant='body1'>
                    <strong>Hashtag: </strong>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={`https://www.instagram.com/explore/tags/${hashtag.substring(
                        1
                      )}`}>
                      {hashtag}
                    </a>
                  </Typography>
                </Grid>
              </>
            )}
            <Grid item>
              <Divider />
            </Grid>
            <Grid item>
              <AddToCollection />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default FactCard;
