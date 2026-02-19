import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import Footer from "./Footer";
const LandingPage = React.lazy(() => import("./LandingPage"));
const Signin = React.lazy(() => import("./Signin"));
const Details = React.lazy(() => import("./Details"));
const Home = React.lazy(() => import("./Home"));
const Navbar = React.lazy(() => import("./Navbar"));
const VideoPlay = React.lazy(() => import("./VideoPlay"));
const Movies = React.lazy(() => import("./Movies"));
const Kids = React.lazy(() => import("./Kids"));
const Contact = React.lazy(() => import("./Contact"));

const RouterPages: React.FC = () => {
  const location = useLocation();

  const hideNavBool = location.pathname.startsWith("/videoplay");
 // const hideNavLogin = location.pathname.startsWith("/signin");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {!hideNavBool && <Navbar key="videoplay-nav"/>}
      
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/videoplay" element={<VideoPlay />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};
const RouterPage: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterPages />
    </BrowserRouter>
  );
};

export default RouterPage;
