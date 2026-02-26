;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js', './UseSingleNav-legacy-CkbPRhX5.js', './Useanalytics-legacy-BsLXquUc.js'], function (exports, module) {
    'use strict';

    var useNavigate, reactExports, distExports, jsxRuntimeExports, UseSingleNav, SignOut, Useanalytics;
    return {
      setters: [module => {
        useNavigate = module.u;
        reactExports = module.r;
        distExports = module.d;
        jsxRuntimeExports = module.j;
      }, module => {
        UseSingleNav = module.U;
        SignOut = module.S;
      }, module => {
        Useanalytics = module.U;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".navbar{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color: #E50914;\r\n  padding: 14px 32px;\r\n  height: 60px;\r\n}\r\n.left-nav{\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n.heading{\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  color: #E50914;\r\n}\r\n.sign-btn{\r\n  padding: 8px 18px;\r\n  background-color: #E50914;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n color: white;\r\n}\r\n.nav-link{\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  color: #E50914;\r\n}\r\n\r\n.focused{\r\n   /* transform: scale(1.1);  */\r\n  transition: transform 0.2s,outline 0.2s;\r\n  z-index: 3;\r\n   outline: 3px solid white; \r\n}\r\n.navbar-item:hover{\r\ntransform: scale(1.05);\r\ncursor: pointer;\r\n}\r\n.navbar-item{\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n}\r\n.login-btn:hover{\r\n  transform: scale(1.1);\r\n}\r\n\r\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const Navbar = exports("default", () => {
          const {
            Logout
          } = Useanalytics();
          const safe = UseSingleNav();
          const token = localStorage.getItem("auth_token");
          const navigate = useNavigate();
          const [lock, setLock] = reactExports.useState(false);
          const {
            ref,
            focusKey
          } = distExports.useFocusable({
            focusKey: "nav_key",
            onFocus: () => {
              logoutnav.focusSelf();
              ref.current.scrollIntoView({
                behaviour: "smooth",
                block: "nearest"
              });
            }
          });
          const homenav = distExports.useFocusable({
            focusKey: "home_nav",
            onEnterPress: () => handleHome(),
            onArrowPress: direction => {
              if (direction == "left" || direction == "up") {
                return false;
              } else {
                return true;
              }
            }
          });
          const movienav = distExports.useFocusable({
            focusKey: "movies_nav",
            onEnterPress: () => handleMovies(),
            onArrowPress: direction => {
              if (direction == "up") {
                return false;
              } else {
                return true;
              }
            }
          });
          const handleLogin = () => {
            safe("/signin");
            setLock(true);
          };
          const handleLogout = () => {
            SignOut();
            navigate("/");
            Logout();
            loginnav.focusSelf();
          };
          const handleKids = () => {
            token ? safe("/kids") : navigate("/signin");
          };
          const handleHome = () => {
            token ? safe("/home") : navigate("/signin");
          };
          const handleMovies = () => {
            token ? safe("/movies") : navigate("/signin");
          };
          const kidsnav = distExports.useFocusable({
            focusKey: "kids_nav",
            onEnterPress: () => handleKids(),
            onArrowPress: direction => {
              if (direction == "up") {
                return false;
              } else {
                return true;
              }
            }
          });
          const loginnav = distExports.useFocusable({
            focusKey: "login_nav",
            onEnterPress: () => {
              handleLogin();
            },
            onArrowPress: direction => {
              if (direction == "up" || direction == "right") {
                return false;
              } else {
                return true;
              }
            }
          });
          const logoutnav = distExports.useFocusable({
            focusKey: "logout_nav",
            onEnterPress: () => {
              handleLogout();
            },
            onArrowPress: direction => {
              if (direction == "up" || direction == "right") {
                return false;
              } else {
                return true;
              }
            }
          });
          reactExports.useEffect(() => {
            const timeout = setTimeout(() => {
              homenav.focusSelf();
            }, 10);
            return () => clearTimeout(timeout);
          }, [homenav.focusKey]);
          const getToken = localStorage.getItem("auth_token");
          return /* @__PURE__ */jsxRuntimeExports.jsx("nav", {
            className: "navbar",
            ref,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(distExports.FocusContext.Provider, {
              value: focusKey,
              children: [/* @__PURE__ */jsxRuntimeExports.jsxs("div", {
                className: "left-nav",
                children: [/* @__PURE__ */jsxRuntimeExports.jsx("span", {
                  className: "heading",
                  children: ".Flix"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: homenav.ref,
                  className: `navbar-item ${homenav.focused ? "focused" : ""}`,
                  onClick: handleHome,
                  children: "Home"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: movienav.ref,
                  className: `navbar-item ${movienav.focused ? "focused" : ""}`,
                  onClick: handleMovies,
                  children: "Movies"
                }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                  ref: kidsnav.ref,
                  className: `navbar-item ${kidsnav.focused ? "focused" : ""}`,
                  onClick: handleKids,
                  children: "Kids"
                })]
              }), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "right-nav",
                children: !getToken ? /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  ref: loginnav.ref,
                  className: `login-btn ${loginnav.focused ? "focused" : ""}`,
                  onClick: handleLogin,
                  disabled: lock,
                  children: "Log in"
                }, loginnav.focusKey) : /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                  ref: logoutnav.ref,
                  className: `login-btn ${logoutnav.focused ? "focused" : ""}`,
                  onClick: handleLogout,
                  children: "Log out"
                }, logoutnav.focusKey)
              })]
            })
          });
        });
      }
    };
  });
})();
