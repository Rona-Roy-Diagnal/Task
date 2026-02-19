
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useRef } from "react";

const Card = ({
  video,
  index,
  isTop10,
  onEnter,
  onFocusKeyReady,
}: {
  video: any;
  index: number;
  isTop10: boolean;
  onEnter: (id: string) => void;
  onFocusKeyReady: (key: string) => void;
}) => {
  const { ref, focused, focusKey } = useFocusable({
    onEnterPress: () => onEnter(video.contentGuid),
    onFocus:()=>ref.current.scrollIntoView({
      behaviour:'smooth',
      block:'start',
      inline:'start'
    })
  });

const refer = useRef<HTMLHeadingElement>(null);
// const divWidth=ref.current?ref.current.offsetWidth:0;
// const imgdivWidth=refer.current?refer.current.offsetWidth:0;
  useEffect(() => {
    if (focusKey && index === 0 && onFocusKeyReady) onFocusKeyReady(focusKey);
  }, [focusKey, index, onFocusKeyReady]);

  const imageUrl = isTop10? video?.images?.[0]?.url || video?.trailers?.[0]?.images?.[0]?.url: video?.images?.[2]?.url || video?.trailers?.[0]?.images?.[2]?.url;

  if (!imageUrl) return null;

  return (
    
    <div
      ref={ref} 
      
      className={`div-horizontal ${isTop10 ? "top10-card" : "normal-card"} ${
        focused ? "focused" : ""
      }`}
      onClick={() => onEnter(video.contentGuid)}>
      {isTop10 && <div className="top10-rank">{index + 1}</div>}
      <div className="image-wrapper" ref={refer}>
        <img src={imageUrl} className="video-img" alt={video.title} />
       
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