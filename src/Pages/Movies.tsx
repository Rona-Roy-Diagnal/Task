
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
      <Suspense fallback={<div className="lazy-div"></div>}>
        <LazyComponent
          title="Action"
          genre="action"
        
          onFirstCardFocus={(key) => {
            if (!firstRowCardFocus) {
              setFirstRowcardFocus(key);
            }
          }}
        />
        <LazyComponent title="Romance" genre="romance" />
         <LazyComponent
                title="Marvel - Spiderman"
                genre="fantasy"
                isTop10={true}
                showRank={false}
              />
      </Suspense>
    </div>
  );
};

export default Movies;
