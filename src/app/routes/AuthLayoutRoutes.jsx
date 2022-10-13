import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const Login = lazy(() => import("../pages/Login"));

const AuthLayoutRoutes = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading...)=</div>}>
        <Routes>
          <Route exact path="/auth/login" element={<Login />} />
        </Routes>
      </Suspense>
    </AuthLayout>
  );
};

export default AuthLayoutRoutes;
