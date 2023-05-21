import { Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const RefCard = ({ description, link, category }) => {
  const [ref, inView] = useInView();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (inView && data === null) {
      const customFetcher = async () => {
        try {
          const response = await fetch(
            `https://link-preview-tb5v.onrender.com/v2?url=${link}`
          );
          const json = await response.json();
          return json.metadata;
        } catch (error) {
          console.error(error);
        }
      };
      customFetcher().then((res) => setData(res));
    }
  }, [inView]);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ minHeight: 100 }} ref={ref}>
        {data ? data.title : link}
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
