/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useRef } from "react";
import Useanalytics from "../Hooks/Useanalytics";
import "../Styles/ListMovies.css"
interface CardProps {
  video: any;
  index: number;
   rank: number;
  isTop10: boolean;
showRank?:boolean;
  onEnter: (id: string) => void;
  onFocusKeyReady: (key: string) => void;
  isAbsoluteFirst: boolean;
  isAbsoluteLast: boolean;
  rowTitle: string; 
}
const Card = ({
  video,
  index,
   rank,
  isTop10,
 showRank,
  onEnter,
  onFocusKeyReady,
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

  useEffect(() => {
    if (focusKey && index === 0 && onFocusKeyReady)
       onFocusKeyReady(focusKey);
  }, [focusKey, index, onFocusKeyReady]);

  const imageLink = isTop10? video?.images?.[5]?.url || video?.trailers?.[0]?.images?.[5]?.url
    : video?.images?.[7]?.url || video?.trailers?.[0]?.images?.[7]?.url;
const imageUrl=imageLink?imageLink:"/notfound.png"
  if (!imageUrl) return null;

  return (
    <FocusContext.Provider value={focusKey}>
    <div
      ref={ref}
      className={`div-horizontal ${isTop10 ?showRank? "top10-card has-rank":"top10-card no-rank" : "normal-card"} ${
        focused ? "focused" : ""
      }`}
      onClick={() => onEnter(video.contentGuid)}
    >
      {showRank && <div className="top10-rank">{rank}</div>}
      <div className="image-wrapper" ref={refer}>
        <img src={imageUrl} className="video-img" alt={video.title} loading="lazy" />
      <div className="card-title">{video.title}</div>
      </div>
    </div></FocusContext.Provider>
  );
};
export default Card;
