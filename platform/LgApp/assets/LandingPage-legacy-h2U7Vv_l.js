;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js'], function (exports, module) {
    'use strict';

    var useNavigate, distExports, reactExports, jsxRuntimeExports;
    return {
      setters: [module => {
        useNavigate = module.u;
        distExports = module.d;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".cover {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n  /* background-position: center; starting position of img with container  */\r\n  /* background-image:\r\n    linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),\r\n    url(\"netflix.jpg\");\r\n  background-size: cover; */\r\n}\r\n.welcome {\r\n  background-color: transparent;\r\n}\r\n.welcome h2,\r\np {\r\n  color: white;\r\n  background-color: transparent;\r\n\r\n  margin-bottom: 10px;\r\n}\r\n.welcome h1{\r\n  color: #E50914;\r\n  font-size: 90px;\r\n  background: transparent;\r\n}\r\n.signup {\r\n  border-radius: 3px;\r\n  background-color: #e50914;\r\n  border: none;\r\n  font-weight: bold;\r\n  margin-bottom: 30px;\r\n  height: 30px;\r\n  width: 180px;\r\n  color: white;\r\n}\r\n.focused{\r\n  /* transform: scale(1.1); */\r\n  transition: transform 0.2s,outline 0.2s;\r\n  z-index: 3;\r\n  outline: 3px solid white;\r\n}\r\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const LandingPage = exports("default", () => {
          const navigate = useNavigate();
          const token = localStorage.getItem("auth_token");
          const startBtn = distExports.useFocusable({
            focusKey: "start_btn",
            onEnterPress: () => handleLanding()
          });
          reactExports.useEffect(() => {
            startBtn.focusSelf();
          }, []);
          const handleLanding = () => {
            token ? navigate("/home") : navigate("/signin");
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: "cover",
            style: {
              backgroundImage: " linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url('/netflix.jpg')"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: "welcome",
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("h1", {
                children: ".FLIX"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("h2", {
                children: "SEE WHAT'S NEXT."
              }), /* @__PURE__ */jsxRuntimeExports.jsx("p", {
                children: "WATCH ANYWHERE. CANCEL ANYTIME"
              }), /* @__PURE__ */jsxRuntimeExports.jsx("button", {
                ref: startBtn.ref,
                className: `start ${startBtn.focused ? "focused" : ""}`,
                onClick: handleLanding,
                children: "Get Started"
              })]
            })
          });
        });
      }
    };
  });
})();
