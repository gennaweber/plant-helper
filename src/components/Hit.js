import Masonry from "@mui/lab/Masonry";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  Configure,
  connectInfiniteHits,
  connectStateResults
} from "react-instantsearch-dom";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../helpers/useWindowDimensions";
import FactCard from "./FactCard";
import ListCard from "./ListCard";
import Loader from "./Loader";

const Hits = ({
  hits,
  refineNext,
  searching,
  hasMore,
  hasPrevious,
  refinePrevious,
  maxHits,
  filters,
  list,
}) => {
  const [ref, inView] = useInView();
  const [topRef, topInView] = useInView();
  const { width } = useWindowDimensions();

  const getColumns = () => {
    if (width >= 1200) {
      return 3;
    }
    if (width >= 800) {
      return 2;
    }
    return 1;
  };

  useEffect(() => {
    // console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`);
    const timeout = () =>
      setTimeout(() => {
        console.log("refining");
        refineNext();
      }, 500);

    if (!searching && inView) {
      timeout();
    }

    return () => clearTimeout(timeout);
  }, [inView]); // eslint-disable-line

  useEffect(() => {
    // console.log(hasPrevious);
    if (!hasPrevious) return;
    // console.log(`The component is ${topInView ? "visible" : "not visible"}.`);

    const timeout = () =>
      setTimeout(() => {
        refinePrevious();
      }, 500);

    if (!searching && topInView) {
      timeout();
    }

    return () => clearTimeout(timeout);
  }, [topInView, hasMore, searching]); // eslint-disable-line

  const getIds = () => {
    if (!filters) return;
    return filters
      .map((id, i) => (i === 0 ? `UID:${id}` : `OR UID:${id}`))
      .join(" ");
  };

  return (
    <Container width="lg" sx={{ paddingRight: 0 }}>
      <Box sx={{ width: "100%", minHeight: 829 }} mb={2}>
        <Configure
          hitsPerPage={maxHits || 5}
          page={0}
          offset={0}
          filters={filters ? getIds() : undefined}
        />

        <Masonry columns={getColumns()} spacing={2}>
          {hasPrevious && (
            <div ref={topRef}>
              <Loader />
            </div>
          )}
          {hits.length > 0 &&
            hits.map((hit, i) => (
              <>
                {list ? (
                  <ListCard key={i} hit={hit} filters={filters} />
                ) : (
                  <FactCard key={i} hit={hit} filters={filters} />
                )}
              </>
            ))}
          {!maxHits && (
            <>
              {hasMore && (
                <div ref={ref}>
                  <Loader />
                </div>
              )}
              {!hasMore && (
                <Typography>You've reached the end of the results</Typography>
              )}
            </>
          )}
        </Masonry>
      </Box>
    </Container>
  );
};

const AlgoliaCustomHits = connectInfiniteHits(connectStateResults(Hits));
export const CustomHits = React.memo(AlgoliaCustomHits);
