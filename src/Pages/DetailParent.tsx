//details page
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";

import Navbar from "./Navbar";
import Details from "./Details";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchContentDetails } from "../Services/ContentService";

const LazyComponent = React.lazy(() => import("./ListMovies"));
const DetailParent = () => {
  const { id } = useParams();
  const { ref, focusKey } = useFocusable({
    trackChildren: true,
    isFocusBoundary: true,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [details, setDetails] = useState<any>([]);
   const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (id == undefined) return;
    const load = async () => {
      const data = await fetchContentDetails(id);
      setDetails(data);
      setLoading(false);
    };

    load();
  }, [id]);
if(loading) return <div></div>
  return (
    <div ref={ref}>
      <FocusContext.Provider value={focusKey}>
        <Navbar />
        <Details />
        <LazyComponent title="More Like This" genre={details.genre?.[0]} excludeId={id} />
      </FocusContext.Provider>
    </div>
  );
};

export default DetailParent;
