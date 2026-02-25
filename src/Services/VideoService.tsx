/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import "../Styles/Videoplay.css";
import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import useAnalytics from "../Hooks/Useanalytics";
import { logPlaybackError, logPlaybackSuccess } from "../Utils/Loggly";
// import { logPlaybackError, logPlaybackSuccess } from "../Utils/Logger";

interface VideoServiceProps {
  options:any;
  onReady?: (player: Player) => void;
  contentId?: string;
  contentTitle?: string;
  contentGenre?: string;

}

const VideoService = ({
  options,
  onReady,
  contentId,
  contentTitle,
  contentGenre,
}:VideoServiceProps) => {
  const { playbackStart, playbackPause, playbackEnd, playbackError } = useAnalytics();

  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  const playvideo = useFocusable({
    onEnterPress: () => togglePlay(),
    onArrowPress: (direction) => {
      if (direction === "left") skip(-10);
      else if (direction === "right") skip(10);
      return true;
    },
  });

 
  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player initialized");
        onReady && onReady(player);

        // Analytics: playback start
        if (contentId && contentTitle && contentGenre) {
          player.on("play", () => {
            playbackStart({ contentId, contentTitle, contentGenre });
            logPlaybackSuccess(contentTitle,"play")
          });

          player.on("pause", () => {
            playbackPause({ contentId, contentTitle, contentGenre });
          });

          player.on("ended", () => {
            playbackEnd({ contentId, contentTitle, contentGenre });
          });

          player.on("error", () => {
            const error = player.error();
            playbackError({
              contentId,
              contentTitle,
              errorMsg: error?.message ?? "Unknown error",
            });
            logPlaybackError(contentTitle,"play",error);
          });
        }
      }));
    } else if (playerRef.current) {
     
    const player=playerRef.current;
    if(options.autoplay!=undefined)
    player.autoplay(options.autoplay)
  if(options.src!=undefined)
    player.src(options.sources)
     
    }
  }, [options, onReady, contentId, contentTitle, contentGenre]);

 
  useEffect(() => {
    setFocus(playvideo.focusKey);
    if (!playerRef.current) return;

    if (playvideo.focused) playerRef.current.play();
    else playerRef.current.pause();
  }, [playvideo.focused]);

 
  const togglePlay = () => {
    if (!playerRef.current) return;
    if (playerRef.current.paused()) playerRef.current.play();
    else playerRef.current.pause();
  };

  
  const skip = (seconds: number) => {
    if (!playerRef.current) return;
    const current = playerRef.current.currentTime() ?? 0;
    playerRef.current.currentTime(Math.max(0, current + seconds));
  };

  
  useEffect(() => {
    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={playvideo.ref} data-vjs-player>
      <div ref={videoRef} className="video-js" />
    </div>
  );
};

export default VideoService;
