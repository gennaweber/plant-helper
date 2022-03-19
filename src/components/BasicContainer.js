import React from "react";
import { Container, Grid } from "@mui/material";
import Back from "./Back";
import Socials from "./Socials";
import ChangeLang from "./ChangeLang";

const BasicContainer = ({
  children,
  width,
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  return (
    <>
      <Container maxWidth={width === undefined ? "xs" : width}>
        <Grid
          sx={{ minWidth: "100%", minHeight: "100%" }}
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          pb="5vh"
        >
          <Grid
            sx={{ minHeight: "59vh", minWidth: "100%" }}
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            pt="5vh"
            pb="5vh"
            spacing={0}
          >
            {children}
          </Grid>
          <Grid item>
            <Socials />
          </Grid>
        </Grid>
        {document.location.pathname !== "/" && <Back />}
        <ChangeLang
          languages={languages}
          setCurrentLangCode={setCurrentLangCode}
          currentLangCode={currentLangCode}
          textSize={textSize}
          setTextSize={setTextSize}
        />
      </Container>
    </>
  );
};

export default BasicContainer;
