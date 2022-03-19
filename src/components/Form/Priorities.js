import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Button,
  FormGroup,
  Divider,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import _ from "lodash";
import additionalInfo from "../../cityCalc/additionalInfo.js";

const groupedPrioritiesArray = Object.values(
  _.groupBy(additionalInfo, (item) => item.category)
);

const Priorities = ({ form, setForm, handleChange }) => {
  const { completed, priorities } = form;
  const [initial] = useState(form);

  const getDemographicMeasurements = useCallback(() => {
    const { numberOfPeople, ages } = initial;

    //return array of matching measurement objects
    let ageMeasurements = additionalInfo.map((measurement) => {
      if (Array.isArray(measurement.demographic)) {
        if (_.intersection(measurement.demographic, ages).length > 0) {
          return measurement;
        }
      } else if (measurement.demographic === "all") {
        return measurement;
      } else if (
        typeof measurement.demographic === "object" &&
        numberOfPeople >= measurement.demographic.minNumberOfPeople &&
        numberOfPeople <= measurement.demographic.maxNumberOfPeople
      ) {
        return measurement;
      }
      return undefined;
    });
    return ageMeasurements.filter((e) => e !== undefined);
  }, [initial]);

  const setPriorities = useCallback(() => {
    if (!completed) {
      const measurements = getDemographicMeasurements();
      let priorities = initial.priorities;
      priorities = measurements;
      setForm({ ...initial, priorities });
    }
  }, [getDemographicMeasurements, initial, setForm, completed]);

  useEffect(() => {
    setPriorities();
  }, [setPriorities]);

  const handlePriorityChange = (e) => {
    if (e.target.checked) {
      //add priority to selected
      const priorities = form.priorities;
      priorities.push(
        additionalInfo.find((priority) => priority.name === e.target.name)
      );
      setForm({ ...form, priorities });
    } else {
      //remove priority from selected
      const oldPriorites = form.priorities;
      const priorities = oldPriorites.filter(
        (priority) => priority.name !== e.target.name
      );
      setForm({ ...form, priorities });
    }
  };

  return (
    <>
      <Typography variant="h4" mt={2}>
        Let us know what's important to you. We've selected some items already
        based on the ages and number of people in your family.
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
          <Grid item>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                {groupedPrioritiesArray.map((categoryArray, i) => (
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    mt={1}
                    key={uuidv4()}
                  >
                    <Grid item xs={12} key={i} py={1} mt={2}>
                      <Typography variant="h3" mb={1}>
                        {categoryArray[0].category}
                      </Typography>
                      <Divider />
                    </Grid>
                    {categoryArray.map((topic, i) => (
                      <Grid item xs={6} key={i}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={priorities.includes(topic)}
                              onChange={(e) => handlePriorityChange(e)}
                              name={topic.name}
                              size="large"
                            />
                          }
                          label={topic.measurement}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item mt={2}>
          <Link to="/suggested-cities">
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth={true}
              onClick={() => handleChange("completed", true)}
            >
              <Typography variant="h5">Confirm & Continue</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Priorities;
