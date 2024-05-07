import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export default function MuiRadioButton() {
  const [value, setValue] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={changeHandler}
          row
        >
          <FormControlLabel
            control={<Radio color="warning" size="medium" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="2-4"
            value="2-4"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="4-6"
            value="4-6"
          />
        </RadioGroup>
        <FormHelperText>Select</FormHelperText>
      </FormControl>
    </Box>
  );
}
