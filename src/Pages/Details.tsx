/* eslint-disable react-hooks/refs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Details.css";
import axios from "axios";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import mixpanel from "mixpanel-browser";

const Details: React.FC = () => {
  const [details, setDetails] = useState<any>(null);

  const { id } = useParams();
  const token=localStorage.getItem("auth_token")
  const navigate = useNavigate();
  const videoBtn = useFocusable({
    focusKey: "video_btn",
    onEnterPress: () => 
      token?navigate("/videoplay"):alert("login to watch video")
      
  });
    mixpanel.track('VideoPlay', {
  
  "entry_point" : "home",
    "user_id" : "id",
    "user_type" : "guest, registered",
    "content_id" : "Content ID",
    "content_type" : "series, movie, trailer",
    "content_title" : "Content Title",
    
  
})
  useEffect(() => {
    if (id == undefined) return;
    const url = `https://api-entertainment-v1.enlight.diagnal.com/content/${id}?type=movie&platform=web&schema=1.0.2&region=IN&maxParentalRatings=UA&language=en-US`;

    //get movie details and set
    axios.get(url).then((res) => setDetails(res.data));
    videoBtn.focusSelf();
  }, [id]);

  if (!details) {
    return <p className="not-available"> Currently Not Available</p>;
  }
  const imageUrl =
    details?.trailers?.[0]?.images?.[0]?.url || details?.images?.[0]?.url;

  if (!imageUrl) return null;
  return (
    <div className="details">
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
            className={`play-btn ${videoBtn.focused ? "focused" : ""}`}
          >
            play video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
