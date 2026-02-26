/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Details.css";
import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";
import { fetchContentDetails } from "../Services/ContentService";

//details of movie
const Details: React.FC = () => {
  const [details, setDetails] = useState<any>(null);
  const imagebtn = useFocusable({
    focusKey: "image_btn",
    onFocus: () => {
      imagebtn.focusSelf();
    },
    onEnterPress: () => handlePlay(),
    onArrowPress: (direction) => {
      if (direction == "up") {
        setFocus("video_btn");
      }
      return false;
    },
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const { contentSelect } = Useanalytics();
  

  const handlePlay = () => {
    navigate("/videoplay", {
      state: { details },
    });
  };
  const videoBtn = useFocusable({
    focusKey: "video_btn",
    onEnterPress: () => {
      handlePlay();
      contentSelect({
        contentId: details.ContentGuid,
        contentTitle: details.title,
        contentGenre: details.genre,
      });
    },
    onArrowPress: (direction) => {
      if (direction == "up") {
        setFocus("nav_key");
      } else if (direction == "down") {
        setFocus("image_btn");
      }
      return false;
    },
  });

  
  useEffect(() => {
    if (id == undefined) return;

    fetchContentDetails(id).then(setDetails);
    videoBtn.focusSelf();
  }, [id]);
  const detaiRef = useFocusable({
    onFocus: () => {
      videoBtn.focusSelf();
    },
  });
  if (!details) {
    return <p className="not-available"> Currently Not Available</p>;
  }

  const imageLink =
    details?.trailers?.[0]?.images?.[0]?.url || details?.images?.[0]?.url;

  const imageUrl = imageLink ? imageLink : "/notfound.png";
  if (!imageUrl) return null;

  return (
    <div ref={detaiRef.ref}>
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
            <h1 className="detail-title">{details?.title} </h1>
            <p className="overview">{details?.releaseYear}</p>

            <p className="overview">{details?.description}</p>
          </div>

          <div className="overview-btn">
            <div className="genre-div">
              <p className="overview">
                <label className="desc-label">Genre | </label>
                {details?.genre[0] + ", " + details?.genre[1]}
              </p>
            </div>
            <p className="overview">
              <label className="desc-label">Cast | </label>
              {details?.actor[0]?.personName +
                ", " +
                details?.actor[1]?.personName}
            </p>
            <p className="overview">
              <label className="desc-label">Director | </label>
              {details?.director[0]?.personName}
            </p>
            <button
              ref={videoBtn.ref}
              className={`play-btn ${videoBtn.focused ? "focused" : ""}`}
              onClick={handlePlay}
            >
              Play video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
