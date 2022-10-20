import React, { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const CreateProduct = lazy(() => import("../pages/CreateProduct"));

const MainLayoutRoutes = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div>Loading...)=</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-poduct" element={<CreateProduct />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default MainLayoutRoutes;
