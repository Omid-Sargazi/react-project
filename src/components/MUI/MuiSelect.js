import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function MuiSelect() {
  const [country, setCountry] = useState([]);
  console.log(country);

  const handleChange = (e) => {
    const value = e.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box width={"150px"}>
        <TextField
          onChange={handleChange}
          label="select country"
          value={country}
          select
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="error"
          helperText="Select"
        >
          <MenuItem value="In">India</MenuItem>
          <MenuItem value="PO">Polish</MenuItem>
          <MenuItem value="AS">Australia</MenuItem>
        </TextField>
      </Box>
    </>
  );
}
