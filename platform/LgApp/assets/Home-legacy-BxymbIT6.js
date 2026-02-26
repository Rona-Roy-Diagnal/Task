;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js', './Useanalytics-legacy-BsLXquUc.js', './Navbar-legacy-8DnhxB_k.js', './UseSingleNav-legacy-CkbPRhX5.js'], function (exports, module) {
    'use strict';

    var distExports, reactExports, jsxRuntimeExports, React, __vitePreload, Useanalytics, Navbar;
    return {
      setters: [module => {
        distExports = module.d;
        reactExports = module.r;
        jsxRuntimeExports = module.j;
        React = module.R;
        __vitePreload = module._;
      }, module => {
        Useanalytics = module.U;
      }, module => {
        Navbar = module.default;
      }, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\r\n.outer-cont {\r\n  width: 100%;\r\n  min-height: 80vh;\r\n  background-color: #221f1f; \r\n}\r\n.home-div {\r\n  position: relative;\r\n  width: 100%;\r\n  aspect-ratio: 16/9;\r\n  height: auto;\r\n\r\n  opacity: 0.5;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.lazy-div{\r\n  font-weight: bold;\r\n  font-size: 80px;\r\n  color: white;\r\n}\r\n.content {\r\n  max-width: 600px;\r\n  padding: 60px;\r\n  color: black;\r\n\r\n  background-color: transparent;\r\n}\r\n\r\n.content h1 {\r\n  font-size: 3.5rem;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n  background-color: transparent;\r\n}\r\n\r\n.content h2 {\r\n  font-weight: bold;\r\n\r\n  font-size: 1.1rem;\r\n\r\n  line-height: 1.5;\r\n  color: black;\r\n  margin-top: 20px;\r\n  background-color: transparent;\r\n}\r\n\r\n.btns {\r\n  margin-top: 20px;\r\n  background-color: transparent;\r\n}\r\n\r\n.btns button {\r\n  padding: 12px 28px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  background-color: #e50914;\r\n  color: #000;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n/* \r\n.btns button:hover {\r\n  background-color: #e6e6e6;\r\n} */\r\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const LazyComponent = React.lazy(() => __vitePreload(() => module.import('./ListMovies-legacy-BDPiZvKL.js'), false              ? __VITE_PRELOAD__ : void 0));
        const Home = exports("default", () => {
          const {
            Pageview
          } = Useanalytics();
          const {
            ref,
            focusKey
          } = distExports.useFocusable({
            trackChildren: true
          });
          reactExports.useEffect(() => {
            Pageview("Home");
          }, []);
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            ref,
            children: /* @__PURE__ */jsxRuntimeExports.jsxs(distExports.FocusContext.Provider, {
              value: focusKey,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(Navbar, {}), /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "outer-cont",
                children: /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Suspense, {
                  fallback: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                    className: "lazy-div",
                    children: "Loading..."
                  }),
                  children: [/* @__PURE__ */jsxRuntimeExports.jsx(LazyComponent, {
                    title: "DRAMA",
                    genre: "DRAMA",
                    onFirstCardFocus: _key => {}
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LazyComponent, {
                    title: "TOP 10 MOVIES",
                    genre: "TOP-10-MOVIES",
                    isTop10: true,
                    onFirstCardFocus: _key => {}
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LazyComponent, {
                    title: "DOCUMENTARIES",
                    genre: "DOCUMENTARIES",
                    onFirstCardFocus: _key => {}
                  }), /* @__PURE__ */jsxRuntimeExports.jsx(LazyComponent, {
                    title: "CHINESE",
                    genre: "CHINESE-NEW-YEAR-BINGE-FEST",
                    onFirstCardFocus: _key => {}
                  })]
                })
              })]
            })
          });
        });
      }
    };
  });
})();
