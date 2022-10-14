import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React from "react";

import st from "./style.module.scss";

const Input = ({ variant, errors, ...props }) => {
  {
    console.log(errors);
  }
  return (
    <Box className={st.input}>
      <TextField
        {...props}
        error={!!errors}
        variant={variant ? variant : "standard"}
      />
      {!!errors && <Box className={st.error}>{errors}</Box>}
    </Box>
  );
};

export default Input;
