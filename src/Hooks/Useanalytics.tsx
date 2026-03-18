import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  trackAppLaunch,
  trackContentSelect,
  trackLogin,
  trackLogout,
  trackPageView,
  trackPlayback,
  trackPlaybackEnd,
  trackPlaybackError,
  trackVideoPause,
} from "../Analytics/AnalyticEvents";
import GetPageName from "../Pages/GetPageName";
//hook for calling analytic events
const Useanalytics = () => {
  const location = useLocation();
  const entryPoint = GetPageName(location.pathname);
  const appLaunch = useCallback(() => {
    trackAppLaunch();
  }, []);
  const Login = useCallback(() => trackLogin({ entryPoint }), [entryPoint]);

  const Logout = useCallback(() => trackLogout({ entryPoint }), [entryPoint]);

  const Pageview = useCallback(
    (pageName: string) => {
      trackPageView({ entryPoint, pageName });
    },
    [entryPoint],
  );

  const contentSelect = useCallback(
    (props: {
      contentId: string;
      contentTitle: string;
      contentGenre: string;
    }) => {
      trackContentSelect({ entryPoint, ...props });
    },
    [entryPoint],
  );

  const playbackStart = useCallback(
    (props: {
      contentId: string;
      contentTitle: string;
      contentGenre: string;
    }) => {
      trackPlayback({ entryPoint, ...props });
    },
    [entryPoint],
  );

  const playbackPause = useCallback(
    (props: {
      contentId: string;
      contentTitle: string;
      contentGenre: string;
    }) => {
      trackVideoPause({ entryPoint, ...props });
    },
    [entryPoint],
  );

  const playbackEnd = useCallback(
    (props: {
      contentId: string;
      contentTitle: string;
      contentGenre: string;
    }) => {
      trackPlaybackEnd({ entryPoint, ...props });
    },
    [entryPoint],
  );

  const playbackError = useCallback(
    (props: { contentId: string; contentTitle: string; errorMsg: string }) => {
      trackPlaybackError(props);
    },
    [],
  );

  return {
    appLaunch,
    Login,
    Logout,
    Pageview,
    playbackStart,
    playbackEnd,
    playbackError,
    playbackPause,
    contentSelect,
  };
};

export default Useanalytics;
