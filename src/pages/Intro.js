import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Decoration from "../components/Decoration";
import PhotoBackground from "../components/PhotoBackground";
import BasicContainer from "../components/BasicContainer";
import { useTranslation } from "react-i18next";

const Intro = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="photoBackgroundContainer">
        <Decoration />
        <PhotoBackground />
        <BasicContainer
          width="sm"
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
          textSize={textSize}
          setTextSize={setTextSize}
        >
          <Grid item>
            <Typography color="#FFF" variant="h1" align="center">
              {t("introHeading")}
            </Typography>
          </Grid>
          <Grid item mt={5}>
            <Typography color="#FFF" variant="h5" align="center">
              {t("introPar1")}
              <br />
              <br />
              {t("introPar2")}
            </Typography>
          </Grid>
          <Grid item mt={5}>
            <Link to="/create-profile">
              <Button color="primary" variant="contained" size="large">
                <Typography variant="h5">{t("toProfile")}</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item mt={1}>
            <Link to="/explore-all">
              <Button color="info" variant="outlined" size="large">
                <Typography variant="h5">{t("toExplore")}</Typography>
              </Button>
            </Link>
          </Grid>
        </BasicContainer>
      </div>
    </>
  );
};

export default Intro;
