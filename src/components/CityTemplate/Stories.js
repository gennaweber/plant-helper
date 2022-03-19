import React from "react";
import { useTranslation } from "react-i18next";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Stories = () => {
  const { t } = useTranslation();
  return (
    <>
      <Accordion
        sx={{
          "&.Mui-expanded": {
            background: "#F2695D",
          },
        }}
      >
        <AccordionSummary
          sx={{
            "&.Mui-expanded": {
              color: "#000",
            },
          }}
          expandIcon={<ExpandMoreIcon fontSize="large" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h3">{t("stories")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordianContainer">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Stories;
