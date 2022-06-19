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

const Hits = ({ hits, refineNext, searching, hasMore, maxHits, filters }) => {
  const [ref, { entry }] = useIntersectionObserver();
  let { width } = useWindowDimensions();
  const isVisible = entry && entry.isIntersecting;

  console.log(filters);

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

  const getIds = () => {
    if (!filters) return;
    return filters
      .map((id, i) => {
        return i === 0 ? `objectID:${id}` : `OR objectID:${id}`;
      })
      .join(' ');
  };

  return (
    <>
      <Container width='lg' sx={{ paddingRight: 0 }}>
        <Box sx={{ width: '100%', minHeight: 829 }} mb={2}>
          <Configure
            hitsPerPage={maxHits || 5}
            offset={0}
            filters={filters ? getIds() : undefined}
          />
          <Masonry columns={getColumns()} spacing={2}>
            {hits.length > 0 &&
              hits.map((hit, i) => (
                <FactCard key={i} hit={hit} filters={filters} />
              ))}
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
