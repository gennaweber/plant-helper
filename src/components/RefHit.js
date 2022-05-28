import Masonry from "@mui/lab/Masonry";
import { Box, Container } from "@mui/material";
import React from "react";
import { connectInfiniteHits } from "react-instantsearch-dom";
import RefCard from "../components/RefCard";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Hits = ({ hits, hasMore, refineNext }) => {
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
              <RefCard
                key={i}
                link={hit.Link}
                category={hit.Category}
                description={hit.Description}
              />
            ))}
          </Masonry>
        </Box>
        <button
          className="ais-InfiniteHits-loadMore"
          disabled={!hasMore}
          onClick={refineNext}
        >
          Show more
        </button>
      </Container>
    </>
  );
};

const DictionaryHits = connectInfiniteHits(Hits);
export default DictionaryHits;
