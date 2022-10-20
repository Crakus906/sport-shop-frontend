import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/system/Box";

import st from "./style.module.scss";

const InputPassword = ({ label, variant, errors, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      variant="standard"
      error={!!errors}
      style={{
        width: "100%",
      }}
      className={st.input}
    >
      <InputLabel>{label}</InputLabel>
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        variant={variant ? variant : "standard"}
        error={!!errors}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!errors && <Box className={st.error}>{errors}</Box>}
    </FormControl>
  );
};

export default InputPassword;
