import React, { Suspense, useEffect, useState } from "react";
import "../Styles/Home.css";
import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";
import Navbar from "./Navbar";

const LazyComponent = React.lazy(() => import("./ListMovies"));

const Home = () => {
  const [firstRowCardFocus, setFirstRowcardFocus] = useState<string | null>(
    null,
  );
  useEffect(() => {
    if (firstRowCardFocus) {
      setFocus(firstRowCardFocus);
    }
  }, [firstRowCardFocus]);
  const { Pageview } = Useanalytics();
  const { ref, focusKey } = useFocusable();
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
              onFirstCardFocus={(key) => {
                if (!firstRowCardFocus) {
                  setFirstRowcardFocus(key);
                }
              }}
            />
            <LazyComponent
              title="TOP 10 MOVIES"
              genre="TOP-10-MOVIES"
              isTop10={true}
              showRank={true}
            />
            <LazyComponent
              title="MARVEL-SPIDERMAN"
              genre="SPIDER-VERSE"
              isTop10={true}
              showRank={false}
            />
            <LazyComponent title="DOCUMENTARIES" genre="DOCUMENTARIES" />
            <LazyComponent
              title="CHINESE"
              genre="CHINESE-NEW-YEAR-BINGE-FEST"
            />
          </Suspense>
        </div>
      </FocusContext.Provider>
    </div>
  );
};
export default Home;
