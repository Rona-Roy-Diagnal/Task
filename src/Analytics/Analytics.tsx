
import mixpanel from "mixpanel-browser";

const token = import.meta.env.VITE_MIXPANEL_TOKEN;
let initialized = false;
export const initanalytic = () => {
  if (!token || initialized) return;
  //initialize mixpanel using token
  mixpanel.init(token, {
    debug: false,
    track_pageview: false,
    persistence: "localStorage",
  });
  initialized = true;
};
export const resetAnalytics = () => {
  mixpanel.reset();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const track = (event: string, props: Record<string, any> = {}) => {
  mixpanel.track(event, {
    app: ".Flix app",
    ...props,
  });
};
