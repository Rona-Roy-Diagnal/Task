;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js', './UseSingleNav-legacy-CkbPRhX5.js', './Useanalytics-legacy-BsLXquUc.js'], function (exports, module) {
    'use strict';

    var reactExports, distExports, jsxRuntimeExports, logLogin, logLoginFail, UseSingleNav, AuthService, Useanalytics;
    return {
      setters: [module => {
        reactExports = module.r;
        distExports = module.d;
        jsxRuntimeExports = module.j;
        logLogin = module.l;
        logLoginFail = module.a;
      }, module => {
        UseSingleNav = module.U;
        AuthService = module.A;
      }, module => {
        Useanalytics = module.U;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".outer {\r\n\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: black;\r\n  height: 100vh;\r\n}\r\n.outer h2{\r\n  background: transparent;\r\n  color: white;\r\n}\r\n.inp-form {\r\n\r\n  width: 400px;\r\n  color: white;\r\n  padding: 20px;\r\n  margin: 8px;\r\n  background-color: #1c1c1c;\r\n  border: 2px solid #E50914;\r\n  text-align: center;\r\n  margin-left: 10px;\r\n\r\n}\r\n\r\n.inp{\r\n  color: white;\r\n  border: 1px solid #E50914;\r\n  margin: 5px;\r\n  padding: 8px;\r\n  width: 95%;\r\n\r\n\r\n}\r\n.login-btn {\r\n  margin-top: 20px;\r\n\r\n  color: white;\r\n  background: #E50914;\r\n\r\n  height: 30px;\r\n  border: none;\r\n  border-radius: 7px;\r\n  align-self: center;\r\n  width: 100%;\r\n}\r\n.login-btn:hover {\r\n  /* background-color: rgb(46, 46, 141); */\r\n\r\n  color: black;\r\n}\r\ninput::placeholder{\r\n  color: white;\r\n}\r\n.login-button:hover{\r\n   transform: scale(1.1);\r\n}\r\n\r\n  .focused{\r\n  transition: transform 0.2s,outline 0.2s;\r\n  z-index: 3;\r\n  outline: 3px solid white;\r\n  border: 0;\r\n}\r\n.login-button .focused{\r\n  outline: 3px solid white;\r\n}\r\n.error{\r\n  color: red;\r\n}\r\n/* .focused{\r\n   border: 1px;\r\n} */\r\n/* desktop */\r\n@media (min-width: 1200px) {\r\n\r\n  .form {\r\n    width: 450px;\r\n  }\r\n\r\n  .form h2 {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .btn {\r\n    height: 36px;\r\n    font-size: 15px;\r\n  }\r\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        var __async = (__this, __arguments, generator) => {
          return new Promise((resolve, reject) => {
            var fulfilled = value => {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            };
            var rejected = value => {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            };
            var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
            step((generator = generator.apply(__this, __arguments)).next());
          });
        };
        const Signin = exports("default", () => {
          const [username, setUsername] = reactExports.useState("");
          const [password, setPassword] = reactExports.useState("");
          const [error, setError] = reactExports.useState("");
          const usernameRef = reactExports.useRef(null);
          const passwordRef = reactExports.useRef(null);
          const navigate = UseSingleNav();
          const {
            Login
          } = Useanalytics();
          const loginBtn = distExports.useFocusable({
            focusKey: "login_btn",
            onEnterPress: () => __async(null, null, function* () {
              var _a;
              try {
                const token = yield AuthService(username, password);
                localStorage.setItem("auth_token", token);
                logLogin();
                navigate("/home");
                Login();
              } catch (error2) {
                console.error("login failed", error2);
                logLoginFail("loginFailedWrongCredentials", (_a = error2 == null ? void 0 : error2.response) == null ? void 0 : _a.data);
                setError("wrong credentials");
              }
              setUsername("");
              setPassword("");
            })
          });
          const usernameFocus = distExports.useFocusable({
            focusKey: "username_focus",
            focusable: true,
            onFocus: () => {
              var _a;
              (_a = usernameRef.current) == null ? void 0 : _a.focus();
            },
            onArrowPress: direction => {
              if (direction == "up" || direction == "left" || direction == "right") {
                return false;
              } else {
                return true;
              }
            }
          });
          const passwordFocus = distExports.useFocusable({
            focusKey: "password_focus",
            focusable: true,
            onFocus: () => {
              var _a;
              (_a = passwordRef.current) == null ? void 0 : _a.focus();
            },
            onArrowPress: direction => {
              if (direction == "left" || direction == "right") {
                return false;
              } else {
                return true;
              }
            }
          });
          reactExports.useEffect(() => {
            usernameFocus.focusSelf();
          }, []);
          return (
            // <FocusContext.Provider value={focusKey}>
            /* @__PURE__ */
            jsxRuntimeExports.jsxs("div", {
              className: "outer",
              style: {
                backgroundImage: " linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(/netflix.jpg)"
              },
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                children: "Login to Continue"
              }), /* @__PURE__ */jsxRuntimeExports.jsxs("form", {
                className: "inp-form",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: usernameFocus.ref,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                    ref: usernameRef,
                    className: `inp ${usernameFocus.focused ? "focused" : ""}`,
                    type: "text",
                    value: username,
                    onChange: e => setUsername(e.target.value),
                    required: true,
                    placeholder: "username"
                  })
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: passwordFocus.ref,
                  children: /* @__PURE__ */jsxRuntimeExports.jsx("input", {
                    ref: passwordRef,
                    className: `inp ${passwordFocus.focused ? "focused" : ""}`,
                    type: "password",
                    value: password,
                    onChange: e => setPassword(e.target.value),
                    required: true,
                    placeholder: "password"
                  })
                }), error && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  className: "error",
                  children: error
                }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  ref: loginBtn.ref,
                  className: `login-button ${loginBtn.focused ? "focused" : ""}`,
                  children: "Login"
                })]
              })]
            })
          );
        });
      }
    };
  });
})();
