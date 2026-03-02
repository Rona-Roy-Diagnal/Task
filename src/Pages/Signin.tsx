/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from "react";
import AuthService from "../Services/AuthService";

import "../Styles/Signin.css";
import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";

import { logLogin, logLoginFail } from "../Utils/Loggly";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const logref=useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { Login } = Useanalytics();
  const handleLogin = async () => {
    try {
      const token = await AuthService(username, password);
      localStorage.setItem("auth_token", token);

      logLogin();
      navigate("/home");
      Login();
    } catch (error: any) {
      console.error("login failed", error);
      logLoginFail("loginFailedWrongCredentials", error?.response?.data);
      setError("wrong credentials");
    }
    setUsername("");
    setPassword("");
  };

  const loginBtn = useFocusable({
    focusKey: "login_btn",
    onFocus:()=>{
      logref.current?.focus();
    },
    onEnterPress: handleLogin,
  });
  //  const {ref}=useFocusable({focusKey:"login_focus",focusable:true})
  const usernameFocus = useFocusable({
    focusKey: "username_focus",
    focusable: true,
    onFocus: () => {
      usernameRef.current?.focus();
    },
    onArrowPress: (direction) => {
      if (direction == "up" || direction == "left" || direction == "right") {
        return false;
      } else {
        return true;
      }
    },
  });
  const passwordFocus = useFocusable({
    focusKey: "password_focus",
    focusable: true,
    onFocus: () => {
      passwordRef.current?.focus();
    },
    onArrowPress: (direction) => {
      if (direction == "left" || direction == "right") {
        return false;
      } 
      else if(direction=='up') {
        setFocus("username_focus")
        return false;
      }
      return true;
    },
  });
  useEffect(() => {
    usernameFocus.focusSelf();
  }, []);

  return (
    <div
      className="outer"
      style={{
        backgroundImage:
          " linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(/netflix.jpg)",
      }}
    >
      
      <div className="outer-sub">
      <h2>Login to Continue</h2>
      <form className="inp-form">
        <div className="inp-div" ref={usernameFocus.ref}>
          <input
            ref={usernameRef}
            className={`inp ${usernameFocus.focused ? "focused" : ""}`}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="username"
          ></input>
        </div>
        <div className="inp-div" ref={passwordFocus.ref}>
          <input
            ref={passwordRef}
            className={`inp ${passwordFocus.focused ? "focused" : ""}`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          ></input>
        </div>
        {error && <div className="error">{error}</div>}
        <div  className="btn-div" ref={loginBtn.ref}>
        <button
          type="button"
         ref={logref}
          className={`login-button ${loginBtn.focused ? "focused" : ""}`}
          onClick={handleLogin}
        >
          Login
        </button></div>
      </form>
      </div>
    </div>
  );
};

export default Signin;
