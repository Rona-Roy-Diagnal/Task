import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [sign, setSign] = useState<boolean>(true);
  console.log("navbar.tsx");
  const navigate = useNavigate();
  useEffect(() => {
    const toggle = localStorage.getItem("sign");
    if (toggle == "false") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSign(false);
    }
  }, []);
  const handleSignin = () => {
    localStorage.setItem("sign", "true");
    setSign(false);
  };
  const login = localStorage.getItem("login");
  const handleSignout = () => {
    localStorage.removeItem("sign");
    localStorage.removeItem("login");
    setSign(true);
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <div className="navbar">
      <h1>.FLIX</h1>
      <div>
        <button className="signin" onClick={handleContact}>
          CONTACT
        </button>
        {sign && (
          <Link to="/signin" replace={true}>
            
            <button onClick={handleSignin} className="signin">
              SIGN IN
            </button>
          </Link>
        )}

        {login && (
          <Link to="/" replace={true}>
            
            <button onClick={handleSignout} className="signin">
              LOGOUT
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
