//home page : page after login
import React, { Suspense, useEffect, useState } from "react";
import "../Styles/Home.css";
import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";
import Navbar from "./Navbar";
import Banner from "./Banner";

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
<Banner/>
        <div className="outer-cont">
          <Suspense fallback={<div className="lazy-div"></div>}>
            {/* <LazyComponent
              title="Top 10 Movies"
              genre="sci-fi"
              isTop10={true}
              showRank={true}
              onFirstCardFocus={(key) => {
                if (!firstRowCardFocus) {
                  setFirstRowcardFocus(key);
                }
              }}
            /> */}
            <LazyComponent title="Drama" genre="DRAMA"  onFirstCardFocus={(key) => {
                if (!firstRowCardFocus) {
                  setFirstRowcardFocus(key);
                }
              }}/>

            <LazyComponent title="Featured Originals" genre="documentary" />
            {/* <div className="bg-img-div"> */}
              {/* <img className="spider-img" src="/Spider-bg-desktop_6197.jpg" alt="marvel"/> */}
              {/* <div className="rails-bg"  style={{backgroundImage:"url('/Spider-bg-desktop_6197.jpg')",height:"100%",width:"100%"}}> */}
              <LazyComponent
                title="Marvel - Spiderman"
                genre="fantasy"
                isTop10={true}
                showRank={false}
              />
             
            {/* </div>
              </div> */}
            <LazyComponent
              title="Romance"
              genre="romance"
            />
            <LazyComponent title="Kids and Family" genre="Kids%20and%20Family" />
          </Suspense>
        </div>
      </FocusContext.Provider>
    </div>
  );
};
export default Home;
