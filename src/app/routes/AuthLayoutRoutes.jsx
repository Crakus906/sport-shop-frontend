import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));
const RegistrationAsSeller = lazy(() =>
  import("../pages/RegistrationAsSeller")
);

const AuthLayoutRoutes = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading...)=</div>}>
        <Routes>
          <Route exact path="/auth/login" element={<Login />} />
          <Route path="/auth/registration" element={<Registration />} />
          <Route
            path="/auth/registration-as-seller"
            element={<RegistrationAsSeller />}
          />
        </Routes>
      </Suspense>
    </AuthLayout>
  );
};

export default AuthLayoutRoutes;
