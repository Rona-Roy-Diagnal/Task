/* eslint-disable react-hooks/refs */

import React, { useEffect, useRef, useState } from "react";
import AuthService from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import "../Styles/Signin.css";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import mixpanel from "mixpanel-browser";
const Signin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
const usernameRef=useRef<HTMLInputElement>(null);
const passwordRef=useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const loginBtn = useFocusable({
    focusKey: "login_btn",
    onEnterPress: async () => {
      try {
        
      const token= await AuthService(username, password);
       localStorage.setItem("auth_token", token);
        navigate("/home");
      } catch (error) {
        console.error("login failed", error);
        alert("Wrong Credentials")
      }
    },
  });
   const {ref,focusKey}=useFocusable({focusKey:"login_focus",focusable:true})
  const usernameFocus=useFocusable({focusKey:"username_focus",focusable:true,onFocus:()=>{
    
    usernameRef.current?.focus()
    
   }})
   const passwordFocus=useFocusable({focusKey:"password_focus",focusable:true,onFocus:()=>{
    passwordRef.current?.focus();
   }})
   useEffect(()=>{
   
    usernameFocus.focusSelf();
   },[])
  
   mixpanel.track('Signin', {
  'Signin Type': "using credentials"
})

  return (
    <FocusContext.Provider value={focusKey}>
   <div ref={ref} className="outer">
      <form ref={ref} className="inp-form">
        <div ref={usernameFocus.ref}>
        <input ref={usernameRef}
          className={`inp ${usernameFocus.focused?"focused":""}`}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="username"
        ></input>
        </div>
        <div ref={passwordFocus.ref}>
        <input ref={passwordRef}
          className={`inp ${passwordFocus.focused?"focused":""}`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="password"
        ></input>
        </div>
        <button
          ref={loginBtn.ref}
          className={`login-btn?${loginBtn.focused ? "focused" : ""}`}
          type="submit"
        >
          Login
        </button>
     
      </form>
    </div>
    </FocusContext.Provider>
  );
};

export default Signin;
