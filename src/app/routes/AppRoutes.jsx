import MainLayoutRoutes from "./MainLayoutRoutes";
import React from "react";
import AuthLayoutRoutes from "./AuthLayoutRoutes";
import { Route, Routes, useLocation } from "react-router-dom";

const AppRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* <Routes>
        <Route path="/auth/:path?" component={AuthLayoutRoutes} />
        <Route component={MainLayoutRoutes} />
      </Routes> */}
      {location.state?.auth && <AuthLayoutRoutes />}
      {!location.state?.auth && <MainLayoutRoutes />}
    </div>
  );
};

export default AppRoutes;
