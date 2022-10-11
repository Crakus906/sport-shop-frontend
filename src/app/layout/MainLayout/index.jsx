import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";

import st from "./style.module.scss";

const MainLayout = ({ children }) => {
  return (
    <Box className={st.mainLayout}>
      <Header />
      {children}
    </Box>
  );
};

export default MainLayout;
