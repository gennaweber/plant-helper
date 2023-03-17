import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import AddToCollection from "./AddToCollection";
import FactCard from "./FactCard";

const ListCard = ({ hit, filters }) => {
  const [card, setCard] = useState(false);
  const {
    UID: id,
    Genus: genus,
    Species: species,
    Image: src,
    Photo: photo,
  } = hit;

  const toggleCard = () => setCard(!card);

  return (
    <>
      {card ? (
        <FactCard hit={hit} filters={filters} toggleCard={toggleCard} />
      ) : (
        <Grid item xs={12} md={6} lg={4}>
          <Card onClick={toggleCard}>
            <Grid
              container
              pr={1}
              spacing={1}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="nowrap"
            >
              {(src || photo) && (
                <CardMedia
                  component="img"
                  sx={{ maxWidth: "70px", height: "100%" }}
                  image={src || photo}
                  alt={`${genus} ${species}`}
                />
              )}
              <Grid item>
                {genus && (
                  <Grid item>
                    <Typography variant="h6" align="center">
                      {genus} {species}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              <Grid item>
                <AddToCollection
                  list
                  id={id}
                  img={src}
                  title={`${genus} ${species}`}
                  filters={filters}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ListCard;
