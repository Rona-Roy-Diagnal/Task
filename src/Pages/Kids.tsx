import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
const LazyComponent = React.lazy(() => import("./ListMovies"));
const Kids = () => {
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
          title="MARVEL : SPIDERMAN"
          genre="fantasy"
          isTop10={true}
          showRank={false}
          onFirstCardFocus={(key) => {
            if (!firstRowCardFocus) {
              setFirstRowcardFocus(key);
            }
          }}
        />
        <LazyComponent title="Kids and Family" genre="Kids%20and%20Family"/>
      </Suspense>
    </div>
  );
};

export default Kids;
