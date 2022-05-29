import Masonry from "@mui/lab/Masonry";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import {
  Configure,
  connectInfiniteHits,
  connectStateResults,
} from "react-instantsearch-dom";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import useWindowDimensions from "../helpers/useWindowDimensions";
import WordCard from "./WordCard";

const Hits = ({ hits, hasMore, refineNext, error, searching }) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`);
    const timeout = () =>
      setTimeout(() => {
        refineNext();
      }, 500);

    if (!searching && isVisible) {
      timeout();
    }

    return () => clearTimeout(timeout);
  }, [isVisible]); // eslint-disable-line

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
        <Box sx={{ width: "100%", minHeight: 829 }} mb={2}>
          <Configure hitsPerPage={10} />
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
            {!searching && hasMore && <p ref={ref}>Loading...</p>}
            {!hasMore && <p>You've reached the end of the results</p>}
          </Masonry>
        </Box>
      </Container>
    </div>
  );
};

const DictionaryHits = connectInfiniteHits(connectStateResults(Hits));

export default DictionaryHits;
