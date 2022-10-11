import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayoutRoutes from "./MainLayoutRoutes";
import React from "react";

const AppRoutes = () => {
  return (
    <Router>
      <Route component={MainLayoutRoutes} />
    </Router>
  );
};

export default AppRoutes;
