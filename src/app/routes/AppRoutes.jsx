import MainLayoutRoutes from "./MainLayoutRoutes";
import React from "react";
import AuthLayoutRoutes from "./AuthLayoutRoutes";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AppRoutes;
