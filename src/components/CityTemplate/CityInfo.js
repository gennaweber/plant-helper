import React from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CityInfo = ({ alt, src }) => {
  const { t } = useTranslation();
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">{t("info")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordianContainer">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Card sx={{ marginTop: "20px" }}>
              <img src={src} alt={alt} width="100%" />
            </Card>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default CityInfo;
