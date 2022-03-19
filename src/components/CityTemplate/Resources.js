import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import getData from "../../helpers/odsClientV2.js";
import Search from "./Search";
// import FactCard from "../FactCard";
import ResourceCard from "./ResourceCard";

//nested accordian
/* <Accordion
sx={{
  background: "#DCDCDC",
  "&.Mui-expanded": {
    background: "#B8D98D",
  },
}}
square={
  index === resources.length - 1 ? false : true
}
disableGutters={true}
key={`panel-resources-${index}b`}
>
<AccordionSummary
  sx={{
    marginLeft: 5,
  }}
  expandIcon={
    <ExpandMoreIcon fontSize="large" />
  }
  aria-controls={`panel-resources-${index}b-content`}
  id={`panel-resources-${index}b-header`}
>
  <Typography variant="h5">
    {subResource.record.fields.measurement_en}
  </Typography>
</AccordionSummary>
<AccordionDetails>
  {
    <div className="accordianContainer">
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <FactCard>
            {subResource.record.fields.value}
          </FactCard>
        </Grid>
        <Grid item>
          <ResourceCard />
        </Grid>
      </Grid>
    </div>
  }
</AccordionDetails>
</Accordion> */

const Resources = ({ resources, cityname, currentLangCode }) => {
  const { t } = useTranslation();

  const [subResources, setSubResources] = useState([]);
  const [searchStringQuery, setSearchStringQuery] = useState("");

  // get sub categories within resources
  // const getSubCategories = useCallback(() => {
  //   const createSubResourceQuery = (indicator_en) => {
  //     return `/records?refine=city:${cityname}&limit=10&select=avg(value) as value,measurement_en,indicator_en,noteen&where=indicator_en="${indicator_en}"${
  //       searchStringQuery.length > 0 ? "AND '" + searchStringQuery + "'" : ""
  //     }&group_by=measurement_en,indicator_en,noteen`;
  //   };

  //   if (resources !== undefined) {
  //     const sub = resources.map((resource) =>
  //       createSubResourceQuery(resource.record.fields.indicator_en)
  //     );

  //     const retrievedInfo = Promise.all(
  //       sub.map((query) =>
  //         getData("index-2020-full", query).then((res) => res.records)
  //       )
  //     );

  //     const setSubs = async () => {
  //       setSubResources(await retrievedInfo);
  //     };

  //     setSubs();
  //   }
  // }, [resources, cityname, searchStringQuery]);

  //get resource data
  const getResources = useCallback(() => {
    const createSubResourceQuery = (measurement) => {
      return `/records?refine=city:${cityname}&limit=10&select=address,name,url,email,phone,description&where=sheet_title="${measurement}"${
        searchStringQuery.length > 0 ? "AND '" + searchStringQuery + "'" : ""
      }`;
    };

    if (resources !== undefined) {
      const sub = resources.map((resource) =>
        createSubResourceQuery(resource.record.fields.measurement)
      );

      const retrievedInfo = Promise.all(
        sub.map((query) =>
          getData("resource-data-test", query).then((res) => res.records)
        )
      );

      const setSubs = async () => {
        setSubResources(await retrievedInfo);
      };

      setSubs();
    }
  }, [cityname, resources, searchStringQuery]);

  useEffect(() => {
    console.log("resource api triggered");
    getResources();
  }, [getResources]);

  //determine which array of resources is the last one with actual entries so that we can format the rounded corners properly
  const getLastIndex = () => {
    const lastIndex = subResources
      .map((resource) => resource.length > 0)
      .lastIndexOf(true);
    return lastIndex;
  };

  const checkIfSquare = (i) => {
    if (i === getLastIndex()) {
      return false;
    }
    return true;
  };

  return (
    <Accordion
      sx={{
        "&.Mui-expanded": {
          background: "#FBD166",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon fontSize="large" />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="nowrap"
        >
          <Grid item>
            <Typography variant="h3">{t("resources")}</Typography>
          </Grid>
          <Grid item mx={2}>
            <Link to={`/map/${cityname}`}>
              <Button
                sx={{ minWidth: 0 }}
                color="primary"
                variant="contained"
                size="large"
              >
                <Typography variant="h5">View On Map</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Search setSearchStringQuery={setSearchStringQuery} />
        {subResources && subResources.flat().length === 0 ? (
          <div className="accordianContainer">
            <Typography variant="body1">{t("noneFound")}</Typography>
          </div>
        ) : (
          <div>
            {resources !== undefined &&
              resources.map((resource, i) => {
                return (
                  <div key={i}>
                    {subResources &&
                    subResources[i] !== undefined &&
                    subResources[i].length > 0 ? (
                      <Accordion
                        sx={{
                          background: "#E8E8E8",
                          "&.Mui-expanded": {
                            background: "#B8D98D",
                          },
                          "&:first-of-type": {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                          },
                        }}
                        square={checkIfSquare(i)}
                        disableGutters={true}
                        key={`panel-resources-${i}a`}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon fontSize="large" />}
                          aria-controls={`panel-resources-${i}a-content`}
                          id={`panel-resources-${i}a-header`}
                        >
                          <Typography variant="h5">
                            {resource.record.fields.measurement}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {subResources &&
                            subResources[i].map((subResource, index) => (
                              <div
                                key={subResource.record.fields.name}
                                className="accordianContainer"
                              >
                                <Grid container spacing={2} direction="column">
                                  <Grid item>
                                    <ResourceCard
                                      description={
                                        subResource.record.fields.description
                                      }
                                      phone={subResource.record.fields.phone}
                                      address={
                                        subResource.record.fields.address
                                      }
                                      name={subResource.record.fields.name}
                                      email={subResource.record.fields.email}
                                      url={subResource.record.fields.url}
                                      currentLangCode={currentLangCode}
                                    />
                                  </Grid>
                                </Grid>
                              </div>
                            ))}
                        </AccordionDetails>
                      </Accordion>
                    ) : null}
                  </div>
                );
              })}
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default Resources;
