;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js', './Navbar-legacy-8DnhxB_k.js', './UseSingleNav-legacy-CkbPRhX5.js', './Useanalytics-legacy-BsLXquUc.js'], function (exports, module) {
    'use strict';

    var jsxRuntimeExports, reactExports, React, __vitePreload, Navbar;
    return {
      setters: [module => {
        jsxRuntimeExports = module.j;
        reactExports = module.r;
        React = module.R;
        __vitePreload = module._;
      }, module => {
        Navbar = module.default;
      }, null, null],
      execute: function () {
        const LazyComponent = React.lazy(() => __vitePreload(() => module.import('./ListMovies-legacy-BDPiZvKL.js'), false              ? __VITE_PRELOAD__ : void 0));
        const Movies = exports("default", () => {
          return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
            children: [/* @__PURE__ */jsxRuntimeExports.jsx(Navbar, {}), /* @__PURE__ */jsxRuntimeExports.jsxs(reactExports.Suspense, {
              fallback: /* @__PURE__ */jsxRuntimeExports.jsx("div", {
                className: "lazy-div",
                children: "Loading..."
              }),
              children: [/* @__PURE__ */jsxRuntimeExports.jsx(LazyComponent, {
                title: "TOP 10 MOVIES",
                genre: "TOP-10-MOVIES",
                isTop10: true
              }), /* @__PURE__ */jsxRuntimeExports.jsx(LazyComponent, {
                title: "TOP RATED",
                genre: "KIDS-AND-FAMILY"
              })]
            })]
          });
        });
      }
    };
  });
})();
