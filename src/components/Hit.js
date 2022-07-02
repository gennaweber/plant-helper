import Masonry from '@mui/lab/Masonry';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import {
  Configure,
  connectInfiniteHits,
  connectStateResults,
} from 'react-instantsearch-dom';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import useWindowDimensions from '../helpers/useWindowDimensions';
import FactCard from './FactCard';
import ListCard from './ListCard';
import Loader from './Loader';

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
  const [ref, { entry }] = useIntersectionObserver();
  const [ref2 = ref, { entry: entry2 }] = useIntersectionObserver();
  let { width } = useWindowDimensions();
  const isVisible = entry && entry.isIntersecting;
  const isVisibleTop = entry2 && entry2.isIntersecting;

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
    // console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`);
    const timeout = () =>
      setTimeout(() => {
        refineNext();
      }, 500);

    if (!searching && isVisible) {
      timeout();
    }

    return () => clearTimeout(timeout);
  }, [isVisible]); // eslint-disable-line

  useEffect(() => {
    if (!isVisibleTop) return;

    console.log(
      `The component is ${isVisibleTop ? 'visible' : 'not visible'}.`
    );

    const timeout = () =>
      setTimeout(() => {
        refinePrevious();
      }, 500);

    if (!searching && isVisibleTop) {
      timeout();
    }

    return () => clearTimeout(timeout);
  }, [isVisibleTop]); // eslint-disable-line

  const getIds = () => {
    if (!filters) return;
    return filters
      .map((id, i) => {
        return i === 0 ? `UID:${id}` : `OR UID:${id}`;
      })
      .join(' ');
  };

  return (
    <>
      <Container width='lg' sx={{ paddingRight: 0 }}>
        <Box sx={{ width: '100%', minHeight: 829 }} mb={2}>
          <Configure
            hitsPerPage={maxHits || 5}
            page={0}
            offset={0}
            filters={filters ? getIds() : undefined}
          />

          <Masonry columns={getColumns()} spacing={2}>
            {hasPrevious && (
              <div ref={ref2}>
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
    </>
  );
};

const AlgoliaCustomHits = connectInfiniteHits(connectStateResults(Hits));
export const CustomHits = React.memo(AlgoliaCustomHits);
