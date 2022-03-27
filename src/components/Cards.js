import React, { useState } from "react";
import CustomHits from "./Hit";
import { Box, Container } from "@mui/material";
import useWindowDimensions from "../helpers/useWindowDimensions";
import Masonry from "@mui/lab/Masonry";

const Cards = () => {
  const [initialWidth] = useState(window.innerWidth);
  let { width } = useWindowDimensions();

  const getColumns = () => {
    if (width >= 1200 || initialWidth >= 1200) {
      return 3;
    } else if (width >= 800 || initialWidth >= 800) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <>
      <>
        <Container width="lg">
          <Box sx={{ width: "100%", minHeight: 829 }}>
            <Masonry columns={getColumns()} spacing={2}>
              <CustomHits />
            </Masonry>
          </Box>
        </Container>
      </>
    </>
  );
};

export default Cards;
