import React from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import engToPersian from "../../helpers/persianNum";

//use google map api to link to address. remove # as it's a special character and breaks the query
const createQuery = (name, address) => {
  let q = name.replace("#", "").replace("&", "and");
  let newAddress = address.replace("#", "").replace("&", "and");

  return `https://maps.google.com/?q=${q}+${newAddress}`;
};

//removes everything but the base url to make the url fit on the cards
const createReadableUrl = (url) => {
  if (url.includes("http") || url.includes("www")) {
    let newUrl = url.split(/http(?:s:\/\/(?:www\.)?|:\/\/)|www\.|\//);
    return newUrl[1];
  }
  let newUrl = url.split("/");
  return newUrl[0];
};

//makes links input without http:// at the beginning usable
const createLink = (url) => {
  if (url.includes("http")) {
    return url;
  } else {
    return `http://${url}`;
  }
};

const ResourceCard = ({
  phone,
  address,
  name,
  email,
  url,
  description,
  currentLangCode,
}) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ minHeight: 100 }} m="auto">
      <Grid
        p={4}
        container
        sx={{ minHeight: 100 }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="body1">
            {description !== null ? description : ""}
          </Typography>
          <Grid item my="12px">
            <Divider />
          </Grid>
          <Grid item>
            <List>
              {phone !== null && (
                <ListItem disablePadding>
                  <ListItemButton component="a" href={`tel:${phone}`}>
                    <ListItemIcon>
                      <PhoneIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h5">{t("phone")}</Typography>
                      }
                      secondary={
                        <Typography variant="body1">
                          {currentLangCode === "fa" || currentLangCode === "ps"
                            ? engToPersian(phone)
                            : phone}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              )}
              {url !== null && (
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    target="_blank"
                    href={createLink(url)}
                  >
                    <ListItemIcon>
                      <WebIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h5">{t("website")}</Typography>
                      }
                      secondary={
                        <Typography
                          sx={{ wordBreak: "break-word" }}
                          variant="body1"
                        >
                          {createReadableUrl(url)}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              )}
              {email !== null && (
                <ListItem disablePadding>
                  <ListItemButton component="a" href={`mailto:${email}`}>
                    <ListItemIcon>
                      <MailIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h5">{t("email")}</Typography>
                      }
                      secondary={
                        <Typography
                          sx={{ wordBreak: "break-word" }}
                          variant="body1"
                        >
                          {email}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              )}
              {address !== null && (
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    target="_blank"
                    href={createQuery(name, address)}
                  >
                    <ListItemIcon>
                      <LocationOnIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h5">{t("address")}</Typography>
                      }
                      secondary={
                        <Typography variant="body1">
                          {currentLangCode === "fa" || currentLangCode === "ps"
                            ? engToPersian(address)
                            : address}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ResourceCard;
