import { Card, Grid, Link, Typography } from "@mui/material";
import _ from "lodash";
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
        {data && data.image && <img width="100%" src={data.image} alt="" />}
        <Grid
          container
          sx={{ minHeight: 100 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" item p={3} spacing={1}>
            <Grid item>
              <Link
                href={link}
                variant="h5"
                underline="none"
                sx={{ wordBreak: "break-word" }}
              >
                {data && data.title
                  ? _.truncate(data.title, {
                      length: 75,
                      separator: /,? +/,
                      omission: " [...]",
                    })
                  : _.truncate(link)}
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
