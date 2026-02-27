/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { SignOut } from "../Services/AuthService";
import Useanalytics from "../Hooks/Useanalytics";
import UseSingleNav from "../Hooks/UseSingleNav";

export interface Props {
  onFocusKeyReady?: (key: string) => void;
  parentKey?:string;
}
const Navbar: React.FC<Props> = () => {
  const {Logout}=Useanalytics();
 const safe=UseSingleNav()
  const navigate = useNavigate();
const [lock,setLock]=useState(false);
  const {ref,focusKey}=useFocusable({focusKey:"nav_key",
    onFocus:()=>{logoutnav.focusSelf()
    
    ref.current.scrollIntoView({
        behaviour: "smooth",
        block: "nearest"
      })
    }
  })
  const homenav  = useFocusable({
    focusKey: "home_nav",
    onEnterPress: () => handleHome(),
    onArrowPress: (direction) => {
      if (direction == "left" || direction == "up") {
        return false;
      } else {
        return true;
      }
    },
  });
  const movienav = useFocusable({
    focusKey: "movies_nav",
    onEnterPress: () => handleMovies(),
    onArrowPress: (direction) => {
      if (direction == "up") {
        return false;
      } else {
        return true;
      }
    },
  });
  const handleLogin=()=>{
 safe('/signin')
  setLock(true)
}

const handleLogout=()=>{
   SignOut();
      navigate("/",{replace:true});
      Logout();
      loginnav.focusSelf();
      
}
const handleKids=()=>{
  safe('/kids');
}
const handleHome=()=>{
safe('/home')
}
const handleMovies=()=>{
 safe('/movies')
}
  const kidsnav = useFocusable({
    focusKey: "kids_nav",
    onEnterPress: () => handleKids(),
    onArrowPress: (direction) => {
      if (direction == "up") {
        return false;
      } else {
        return true;
      }
    },
  });
  const loginnav = useFocusable({
    focusKey: "login_nav",
    onEnterPress: () => {
      handleLogin()
      
  
    },
    onArrowPress: (direction) => {
      if (direction == "up" || direction == "right") {
        return false;
      } else {
        return true;
      }
    },
  });
  const logoutnav = useFocusable({
    focusKey: "logout_nav",
    onEnterPress: () => {
      handleLogout()
      
    },
    onArrowPress: (direction) => {
      if (direction == "up" || direction == "right") {
        return false;
      } else {
        return true;
      }
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      homenav.focusSelf();
    }, 10);
    return () => clearTimeout(timeout);
  }, [homenav.focusKey]);

  const getToken = localStorage.getItem("auth_token");

  return (
    <nav className="navbar" ref={ref}>
   <FocusContext.Provider value={focusKey}>
      <div className="left-nav">
        <span className="heading">.Flix</span>
       <div
          ref={homenav.ref}
          className={`navbar-item ${homenav.focused ? "focused" : ""}`} onClick={handleHome}
        >
          Home
        </div>
        <div
          ref={movienav.ref}
          className={`navbar-item ${movienav.focused ? "focused" : ""}`} onClick={handleMovies}
        >
          Movies
        </div>
         <div
          ref={kidsnav.ref}
          className={`navbar-item ${kidsnav.focused ? "focused" : ""}`} onClick={handleKids}
        >
          Kids
        </div>
      </div>
      <div className="right-nav">
        {!getToken ? (
          <button
            key={loginnav.focusKey}
            ref={loginnav.ref}
            className={`login-btn ${loginnav.focused ? "focused" : ""}`}onClick={handleLogin} disabled={lock}
          >
            Log in
          </button>
        ) : (
          <button
            key={logoutnav.focusKey}
            ref={logoutnav.ref}
            className={`login-btn ${logoutnav.focused ? "focused" : ""}`}onClick={handleLogout}
          >
            Log out
          </button>
        )}
      </div>
      </FocusContext.Provider>
    </nav>
  );
};

export default Navbar;
