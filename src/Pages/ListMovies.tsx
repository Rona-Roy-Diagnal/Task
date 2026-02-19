/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "../Styles/ListMovies.css";
import { useNavigate } from "react-router-dom";

import UsePagination from "../Hooks/UsePagination";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import Card from "./Card";
import axios from "axios";

interface Props {
  genre: string;
  title: string;
  isTop10?: boolean;
  isNot10?: boolean;
  onFirstCardFocus?: (key: string) => void;
}

// const PopUpDetail=({id,video,title}:{id:number,video:any,title:string})=>{
//   return(
//     <div key={id} className="popup">
//     <h3>{title}</h3>
//     <p>{video.description}</p>
//     </div>
//   )
// }
const ListMovies: React.FC<Props> = ({
  genre,
  title,
  isTop10 = false,
  onFirstCardFocus,
}) => {
  const [videos, setVideos] = useState<any[]>([]);

  const navigate = useNavigate();
  const itemsPerPage = isTop10 ? 5 : 4;
  const { page, nextPage, prevPage } = UsePagination(
    itemsPerPage,
    videos.length,
  );
  const max = Math.ceil(videos.length / itemsPerPage) - 1;
  const visible = videos.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  const { ref: rowRef, focusKey: rowFocusKey } = useFocusable({
    trackChildren: true,
  });

  const arrowpage = useFocusable({
    focusKey: "arrow_page",
  });

  // Fetch videos
  useEffect(() => {
    axios.get(
        `https://api-entertainment-v1.enlight.diagnal.com/content/filters/${genre}?origin=enhance&origin=vcms&source=enhance&region=IN&maxParentalRatings=UA&language=en-US&platform=web`,
      )
      .then((res) => setVideos(res.data?.content || []))
      
      .catch((error) => console.error(error));
  }, [genre]);

  const handleVideo = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="list-container">
      <div className="layout-header">
        <h2>{title}</h2>
      </div>

      <div
        ref={rowRef}
        className={`layout-body ${isTop10 ? "top10-row" : "normal-row"}`}
      >
        <FocusContext.Provider value={rowFocusKey}>
          <div tabIndex={0} className="row-wrapper" ref={arrowpage.ref}>
            {page > 0 && (
              <button className="arrow left-arrow" onClick={prevPage}>
                {"<"}
              </button>
            )}

            {visible.map((video, index) => (
              <>
                <Card
                  key={video.contentGuid}
                  video={video}
                  index={index}
                  isTop10={isTop10}
                  onEnter={handleVideo}
                  onFocusKeyReady={(key) => {
                    if (index == 0 && onFirstCardFocus) onFirstCardFocus(key);
                  }}
                />

                {/*         
                 <PopUpDetail  id={video.contentGuid}
              title={video.title}
              video={video}/>
            */}
              </>
            ))}

            {page < max && (
              <button className="arrow right-arrow" onClick={nextPage}>
                {">"}
              </button>
            )}
          </div>
        </FocusContext.Provider>
      </div>
    </div>
  );
};

export default ListMovies;
