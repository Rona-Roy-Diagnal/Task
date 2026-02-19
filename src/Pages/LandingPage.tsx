/* eslint-disable react-hooks/refs */
import React, { useEffect } from "react";
import "../Styles/LandingPage.css";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate=useNavigate()
  const startBtn=useFocusable({focusKey:"start_btn",onEnterPress:()=>navigate('/home')});
  useEffect(()=>{
    startBtn.focusSelf();
  },[])
  return (
    <div  className="cover">
      <div className="welcome">
        <h2>SEE WHAT'S NEXT.</h2>
        <p>WATCH ANYWHERE. CANCEL ANYTIME</p>
        <button ref={startBtn.ref} className={`start ${startBtn.focused?"focused":""}`}>Get started</button>
      </div>
    </div>
  );
};

export default LandingPage;
