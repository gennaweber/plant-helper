import React from "react";
import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Back = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <Fab
      onClick={() => goBack()}
      color="primary"
      size="medium"
      className="backButton"
    >
      <ArrowBackIcon fontSize="large" />
    </Fab>
  );
};

export default Back;
