/* eslint-disable react-hooks/exhaustive-deps */
 import React, { useEffect } from "react";
import "../Styles/Navbar.css";
 import { useNavigate} from "react-router-dom";
import {  useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { SignOut } from "../Services/AuthService";

interface Props{
  onFocusKeyReady?:(key:string)=>void;
}
const Navbar: React.FC <Props>= () => {
const navigate=useNavigate();
const homenav=useFocusable({focusKey:"home_nav",onEnterPress:()=>navigate('/home')})
const movienav=useFocusable({focusKey:"movies_nav",onEnterPress:()=>navigate('/movies')})
const kidsnav=useFocusable({focusKey:"kids_nav",onEnterPress:()=>navigate('/kids')})
const loginnav=useFocusable({focusKey:"login_nav",onEnterPress:()=>navigate('/signin')})
const logoutnav=useFocusable({focusKey:"logout_nav",onEnterPress:()=>{
 //localStorage.removeItem("auth_token");
 SignOut();
  navigate('/');
}})
useEffect(()=>{
  const timeout=setTimeout(()=>{
   homenav.focusSelf()
  },10);
  return()=>clearTimeout(timeout)
},[homenav.focusKey])



const getToken=localStorage.getItem("auth_token");

  return (
 
   <nav className="navbar">
  
    <div className="left-nav">
        <span className="heading">.Flix</span>
        <div ref={homenav.ref} className={`navbar-item ${homenav.focused?"focused":""}`}>Home</div>
            <div ref={movienav.ref} className={`navbar-item ${movienav.focused?"focused":""}`}>Movies</div>
            <div ref={kidsnav.ref} className={`navbar-item ${kidsnav.focused?"focused":""}`}>Kids</div>
      </div>
      <div className="right-nav">
            {!getToken?(  <div key={loginnav.focusKey} ref={loginnav.ref} className={`navbar-item ${loginnav.focused?"focused":""}`}>Login</div>):
               (<div key={logoutnav.focusKey} ref={logoutnav.ref} className={`navbar-item ${logoutnav.focused?"focused":""}`}>LogOut</div>)}
</div>
   
   </nav>
   
  );
};

export default Navbar;
