import MainLayoutRoutes from "./MainLayoutRoutes";
import React, { useEffect } from "react";
import AuthLayoutRoutes from "./AuthLayoutRoutes";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/action/auth";
import {
  isAuthSelector,
  isLoadingAuthSelector,
} from "../redux/selector/selector";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingAuthSelector);

  const location = useLocation();
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(getMe());
    }
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
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
