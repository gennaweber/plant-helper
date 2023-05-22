import { Card, Grid, Link, Typography } from "@mui/material";
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

  console.log(data);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ minHeight: 100 }} ref={ref}>
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" item p={3} spacing={1}>
            {data && data.img && <img width="100%" src={data.img} alt="" />}
            <Grid item>
              <Link
                href={link}
                variant="h5"
                underline="none"
                sx={{ wordBreak: "break-word" }}
              >
                {data && data.title ? data.title : link}
              </Link>
            </Grid>
            {category && (
              <Grid item>
                <Typography variant="body2">{category}</Typography>
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
