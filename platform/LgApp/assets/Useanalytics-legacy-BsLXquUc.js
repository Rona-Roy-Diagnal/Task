;
(function () {
  System.register(['./index-legacy-DtSjVZOm.js'], function (exports, module) {
    'use strict';

    var useLocation, reactExports, trackAppLaunch, trackLogin, trackLogout, trackPageView, trackContentSelect, trackPlayback, trackVideoPause, trackPlaybackEnd, trackPlaybackError;
    return {
      setters: [module => {
        useLocation = module.i;
        reactExports = module.r;
        trackAppLaunch = module.t;
        trackLogin = module.k;
        trackLogout = module.m;
        trackPageView = module.n;
        trackContentSelect = module.o;
        trackPlayback = module.p;
        trackVideoPause = module.q;
        trackPlaybackEnd = module.s;
        trackPlaybackError = module.v;
      }],
      execute: function () {
        const GetPageName = pathname => {
          if (pathname == "/") return "Landing Page";
          if (pathname.startsWith("/home")) return "Home";
          if (pathname.startsWith("/details")) return "Details";
          if (pathname.startsWith("/videoplay")) return "Player";
          return "Unknown";
        };
        var __defProp = Object.defineProperty;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value
        }) : obj[key] = value;
        var __spreadValues = (a, b) => {
          for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          }
          return a;
        };
        const Useanalytics = exports("U", () => {
          const location = useLocation();
          const entryPoint = GetPageName(location.pathname);
          const appLaunch = reactExports.useCallback(() => {
            trackAppLaunch();
          }, []);
          const Login = reactExports.useCallback(() => trackLogin({
            entryPoint
          }), [entryPoint]);
          const Logout = reactExports.useCallback(() => trackLogout({
            entryPoint
          }), [entryPoint]);
          const Pageview = reactExports.useCallback(pageName => {
            trackPageView({
              entryPoint,
              pageName
            });
          }, [entryPoint]);
          const contentSelect = reactExports.useCallback(props => {
            trackContentSelect(__spreadValues({
              entryPoint
            }, props));
          }, [entryPoint]);
          const playbackStart = reactExports.useCallback(props => {
            trackPlayback(__spreadValues({
              entryPoint
            }, props));
          }, [entryPoint]);
          const playbackPause = reactExports.useCallback(props => {
            trackVideoPause(__spreadValues({
              entryPoint
            }, props));
          }, [entryPoint]);
          const playbackEnd = reactExports.useCallback(props => {
            trackPlaybackEnd(__spreadValues({
              entryPoint
            }, props));
          }, [entryPoint]);
          const playbackError = reactExports.useCallback(props => {
            trackPlaybackError(props);
          }, []);
          return {
            appLaunch,
            Login,
            Logout,
            Pageview,
            playbackStart,
            playbackEnd,
            playbackError,
            playbackPause,
            contentSelect
          };
        });
      }
    };
  });
})();
