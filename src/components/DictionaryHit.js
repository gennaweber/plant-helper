import Masonry from "@mui/lab/Masonry";
import { Box, Container } from "@mui/material";
import React from "react";
import { connectHits } from "react-instantsearch-dom";
import useWindowDimensions from "../helpers/useWindowDimensions";
import WordCard from "./WordCard";

const Hits = ({ hits }) => {
  let { width } = useWindowDimensions();

  const getColumns = () => {
    if (width >= 1200) {
      return 3;
    } else if (width >= 800) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <>
      <Container width="lg" sx={{ paddingRight: 0 }}>
        <Box sx={{ width: "100%", minHeight: 829 }}>
          <Masonry columns={getColumns()} spacing={2}>
            {hits.map((hit, i) => (
              <WordCard
                key={i}
                word={hit.Word}
                category={hit.Category}
                explanation={hit.Meaning}
                src={hit.Photo}
                alt={hit.Word}
                link={hit.Reference}
              />
            ))}
          </Masonry>
        </Box>
      </Container>
    </>
  );
};

const DictionaryHits = connectHits(Hits);
export default DictionaryHits;
