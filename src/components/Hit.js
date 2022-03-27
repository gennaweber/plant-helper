import React from "react";
import { Box, Container } from "@mui/material";
import useWindowDimensions from "../helpers/useWindowDimensions";
import Masonry from "@mui/lab/Masonry";
import FactCard from "./FactCard";
import { connectHits } from "react-instantsearch-dom";

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
          </Masonry>
        </Box>
      </Container>
    </>
  );
};

const CustomHits = connectHits(Hits);
export default CustomHits;
