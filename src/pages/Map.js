import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

// import Back from "../components/Back";

const queries = [
  {
    city: "Victoria",
    query: "ll=48.45076410849397%2C-123.36177217239225&z=13",
  },
  { city: "Kelowna", query: "ll=49.88500162311545%2C-119.4423307548844&z=13" },
  { city: "Calgary", query: "ll=51.06459413330122%2C-114.03506989078637&z=12" },
  {
    city: "Lethbridge",
    query: "ll=49.695280062987074%2C-112.83850728927456&z=13",
  },
  {
    city: "Saskatoon",
    query: "ll=52.1445879903481%2C-106.68469928779338&z=13",
  },
  { city: "Regina", query: "ll=50.4442483078341%2C-104.6061395947535&z=13" },
  { city: "Winnipeg", query: "ll=49.87458688888205%2C-97.15939065376168&z=12" },
  { city: "London", query: "ll=42.986526579904606%2C-81.2339143117908&z=13" },
  { city: "Moncton", query: "ll=46.10441880793407%2C-64.79055608499117&z=13" },
  { city: "Halifax", query: "ll=44.64741305844589%2C-63.5948089547977&z=13" },
];

const all = "ehbc=2E312F";

const Map = () => {
  const { cityname } = useParams();

  const createQuery = () => {
    let index = queries.findIndex((city) => city.city === cityname);
    if (index !== -1) {
      return queries[index].query;
    } else {
      return all;
    }
  };
  return (
    <>
      <Grid sx={{ minHeight: "88vh", minWidth: "100%" }} container>
        <Grid item sx={{ minHeight: "100%", minWidth: "100%" }}>
          <iframe
            title="Resource map"
            src={`https://www.google.com/maps/d/embed?mid=13OIut-UoxG55ILUmj4Y7vpMZfJV0zTi_&${createQuery()}`}
            width="100%"
            height="100%"
          ></iframe>
        </Grid>
      </Grid>
      {/* <Container maxWidth="xs">
        <Back />
      </Container> */}
    </>
  );
};
export default Map;
