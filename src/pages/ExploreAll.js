import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Grid, Typography } from "@mui/material";

import PhotoButton from "../components/PhotoButton";
import getData from "../helpers/odsClientV2.js";

import BasicContainer from "../components/BasicContainer";
import Decoration from "../components/Decoration";

const ExploreAll = ({
  languages,
  setCurrentLangCode,
  currentLangCode,
  textSize,
  setTextSize,
}) => {
  const { t } = useTranslation();
  const [recs, setRecs] = useState([]);
  const query = "/records?limit=10&offset=0";

  useEffect(() => {
    const retrievedCities = getData("cities", query).then((res) => res.records);

    const setCities = async () => {
      setRecs(await retrievedCities);
    };

    setCities();
  }, []);

  return (
    <>
      <Decoration />
      <BasicContainer
        width="md"
        languages={languages}
        setCurrentLangCode={setCurrentLangCode}
        currentLangCode={currentLangCode}
        textSize={textSize}
        setTextSize={setTextSize}
      >
        <Grid mb={2} item>
          <Typography align="center" variant="h1">
            {t("exploreHeading")}
          </Typography>
        </Grid>
        {recs.map((city, i) => (
          <Grid key={i} mt={2} className="photoButtonContainer" item>
            <PhotoButton
              city={city.record.fields.city_name}
              alt={city.record.fields.main_img_alt}
              src={city.record.fields.main_img}
              factoid={city.record.fields.population}
              currentLangCode={currentLangCode}
            >
              {city.record.fields.city_name}
            </PhotoButton>
          </Grid>
        ))}
      </BasicContainer>
    </>
  );
};

export default ExploreAll;
