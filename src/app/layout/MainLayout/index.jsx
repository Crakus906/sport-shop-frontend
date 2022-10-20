import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import st from "./style.module.scss";
import DrawerMenu from "./DrawerMenu";

const MainLayout = ({ children }) => {
  return (
    <Box className={st.mainLayout} sx={{ display: "flex" }}>
      <Header />
      <DrawerMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
