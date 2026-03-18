/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import "../Styles/ListMovies.css";
import { useNavigate } from "react-router-dom";

import {
  useFocusable,
  FocusContext,
  setFocus,
} from "@noriginmedia/norigin-spatial-navigation";


import { fetchContentByGenre } from "../Services/ContentService";
import { logApiError } from "../Utils/Loggly";
const Card= React.lazy(() => import("./Card"));
interface Props {
  genre: string;
  title: string;
  isTop10?: boolean;
  isNot10?: boolean;
  excludeId?: string;
  showRank?: boolean;
  onFirstCardFocus?: (key: string) => void;
}

const ListMovies: React.FC<Props> = ({
  genre,
  title,
  isTop10 = false,
  excludeId,
  showRank,
  onFirstCardFocus,
}) => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const { ref: rowRef, focusKey: rowFocusKey } = useFocusable({
    trackChildren: true,
    onArrowPress: (direction) => {
      if (direction == "up" && onFirstCardFocus) {
        setFocus("nav_key");
      }
      return false;
    },
  });

  const dist = 900;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolltoLeft, setScrolltoLeft] = useState(false);
  const [scrolltoRight, setScrolltoRight] = useState(false);
  const updateScroll = () => {
    const elmt = scrollRef.current;
    if (!elmt) return;
    setScrolltoLeft(elmt.scrollLeft > 0);
    setScrolltoRight(elmt.scrollLeft + elmt.clientWidth + 1 < elmt.scrollWidth);
  };
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -dist, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: dist, behavior: "smooth" });
  };

  useEffect(() => {
    updateScroll();
  }, [videos]);
  
  // Fetch videos
  useEffect(() => {
    try {
      fetchContentByGenre(genre).then((data) => {
        const filtered = excludeId
          ? data.filter((item: any) => item.contentGuid !== excludeId)
          : data;
        setVideos(filtered);
        setLoading(false);
      });
    } catch (error: any) {
      logApiError(
        "General",
        error.config.data,
        error.response.data,
        error.response.status,
      );
    }
  }, [genre, excludeId]);
if(loading)return <div></div>;
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
            {scrolltoLeft && (
              <button className="arrow left-arrow" onClick={scrollLeft}>
                {"<"}
              </button>
            )}
            <div
              className="scroll-cont"
              ref={scrollRef}
              onScroll={updateScroll}
            >
              {videos.map((video, index) => {
                const globalIndex = index + 1;
                return (
                  <Card
                    key={video.contentGuid}
                    video={video}
                    index={index}
                    rank={globalIndex}
                    isTop10={isTop10}
                    showRank={showRank}
                    rowTitle={title}
                    onEnter={(id) => navigate(`/details/${id}`)}
                    onFocusKeyReady={(key) =>
                      index === 0 && onFirstCardFocus?.(key)
                    }
                    isAbsoluteFirst={index === 0}
                    isAbsoluteLast={index === video.length - 1}
                  />
                );
              })}
            </div>

            {scrolltoRight && (
              <button className="arrow right-arrow" onClick={scrollRight}>
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
