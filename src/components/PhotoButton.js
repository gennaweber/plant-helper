import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

import persianNum from "../helpers/persianNum.js";

const PhotoButton = ({
  city,
  src,
  alt,
  factoid,
  currentLangCode,
  children,
}) => {
  const { t } = useTranslation();

  const formattedNumber = (number) => {
    if (currentLangCode === "fa" || currentLangCode === "ps") {
      const newNum = persianNum(number.toLocaleString());
      return newNum;
    }
    return number.toLocaleString();
  };

  return (
    <>
      <Link to={`/about/${city}`}>
        <Box className="photoButtonContainer" sx={{ boxShadow: 2 }}>
          <img className="photoButtonImg" src={src} alt={alt} />
          <Grid
            container
            sx={{ minHeight: "100px" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="none"
          >
            <Grid item>
              <Typography
                px="35px"
                color="#FFF"
                className="photoButtonText"
                variant="h3"
              >
                {children}
              </Typography>
              <Typography
                px="35px"
                color="#FFF"
                className="photoButtonText"
                variant="h4"
              >
                Province
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                px="35px"
                align="right"
                color="#FFF"
                className="smallPhotoButtonText"
                variant="body1"
              >
                {t("population")}: {formattedNumber(factoid)}
              </Typography>
            </Grid>
          </Grid>
          <div className="photoOverlay"></div>
        </Box>
      </Link>
    </>
  );
};

export default PhotoButton;
