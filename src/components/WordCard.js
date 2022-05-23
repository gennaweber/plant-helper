import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const WordCard = ({ src, alt, word, explanation, link, category }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ minHeight: 100 }}>
        {src && (
          <img referrerPolicy="no-referrer" width="100%" src={src} alt={alt} />
        )}
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" item p={3} spacing={1}>
            <Grid item>
              <Typography variant="h3" align="left">
                {word}
              </Typography>
            </Grid>
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
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default WordCard;
