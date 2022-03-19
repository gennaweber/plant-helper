import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Grid } from "@mui/material";
import CopyMe from "./CopyMe";

const Socials = ({ url }) => {
  // let { full } = url;
  let full = document.location.href;
  let title = document.title;

  return (
    <>
      <Grid container>
        <CopyMe url={full} />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing="1vh"
        >
          <Grid item>
            <EmailShareButton url={full} subject={title}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </Grid>
          <Grid item>
            <FacebookShareButton url={full}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </Grid>
          <Grid item>
            <TelegramShareButton url={full} title={title}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </Grid>
          <Grid item>
            <TwitterShareButton url={full} title={title}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </Grid>
          <Grid item>
            <WhatsappShareButton url={full} title={title} separator="—">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Socials;
