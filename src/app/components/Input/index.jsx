import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React from "react";

import st from "./style.module.scss";

const Input = ({ id, label, type, variant, ...props }) => {
  return (
    <Box className={st.input}>
      <TextField
        {...props}
        id={id}
        label={label}
        type={type}
        variant={variant ? variant : "standard"}
      />
    </Box>
  );
};

export default Input;
