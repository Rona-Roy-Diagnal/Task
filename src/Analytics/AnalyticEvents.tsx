/* eslint-disable @typescript-eslint/no-explicit-any */
import { track } from "./Analytics";
import { CommonAttributes } from "./AnalyticsContext";

//app launch
export const trackAppLaunch = () => {
  track("_app.launched");
};
//login event
export const trackLogin = ({ entryPoint }: { entryPoint: string }) => {
  track("_user.login", {
    ...CommonAttributes(entryPoint),
  });
};
//logout event
export const trackLogout = ({ entryPoint }: { entryPoint: string }) => {
  track("_user.logout", {
    ...CommonAttributes(entryPoint),
  });
};
//page view event
export const trackPageView = ({
  entryPoint,
  pageName,
}: {
  entryPoint: string;
  pageName: string;
}) => {
  track("_page.view", { ...CommonAttributes(entryPoint), pageName });
};
//content select event
export const trackContentSelect = ({
  entryPoint,
  contentId,
  contentTitle,
  contentGenre,
}: any) => {
  track("_content.select", {
    ...CommonAttributes(entryPoint),
    contentId,
    contentTitle,
    contentGenre,
  });
};
//playback event
export const trackPlayback = ({
  entryPoint,
  contentId,
  contentTitle,
  contentGenre,
}: any) => {
  track("_content.playback", {
    ...CommonAttributes(entryPoint),
    contentId,
    contentTitle,
    contentGenre,
  });
};
//video pause event
export const trackVideoPause = ({
  entryPoint,
  contentId,
  contentTitle,
  contentGenre,
}: any) => {
  track("_content.playback.paused", {
    ...CommonAttributes(entryPoint),
    contentId,
    contentTitle,
    contentGenre,
  });
};

//playback end event
export const trackPlaybackEnd = ({
  entryPoint,
  contentId,
  contentTitle,
  contentGenre,
}: any) => {
  track("_content.playback.end", {
    ...CommonAttributes(entryPoint),
    contentId,
    contentTitle,
    contentGenre,
  });
};

//playback error event

export const trackPlaybackError = ({
  contentId,
  contentTitle,
  errorMsg,
}: any) => {
  track("_content.playback.end", {
    contentId,
    contentTitle,
    errorMsg,
    eventAction: "error",
  });
};
