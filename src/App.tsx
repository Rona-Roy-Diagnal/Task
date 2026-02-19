import React from "react";
import "./App.css";
import RouterPage from "./Pages/RouterPage";

//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";
import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
// import VideoPlay from "./Pages/VideoPlay";
init({ debug: false, visualDebug: false });
const App: React.FC = () => {
  console.log("app.tsx");
  mixpanel.init("4fe9d90fe96b794d30b85b6237bd0b86", {
    autocapture: true,
    record_sessions_percent: 100,
  });
  const { ref} = useFocusable({ trackChildren: true });

  return (
    <FocusContext.Provider value="SN:ROOT">
      <div ref={ref}>
        <RouterPage />
      </div>
    </FocusContext.Provider>
  );
};

export default App;
