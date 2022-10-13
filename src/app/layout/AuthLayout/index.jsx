import { Box } from "@mui/material";
import React from "react";

import st from "./style.module.scss";

const AuthLayout = ({ children }) => {
  return <Box className={st.authLayout}>{children}</Box>;
};

export default AuthLayout;
