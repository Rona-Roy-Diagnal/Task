/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import "./App.css";
// import RouterPage from "./Pages/RouterPage";


import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { initanalytic } from "./Analytics/Analytics";
import { trackAppLaunch } from "./Analytics/AnalyticEvents";
import { logAppLaunch } from "./Utils/Loggly";
// import RouterPage from "./Pages/RouterPage";
import RouterPages from "./Pages/RouterPage";
// import { useNavigate } from "react-router-dom";




init({ debug: false, visualDebug: false });

const App: React.FC = () => {
  useEffect(()=>{
    initanalytic();
    trackAppLaunch();
    logAppLaunch();
  
  },[])
   
  const { ref } = useFocusable({
    trackChildren: true
  });
  return (
    <div ref={ref}>
      <FocusContext.Provider value="SN:ROOT">
       
    
     <RouterPages />
      </FocusContext.Provider>
    </div>
  );
};

export default App;
