/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import WantLogin from "./WantLogin";
import LoginRoute from "./LoginRoute";
import PrivateRoute from "./PrivateRoute";

const LandingPage = React.lazy(() => import("./LandingPage"));
const Signin = React.lazy(() => import("./Signin"));
const Details = React.lazy(() => import("./DetailParent"));
const Home = React.lazy(() => import("./Home"));
const Navbar = React.lazy(() => import("./Navbar"));
const VideoPlay = React.lazy(() => import("./VideoPlay"));
const Movies = React.lazy(() => import("./Movies"));
const Kids = React.lazy(() => import("./Kids"));

const RouterPages: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route
            path="/signin"
            element={
              <LoginRoute>
                <Signin></Signin>
              </LoginRoute>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/movies" element={<Movies />}></Route> 
          <Route path="/kids" element={<Kids />}></Route> 
          <Route path="/videoplay" element={<VideoPlay />}></Route>
          <Route path="/wantlogin" element={<WantLogin />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
const RouterPage: React.FC = () => {
  return (
    <HashRouter>
      <RouterPages />
    </HashRouter>
  );
};

export default RouterPage;
