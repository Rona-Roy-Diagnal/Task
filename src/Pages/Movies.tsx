// movies page

import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
const LazyComponent = React.lazy(() => import("./ListMovies"));
const Movies = () => {
  const [firstRowCardFocus, setFirstRowcardFocus] = useState<string | null>(
    null,
  );
  useEffect(() => {
    if (firstRowCardFocus) {
      setFocus(firstRowCardFocus);
    }
  }, [firstRowCardFocus]);
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="lazy-div">Loading...</div>}>
        <LazyComponent
          title="TOP 10 MOVIES"
          genre="TOP-10-MOVIES"
          isTop10={true}
          showRank={true}
          onFirstCardFocus={(key) => {
            if (!firstRowCardFocus) {
              setFirstRowcardFocus(key);
            }
          }}
        />
        <LazyComponent title="TOP RATED" genre="KIDS-AND-FAMILY" />
      </Suspense>
    </div>
  );
};

export default Movies;
