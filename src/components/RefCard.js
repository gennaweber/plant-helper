import Microlink from "@microlink/react";
import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const RefCard = ({ description, link, category }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ minHeight: 100 }}>
        {link && <Microlink url={link} />}
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" item p={3} spacing={1}>
            {category && (
              <Grid item>
                <Typography variant="h5">{category}</Typography>
              </Grid>
            )}
            {description && (
              <Grid item>
                <Typography variant="body1">{description}</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default RefCard;
