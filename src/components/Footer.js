import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const d = new Date();
let year = d.getFullYear();

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid
          sx={{ height: "100%" }}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid item container spacing="1vh" direction="column">
                <Grid item>
                  <Grid item mt={3}>
                    <Typography variant="body1">
                      Copyright Genna Weber {year} /{" "}
                      <a
                        className="attributionLinkDark"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/gennasplants/"
                        title="instagram"
                      >
                        @gennasplants
                      </a>{" "}
                      /{" "}
                      <a
                        className="attributionLinkDark"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.patreon.com/gennasplants?fan_landing=true"
                        title="patreon"
                      >
                        Patreon
                      </a>
                    </Typography>
                  </Grid>
                  <Grid item className="attributionLinkDark">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.flaticon.com/free-icons/indoor-plants"
                      title="indoor plants icons"
                    >
                      <Typography variant="body2">
                        Indoor plants icons created by Freepik - Flaticon
                      </Typography>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item sx={{ maxWidth: "50%" }}>
                <Typography color="#fff" variant="body1" className="smallText">
                  Youthful Cities is a not-for-profit determined to make cities
                  better places to work, live, and play for everyone.
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
