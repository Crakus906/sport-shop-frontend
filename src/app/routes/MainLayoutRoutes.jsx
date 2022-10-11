import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));

const MainLayoutRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...)=</div>}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Suspense>
  );
};

export default MainLayoutRoutes;
