import React from "react";
// import { useTranslation } from "react-i18next";

import {
  Typography,
  TextField,
  InputLabel,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
} from "@mui/material";

const FamilyMembers = ({ handleAgesChange, handleChange, nextStep, form }) => {
  const { ages, numberOfPeople } = form;

  // const { t } = useTranslation();

  const allFieldsFilled = () => {
    if (ages.length > 0 && numberOfPeople !== 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Typography variant="h4" mt={2}>
        Tell us a bit about your family so we can help find the best city for
        you.
      </Typography>
      <Grid container direction="column" spacing={2}>
        <Grid
          container
          item
          direction="row"
          my={2}
          spacing={1}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Grid item flexGrow="2">
            <InputLabel id="family-num-label" htmlFor="family-num">
              Number of people in your family (including you)
            </InputLabel>
            <TextField
              id="family-num"
              name="numberOfPeople"
              aria-describedby="family-num-label"
              fullWidth={true}
              variant="outlined"
              label=""
              autoComplete="off"
              type="number"
              value={numberOfPeople}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              InputProps={{
                inputProps: {
                  max: 15,
                  min: 0,
                },
              }}
            />
          </Grid>
          <Grid item mt={4}>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <FormLabel>
                  Select each age group that matches someone in your family
                </FormLabel>
                <Grid item container xs={12} spacing={2}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ages.includes("0-12")}
                          onChange={(e) => handleAgesChange(e)}
                          name="0-12"
                          size="large"
                        />
                      }
                      label="Less than 12 years"
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ages.includes("13-18")}
                          onChange={(e) => handleAgesChange(e)}
                          name="13-18"
                          size="large"
                        />
                      }
                      label="13 - 18 years"
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ages.includes("19-35")}
                          onChange={(e) => handleAgesChange(e)}
                          name="19-35"
                          size="large"
                        />
                      }
                      label="19 - 35 years"
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ages.includes("36-65")}
                          onChange={(e) => handleAgesChange(e)}
                          name="36-65"
                          size="large"
                        />
                      }
                      label="36 - 65 years"
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ages.includes("65+")}
                          onChange={(e) => handleAgesChange(e)}
                          name="65+"
                          size="large"
                        />
                      }
                      label="65+ years"
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item mt={2}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            disabled={!allFieldsFilled()}
            onClick={() => {
              nextStep();
            }}
            fullWidth={true}
          >
            <Typography variant="h5">Confirm & Continue</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FamilyMembers;
