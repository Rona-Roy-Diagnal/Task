/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import "../Styles/ListMovies.css";
import { useNavigate } from "react-router-dom";

// import UsePagination from "../Hooks/UsePagination";
import {
  useFocusable,
  FocusContext,
  setFocus,
} from "@noriginmedia/norigin-spatial-navigation";


import Card from "./Card";
import { fetchContentByGenre } from "../Services/ContentService";
import { logApiError } from "../Utils/Loggly";

// import type { ContentItem } from "./Banner";

interface Props {
  genre: string;
  title: string;
  isTop10?: boolean;
  isNot10?: boolean;
  excludeId?:string,
  onFirstCardFocus?: (key: string) => void;
  //  onDataLoaded?:(data:ContentItem[])=>void
}


// const FocusableArrow = ({ children, onClick, className, focusKey, arrowButton}: any) => {

//   const { ref, focused } = useFocusable({
//     focusKey,
//     onEnterPress: onClick,
//     onArrowPress: (direction) => {
//       if (direction === 'right' && arrowButton === 'right'){
    
//         return false;
//       }
//       if (direction === 'right' && arrowButton === 'left'){
     
    
//         return true;
//       }
//       if(direction === 'left' && arrowButton === 'left'){
        
//         return false;
//       }
//       if(direction === 'left' && arrowButton === 'right'){
    
//         return true;
//       }
//       return true;
//     }
//   });
//   return (
//     <button ref={ref} className={`${className} ${focused ? 'visible-arrow' : ''}`} onClick={onClick}>
//       {children}
//     </button>
//   );
// };
const ListMovies: React.FC<Props> = ({
  genre,
  title,
  isTop10 = false,
  excludeId,
  onFirstCardFocus,
  // onDataLoaded
}) => {
 
  const [videos, setVideos] = useState<any[]>([]);
  // const [contentList,setContentList]=useState<ContentItem[]>([]);

  const navigate = useNavigate();
  // const itemsPerPage = isTop10 ? 5 : 4;
  // const { page } = UsePagination(
  //   itemsPerPage,
  //   videos.length,
  // );
  // const max = Math.ceil(videos.length / itemsPerPage) - 1;
  // const visible = videos.slice( page * itemsPerPage,page * itemsPerPage + itemsPerPage
  // );

  const { ref: rowRef, focusKey: rowFocusKey} = useFocusable({
    trackChildren: true,
    onArrowPress:(direction)=>{
      if(direction=='up' && onFirstCardFocus){
          setFocus("nav_key");
         
      }
      
      return false;
    }
    
  });
  const dist=900;
  const scrollRef=useRef<HTMLDivElement>(null);
  const [scrolltoLeft,setScrolltoLeft]=useState(false);
  const [scrolltoRight,setScrolltoRight]=useState(false);
  const updateScroll=()=>{
    const elmt=scrollRef.current;
    if(!elmt)return;
    setScrolltoLeft(elmt.scrollLeft>0);
    setScrolltoRight(elmt.scrollLeft+elmt.clientWidth<elmt.scrollWidth)
  }
  const scrollLeft=()=>{
scrollRef.current?.scrollBy({left:-dist,behavior:"smooth"})
  }

  const scrollRight=()=>{
    scrollRef.current?.scrollBy({left:dist,behavior:"smooth"})
  }
  // const arrowpage = useFocusable({
  //   focusKey: "arrow_page",
  // });
useEffect(()=>{
  updateScroll()
},[videos])
  // Fetch videos
  useEffect(() => {
try{
     fetchContentByGenre(genre).then((data)=>{
      const filtered=excludeId?data.filter((item:any)=>item.contentGuid!==excludeId):data;
      setVideos(filtered) })
} catch(error:any){
  logApiError("movieList",error.config.data,error.response.data,error.response.status)
}
   

       
   
  }, [genre,excludeId]);



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
          <div tabIndex={0} className="row-wrapper" onScroll={updateScroll}>
             {/* molilthe ref={arrowpage.ref} */}
           
               
           
             {scrolltoLeft && <button className="arrow left-arrow" onClick={scrollLeft}>
                {"<"}
              </button>}
            <div className="scroll-cont" ref={scrollRef} onScroll={updateScroll}>
            {videos.map((video, index) => {

          const globalIndex =  index + 1;
              return (
                <Card
                  key={video.contentGuid}
                  video={video}
                  index={index}
                   rank={globalIndex}
                  isTop10={isTop10}
                  rowTitle={title}
                  onEnter={(id) => navigate(`/details/${id}`)}
                  onFocusKeyReady={(key) => index === 0 && onFirstCardFocus?.(key)}
                  // isFirst={index === 0}
                  // isLast={index === visible.length - 1}
                  isAbsoluteFirst={index === 0} 
                  isAbsoluteLast={index === video.length - 1}
                />
              );
            })}

            {/* {page < max && (
              <FocusableArrow 
                focusKey={`RIGHT_ARROW_${title}`} 
                className="arrow right-arrow" 
                onClick={nextPage}
                arrowButton="right"
              >
                {">"}
              </FocusableArrow>
            )} */}
           </div>
           
             {scrolltoRight &&<button className="arrow right-arrow" onClick={scrollRight}>
                {">"}
              </button>}
            
          </div>
        </FocusContext.Provider>
      </div>
    </div>
  );
};

export default ListMovies;
