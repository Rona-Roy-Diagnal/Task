/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect } from "react";
import "../Styles/Home.css";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";
import Navbar from "./Navbar";

const LazyComponent = React.lazy(() => import("./ListMovies"));

const Home = () => {
  const { Pageview } = Useanalytics();
  const { ref, focusKey } = useFocusable({ trackChildren: true });
  useEffect(() => {
    Pageview("Home");
  }, []);

  return (
    <div ref={ref}>
      <FocusContext.Provider value={focusKey}>
        <Navbar />

        <div className="outer-cont">
          <Suspense fallback={<div className="lazy-div">Loading...</div>}>
            <LazyComponent
              title="DRAMA"
              genre="DRAMA"
              onFirstCardFocus={(_key) => {}}
            />
            <LazyComponent
              title="TOP 10 MOVIES"
              genre="TOP-10-MOVIES"
              isTop10={true}
              onFirstCardFocus={(_key) => {}}
            />
            <LazyComponent
              title="DOCUMENTARIES"
              genre="DOCUMENTARIES"
              onFirstCardFocus={(_key) => {}}
            />
            <LazyComponent
              title="CHINESE"
              genre="CHINESE-NEW-YEAR-BINGE-FEST"
              onFirstCardFocus={(_key) => {}}
            />
          </Suspense>
        </div>
      </FocusContext.Provider>
    </div>
  );
};
export default Home;
