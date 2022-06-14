import Masonry from '@mui/lab/Masonry';
import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import {
  Configure,
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import useWindowDimensions from '../helpers/useWindowDimensions';
import FactCard from './FactCard';

const Hits = ({ hits, refineNext, searching, hasMore, maxHits }) => {
  const [ref, { entry }] = useIntersectionObserver();
  let { width } = useWindowDimensions();
  const isVisible = entry && entry.isIntersecting;

  const getColumns = () => {
    if (width >= 1200) {
      return 3;
    } else if (width >= 800) {
      return 2;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`);
    const timeout = () =>
      setTimeout(() => {
        refineNext();
      }, 500);

    if (!searching && isVisible) {
      timeout();
    }

    return () => clearTimeout(timeout);
  }, [isVisible]); // eslint-disable-line

  return (
    <>
      <Container width='lg' sx={{ paddingRight: 0 }}>
        <Box sx={{ width: '100%', minHeight: 829 }} mb={2}>
          <Configure hitsPerPage={maxHits || 5} />
          <Masonry columns={getColumns()} spacing={2}>
            {hits.length > 0 &&
              hits.map((hit, i) => <FactCard key={i} hit={hit} />)}
            {!maxHits && (
              <>
                {hasMore && <p ref={ref}>Loading...</p>}
                {!hasMore && <p>You've reached the end of the results</p>}
              </>
            )}
          </Masonry>
        </Box>
      </Container>
    </>
  );
};

const AlgoliaCustomHits = connectInfiniteHits(connectStateResults(Hits));
export const CustomHits = React.memo(AlgoliaCustomHits);
