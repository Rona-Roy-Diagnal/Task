/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import "../Styles/LandingPage.css";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");
  const startBtn = useFocusable({
    focusKey: "start_btn",
    onEnterPress: () => handleLanding(),
  });
  useEffect(() => {
    startBtn.focusSelf();
  }, []);
  const handleLanding = () => {
    token ? navigate("/home") : navigate("/signin");
  };
  return (
    <div
      className="cover"
      // style={{
      //   backgroundImage:
      //     " linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('/netflix.jpg')",
      // }}
    >
      <div className="welcome">
        <h1>.FLIX</h1>
        <h2>SEE WHAT'S NEXT.</h2>
        <p>WATCH ANYWHERE. CANCEL ANYTIME</p>
        <button
          ref={startBtn.ref}
          className={`start ${startBtn.focused ? "focused" : ""}`}
          onClick={handleLanding}
        >
          Get Started
        </button>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default LandingPage;
