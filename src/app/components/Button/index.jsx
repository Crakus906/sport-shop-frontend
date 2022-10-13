import React from "react";
import { Button as Btn } from "@mui/material";
import cn from "classnames";
import Box from "@mui/system/Box";

import st from "./style.module.scss";

const Button = ({ children, variant, color, style, ...props }) => {
  return (
    <Box className={cn(st.button, { [style]: style })}>
      <Btn {...props}>{children}</Btn>
    </Box>
  );
};

export default Button;
