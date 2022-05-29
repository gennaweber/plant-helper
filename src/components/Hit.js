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
import FactCard from "./FactCard";

const Hits = ({ hits, refineNext, searching, hasMore }) => {
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
    <>
      <Container width="lg" sx={{ paddingRight: 0 }}>
        <Box sx={{ width: "100%", minHeight: 829 }} mb={2}>
          <Masonry columns={getColumns()} spacing={2}>
            <Configure hitsPerPage={5} />
            {hits.map((hit, i) => (
              <FactCard
                key={i}
                genus={hit.Genus}
                species={hit.Species}
                rarity={hit.Rarity}
                price={hit.Price_Point}
                minLight={hit.Light_min}
                prefLight={hit.Light_prefers}
                maxLight={hit.Light_max}
                tolHumid={hit.Humidity_tolerates}
                prefHumid={hit.Humidity_prefers}
                water={hit.Water}
                fuss={hit.Fussiness}
                fert={hit.Fertilizer}
                pattern={hit.Growth_Pattern}
                prop={hit.Propagation}
                note={hit.Notes}
                speed={hit.Rate_of_Growth}
                hashtag={hit.Hashtag}
                src={hit.Image}
                alt={`${hit.Genus} ${hit.Species}`}
              />
            ))}
            {!searching && hasMore && <p ref={ref}>Loading...</p>}
            {!hasMore && <p>You've reached the end of the results</p>}
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

const CustomHits = connectInfiniteHits(connectStateResults(Hits));
export default CustomHits;
