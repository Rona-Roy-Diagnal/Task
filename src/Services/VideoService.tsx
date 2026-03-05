/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import "../Styles/Videoplay.css";
import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import useAnalytics from "../Hooks/Useanalytics";
import { logPlaybackError, logPlaybackSuccess } from "../Utils/Loggly";
// import { FaPlay } from "react-icons/fa6";
// import { FaPause } from "react-icons/fa";
interface VideoServiceProps {
  options: any;
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
}: VideoServiceProps) => {
  const { playbackStart, playbackPause, playbackEnd, playbackError } =
    useAnalytics();

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
            logPlaybackSuccess(contentTitle, "play");
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
            console.log(error?.code);
            logPlaybackError(contentTitle, "play", error);
          });
        }
      }));
    } else if (playerRef.current) {
      const player = playerRef.current;
      if (options.autoplay != undefined) player.autoplay(options.autoplay);
      if (options.src != undefined) player.src(options.sources);
    }
  }, [options, onReady, contentId, contentTitle, contentGenre]);

  useEffect(() => {
    setFocus(playvideo.focusKey);
    if (!playerRef.current) return;

    if (playvideo.focused) {
      const playPromise = playerRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
            // playerRef.current?.pause();
          })
          .catch(() => {
            // Playback failed or was interrupted (e.g., by a subsequent pause call)
            console.error("Playback interrupted");
          });
      }
    } else playerRef.current.pause();
  }, [playvideo.focused]);

  //play or pause
  const togglePlay = () => {
    if (!playerRef.current) return;
    if (playerRef.current.paused()) playerRef.current.play();
    else playerRef.current.pause();
  };
  //skip video

  const skip = (seconds: number) => {
    if (!playerRef.current) return;
    const current = playerRef.current.currentTime() ?? 0;
    playerRef.current.currentTime(Math.max(0, current + seconds));
  };
//   window.onload = function () {
//     // Video
//     let video:any = document.getElementById("video");

//     // Buttons
//     let playButton: HTMLElement | null = document.getElementById("play-pause");
//     // let muteButton = document.getElementById("mute");
//     // let fullScreenButton = document.getElementById("full-screen");

//     // Sliders
//     let seekBar:any= document.getElementById("seek-bar");
//     // let volumeBar = document.getElementById("volume-bar");

//     if (playButton == null) return;
//     playButton.addEventListener("click", function () {
//       if (video == null) return;
//       if (video.paused == true) {
//         // Play the video
//         video.play();

//         // Update the button text to 'Pause'
//         playButton.innerHTML = "Pause";
//       } else {
//         // Pause the video
//         video.pause();

//         // Update the button text to 'Play'
//         playButton.innerHTML = "Play";
//       }
//     });
  

//     // Event listener for the seek bar
//     if (seekBar == null) return;
//     seekBar.addEventListener("change", function () {
//       // Calculate the new time
//       const time = video.duration * (seekBar.value / 100);

//       // Update the video time
//       video.currentTime = time;
//     });

//     // Update the seek bar as the video plays
//     video.addEventListener("timeupdate", function () {
//       // Calculate the slider value
//       const value = (100 / video.duration) * video.currentTime;

//       // Update the slider value
//       seekBar.value = value;
//     });

//     // Pause the video when the slider handle is being dragged
// seekBar.addEventListener("mousedown", function() {
//   video.pause();
// });

// // Play the video when the slider handle is dropped
// seekBar.addEventListener("mouseup", function() {
//   video.play();
// });
//   };

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
      {/* <div className="video-div">
      <div id="video-controls">
       {playerRef.current?.play()?<button type="button" id="play" onClick={togglePlay}>
          <FaPlay />
        </button>:<button type="button" id="pause" onClick={togglePlay}>
         <FaPause />

        </button>} 
       <> <input type="range" id="seek-bar" value="0" /></>

      </div>
      </div> */}
    </div>
  );
};

export default VideoService;
