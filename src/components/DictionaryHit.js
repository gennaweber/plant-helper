import Masonry from "@mui/lab/Masonry";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import {
  connectInfiniteHits,
  connectStateResults,
} from "react-instantsearch-dom";
import useWindowDimensions from "../helpers/useWindowDimensions";
import WordCard from "./WordCard";

const Hits = ({ hits, hasMore, refineNext, refine, error, searching }) => {
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      console.log("no change");
      return;
    } else {
      console.log("scrolling down");
    }
  }

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
    <div>
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
            {(searching || hasMore) && <p>Loading...</p>}
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
    </div>
  );
};

const DictionaryHits = connectInfiniteHits(connectStateResults(Hits));

export default DictionaryHits;
