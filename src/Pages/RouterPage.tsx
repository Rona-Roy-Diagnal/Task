/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useEffect } from "react";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import WantLogin from "./WantLogin";
import LoginRoute from "./LoginRoute";
import PrivateRoute from "./PrivateRoute";

// import Footer from "./Footer";
const LandingPage = React.lazy(() => import("./LandingPage"));
const Signin = React.lazy(() => import("./Signin"));
const Details = React.lazy(() => import("./DetailParent"));
const Home = React.lazy(() => import("./Home"));
const Navbar = React.lazy(() => import("./Navbar"));
const VideoPlay = React.lazy(() => import("./VideoPlay"));
const Movies = React.lazy(() => import("./Movies"));
const Kids = React.lazy(() => import("./Kids"));

const RouterPages: React.FC = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const tizenObj = (window as any)["tizen"];
    const handleKeyDown = (event: any) => {
      if (event.keyName == "back") {
        event.preventDefault();
        if (window.history.length > 1) navigate(-1);
        else {
          if (tizenObj) {
            tizenObj.application.getCurrentApplication().exit();
          }
        }
      }
    };
    return () => {
      if (tizenObj) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [navigate]);

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
        {/* <Footer /> */}
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
