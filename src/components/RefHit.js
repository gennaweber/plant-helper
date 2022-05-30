import Masonry from "@mui/lab/Masonry";
import { Box, Container } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import {
  Configure,
  connectInfiniteHits,
  connectStateResults,
} from "react-instantsearch-dom";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import RefCard from "../components/RefCard";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Hits = ({ hits, searching, refineNext, hasMore }) => {
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const memoHits = useMemo(() => hits, [hits]);

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
    <>
      <Container width="lg" sx={{ paddingRight: 0 }}>
        <Configure hitsPerPage={10} />
        <Box sx={{ width: "100%", minHeight: 829 }} mb={2}>
          <Masonry columns={getColumns()} spacing={2}>
            {memoHits.map((hit, i) => (
              <RefCard
                key={i}
                link={hit.Link}
                category={hit.Category}
                description={hit.Description}
              />
            ))}
            {!searching && hasMore && <p ref={ref}>Loading...</p>}
            {!hasMore && <p>You've reached the end of the results</p>}
          </Masonry>
        </Box>
      </Container>
    </>
  );
};

const AlgoliaRefHits = connectInfiniteHits(connectStateResults(Hits));
export const RefHits = React.memo(AlgoliaRefHits);
