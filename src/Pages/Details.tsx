/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Details.css";
import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";
import { fetchContentDetails } from "../Services/ContentService";




const Details: React.FC = () => {
  const [details, setDetails] = useState<any>(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const { contentSelect } = Useanalytics();

  const handlePlay=()=>{
    navigate("/videoplay",{
          state:{details}
        })
  }
  const videoBtn = useFocusable({
    focusKey: "video_btn",
    onEnterPress: () => {
       handlePlay(); 
      contentSelect({
        contentId:details.ContentGuid,
        contentTitle:details.title,
        contentGenre:details.genre


      })
    
    },
    onArrowPress:(direction)=>{
      if(direction=='up'){
        setFocus("nav_key")
    
      }
      else if(direction=='down'){
        setFocus("rowFocusKey")
      }
      return false;
    }
  });
  // const listMovie=useFocusable({focusable:true});
  useEffect(() => {
    if (id == undefined) return;
 
    fetchContentDetails(id).then(setDetails);
    videoBtn.focusSelf();
  }, [id]);
// const nav=useFocusable();
  if (!details) {
    return <p className="not-available"> Currently Not Available</p>;
  }
  const imageUrl =
    details?.trailers?.[0]?.images?.[0]?.url || details?.images?.[0]?.url;
//  const lowGenre=details?.genre[0]?.toLowerCase();
  if (!imageUrl) return null;

  return (
      <>
    <div className="details" >
      <div className="left-content">
        <img
          className="movie-img"
          src={imageUrl}
          loading="lazy"
          alt={details.title}
        ></img>
      </div>
      <div className="right-content">
        <div className="title-rating">
          <h1 className="detail-title">{details.title} </h1>
          <p className="overview">{details.releaseYear}</p>

          <p className="overview">{details.description}</p>
        </div>

        <div className="overview-btn">
          <div className="genre-div">
            <p className="overview">
              <label className="desc-label">Genre | </label>
              {details.genre[0] + ", " + details.genre[1]}
            </p>
          </div>
          <p className="overview">
            <label className="desc-label">Cast | </label>
            {details.actor[0].personName + ", " + details.actor[1].personName}
          </p>
          <p className="overview">
            <label className="desc-label">Director | </label>
            {details.director[0].personName}
          </p>
          <button
            ref={videoBtn.ref}
            className={`play-btn ${videoBtn.focused ? "focused" : ""}`} onClick={handlePlay}
          >
            play video
          </button>
        </div>
      </div>
      </div>
      {/* <div ref={listMovie.ref}>

      
       <ListMovies title={`More From ${details.genre[0]}`} genre={lowGenre} excludeId={details.contentGuid} onFirstCardFocus={(_key)=>{
          
         }}/></div> */}
         </>
    
      
    
  );
};
   
export default Details;






/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "../Styles/Details.css";
// import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
// import Useanalytics from "../Hooks/Useanalytics";
// import { fetchContentDetails } from "../Services/ContentService";
// import ListMovies from "./ListMovies";
// import Navbar from "./Navbar";

// const Details: React.FC = () => {
//   const [details, setDetails] = useState<any>(null);
// const {ref,focusKey}=useFocusable({
 
  
// });
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { contentSelect } = Useanalytics();
//   const videoBtn = useFocusable({
//     focusKey: "video_btn",
//     onEnterPress: () => {
//       handlePlay();
      
//      },
    
// focusable:true
//   });

//   const listMovie=useFocusable({focusable:true});
// const handlePlay=()=>{
//    navigate("/videoplay",{
//           state:{details}
//         }) 
//         contentSelect({
//         contentId:details.ContentGuid,
//         contentTitle:details.title,
//         contentGenre:details.genre
//       })
// }
//   useEffect(() => {
//     if (id == undefined) return;
   
//     fetchContentDetails(id).then(setDetails);
    
//   }, [id,videoBtn]);

//   if (!details) {
//     return <p className="not-available"> Currently Not Available</p>;
//   }
//   const imageUrl =
//     details?.trailers?.[0]?.images?.[0]?.url || details?.images?.[0]?.url;
//  const lowGenre=details?.genre[0]?.toLowerCase();
//   if (!imageUrl) return null;

//   return (
//     <>
//       <Navbar/> 
      
      
//     <div className="details" ref={ref}  >
     
//       <div className="left-content" >
//          {/* style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${imageUrl})`}} */}
//         <img
//           className="movie-img"
//           src={imageUrl}
//           loading="lazy"
//           alt={details.title}
//         ></img>
        
     
//       </div>
//      <div className="right-content">
//         <div className="title-rating">
//           <h1 className="detail-title">{details.title} </h1>
//           <p className="overview">{details.releaseYear}</p>

//           <p className="overview">{details.description}</p>
//         </div>

//         <div className="overview-btn">
//           <div className="genre-div">
//             <p className="overview">
//               <label className="desc-label">Genre | </label>
//               {details.genre[0] || details.genre[1]}
//             </p>
//           </div>
//           <p className="overview">
//             <label className="desc-label">Cast | </label>
//             {details.actor[0].personName + ", " + details.actor[1].personName}
//           </p>
//           <p className="overview">
//             <label className="desc-label">Director | </label>
//             {details.director[0].personName}
//           </p>
//           <button
//             ref={videoBtn.ref} 
//             className={`play-btn ${videoBtn.focused ? "focused" : ""}`} onClick={handlePlay}
//           >
//             play video
//           </button>
//         </div>
//       </div> 
        
//     </div>
//     <div ref={listMovie.ref}>
   
//      <ListMovies title={`More From ${details.genre[0]}`} genre={lowGenre} excludeId={details.contentGuid} />
//     </div>
  
//     </>
//   );
// };

// export default Details;
