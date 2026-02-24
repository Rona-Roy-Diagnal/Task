/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useRef } from "react";
import Useanalytics from "../Hooks/Useanalytics";
import "../Styles/ListMovies.css"
interface CardProps {
  video: any;
  index: number;
   rank: number;
  isTop10: boolean;

  onEnter: (id: string) => void;
  onFocusKeyReady: (key: string) => void;
  // isFirst: boolean;
  // isLast: boolean;
  isAbsoluteFirst: boolean;
  isAbsoluteLast: boolean;
  rowTitle: string; 
}
const Card = ({
  video,
  index,
   rank,
  isTop10,
 
  onEnter,
  onFocusKeyReady,
  // isFirst,
  // isLast,
  isAbsoluteFirst,
  isAbsoluteLast,
  
}: CardProps) => {
  const {contentSelect}=Useanalytics();
  const { ref, focused, focusKey } = useFocusable({
    onEnterPress: () => onEnter(video.contentGuid),

    onArrowPress: (direction) => {
      if (direction === "left" &&isAbsoluteFirst) {
        return false; 
      }
      if (direction === "right" &&isAbsoluteLast) {
        return false; 
      }
     
      return true;
    },
    onFocus: () =>{
      ref.current.scrollIntoView({
        behaviour: "smooth",
        block: "nearest",
        inline: "center",
      }),
      contentSelect({
        contentId:video.ContentGuid,
        contentTitle:video.title,
        contentGenre:video.genre


      })
    }
  });

  const refer = useRef<HTMLHeadingElement>(null);
  // const divWidth=ref.current?ref.current.offsetWidth:0;
  // const imgdivWidth=refer.current?refer.current.offsetWidth:0;
  useEffect(() => {
    if (focusKey && index === 0 && onFocusKeyReady)
       onFocusKeyReady(focusKey);
  }, [focusKey, index, onFocusKeyReady]);

  const imageUrl = isTop10? video?.images?.[5]?.url || video?.trailers?.[0]?.images?.[5]?.url
    : video?.images?.[7]?.url || video?.trailers?.[0]?.images?.[7]?.url;

  if (!imageUrl) return null;

  return (
    <div
      ref={ref}
      className={`div-horizontal ${isTop10 ? "top10-card" : "normal-card"} ${
        focused ? "focused" : ""
      }`}
      onClick={() => onEnter(video.contentGuid)}
    >
      {isTop10 && <div className="top10-rank">{rank}</div>}
      <div className="image-wrapper" ref={refer}>
        <img src={imageUrl} className="video-img" alt={video.title} loading="lazy" />
      </div>

      {/* <div className='popup'> 
          <h4>{video.title}</h4>
          <p>{video.overview}</p>
          <button>play</button>
        </div> */}
    </div>
  );
};
export default Card;
