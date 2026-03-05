/* eslint-disable @typescript-eslint/no-unused-expressions */
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
import { setFirstFocusable } from "../Utils/FocusStore";

//details of movie
const Details: React.FC = () => {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();
  const navigate = useNavigate();
  const { contentSelect } = Useanalytics();
  const token = localStorage.getItem("auth_token");

  const handlePlay = () => {
    token
      ? navigate("/videoplay", {
          state: { details },
        })
      : navigate("/signin");
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
      }
      return false;
    },
  });

  useEffect(() => {
    if (id == undefined) return;
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchContentDetails(id);
        setDetails(data);
      } catch {
        setDetails(null);
      } finally {
        setLoading(false);
      }
    };

    load();
    setFirstFocusable("video_btn");
    //  videoBtn.ref.current?.focus();
  }, [id]);

  const detaiRef = useFocusable({
    onFocus: () => {
      videoBtn.focusSelf();
    },
  });
  if (loading) {
    return <div className="loading">Loading ...</div>;
  }
  if (!details) {
    return <p className="not-available"> Currently Not Available</p>;
  }

  const imageLink =
    details?.trailers?.[0]?.images?.[0]?.url || details?.images?.[0]?.url;

  const imageUrl = imageLink ? imageLink : "/notfound.png";
  const posterLink =
    details?.trailers?.[0]?.images?.[1]?.url || details?.images?.[1]?.url;
  const posterUrl = posterLink ? posterLink : "/notfound.png";
  if (!imageUrl) return null;

  return (
    <div ref={detaiRef.ref}>
      <div className="details" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="details-overlay">
          <div className="left-content">
            <img
              className="poster-img"
              src={posterUrl}
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
                  {details.genre[1]
                    ? details?.genre[0] + ", " + details?.genre[1]
                    : details.genre[0]}
                </p>
              </div>
              {details.actor[1] ? (
                <p className="overview">
                  <label className="desc-label">Cast | </label>
                  {details?.actor[0]?.personName +
                    ", " +
                    details?.actor[1]?.personName}
                </p>
              ) : (
                ""
              )}
              <p className="overview">
                {details?.director[0]?.personName && (
                  <label className="desc-label">Director | </label>
                )}
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
    </div>
  );
};

export default Details;
