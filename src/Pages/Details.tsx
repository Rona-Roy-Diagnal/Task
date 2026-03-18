/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/Details.css";
import { FocusContext, setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import Useanalytics from "../Hooks/Useanalytics";
import { fetchContentDetails } from "../Services/ContentService";

//details of movie
const Details: React.FC = () => {
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();
  const navigate = useNavigate();
  const { contentSelect } = Useanalytics();
  const token = localStorage.getItem("auth_token");

  const handlePlay = () => {
    token ? navigate("/videoplay") : navigate("/signin");
  };
  sessionStorage.setItem("details", JSON.stringify({ details }));
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
        return true;
      }
      return false;
    },
  });
  const addDefaultImg = (ev: any) => {
    ev.target.src = "/notfound.png";
  };

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
    videoBtn.focusSelf();
  }, [id]);

  const detaiRef = useFocusable({
    onFocus: () => {
      videoBtn.focusSelf();
    },
  });
  if (loading) {
    return <div className="loading"></div>;
  }
  if (!details) {
    return <p className="not-available"> Currently Not Available</p>;
  }

  const imageUrl = details?.trailers?.[0]?.images?.[0]?.url || details?.images?.[0]?.url;

  const posterUrl = details?.trailers?.[0]?.images?.[1]?.url || details?.images?.[1]?.url;

  if (!imageUrl) return null;

  return (
    <div ref={detaiRef.ref}>
      <FocusContext.Provider value={detaiRef.focusKey}>
        <div className="details" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="details-overlay">
            <div className="left-content">
              <img className="poster-img" src={posterUrl} loading="lazy" alt={details.title} onError={addDefaultImg}></img>
            </div>
            <div className="right-content">
              <div className="title-rating">
                <h1 className="detail-title">{details?.title} </h1>
                <p className="overview-year">{details?.releaseYear}</p>

                <p className="overview-des">{details?.description}</p>
              </div>

              <div className="overview-btn">
                <div className="genre-div">
                  <p className="overview">
                    {details.genre[0] ? <label className="desc-label">Genre | </label> : ""}
                    {details.genre[1] ? details?.genre[0] + ", " + details?.genre[1] : details.genre[0]}
                  </p>
                </div>
                {details.actor[1] ? (
                  <p className="overview">
                    <label className="desc-label">Cast | </label>
                    {details?.actor[0]?.personName + ", " + details?.actor[1]?.personName}
                  </p>
                ) : (
                  ""
                )}
                <p className="overview">
                  {details?.director[0]?.personName && <label className="desc-label">Director | </label>}
                  {details?.director[0]?.personName}
                </p>
                <button ref={videoBtn.ref} className={`play-btn ${videoBtn.focused ? "focused" : ""}`} onClick={handlePlay}>
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </FocusContext.Provider>
    </div>
  );
};

export default Details;
