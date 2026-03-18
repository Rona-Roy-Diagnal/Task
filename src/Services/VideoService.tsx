import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import "../Styles/Videoplay.css";
import { logPlaybackError, logPlaybackSuccess } from "../Utils/Loggly";
import Useanalytics from "../Hooks/Useanalytics";
import {
  FocusContext,
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
type VideoJsOptions = Parameters<typeof videojs>[1];
interface VideoServiceProps {
  options: VideoJsOptions;
  onReady?: (player: Player) => void;
  contentId?: string;
  contentTitle?: string;
  contentGenre?: string;
}

const VideoService = ({
  options,
  onReady,
  contentGenre,
  contentId,
  contentTitle,
}: VideoServiceProps) => {
  const { playbackStart, playbackPause, playbackEnd, playbackError } =
    Useanalytics();
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const controls = useFocusable({
    trackChildren: true,
    autoRestoreFocus: true,
  });
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const detData = sessionStorage.getItem("details");
  if (detData) {
    contentId = JSON.parse(detData);
    contentGenre = JSON.parse(detData);
    contentTitle = JSON.parse(detData);
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [showControls, setShowControls] = useState(true);
  const playvideo = useFocusable({
    // onEnterPress: () => togglePlay(),
    // onArrowPress: (direction) => {
    //   if (direction === "left") skip(-10);
    //   else if (direction === "right") skip(10);
    //   return true;
    // },
    onFocus: () => playBtn.focusSelf(),
  });
  useEffect(() => {
    setFocus(playvideo.focusKey);
    if (!playerRef.current) return;

    if (playvideo.focused) {
      const playPromise = playerRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Playback started successfully
            playerRef.current?.pause();
          })
          .catch(() => {
            // Playback failed or was interrupted (e.g., by a subsequent pause call)
            console.error("Playback interrupted");
          });
      }
    } else playerRef.current.pause();
  }, [playvideo.focused]);

  // Initialize player
  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        if (onReady) onReady(player);

        player.on("play", () => {
          setIsPlaying(true);
        });

        player.on("pause", () => setIsPlaying(false));

        player.on("timeupdate", () => {
          setCurrentTime(player.currentTime() ?? 0);
        });

        player.on("loadedmetadata", () => {
          setDuration(player.duration() ?? 0);
        });
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
    }
  }, [options, onReady]);

  const playBtn = useFocusable({
    onEnterPress: () => {
      togglePlay();
    },
    onArrowPress: (direction) => {
      if (direction == "left") {
        skip(-10);
      } else if (direction == "right") {
        skip(10);
      }
      return false;
    },
  });
  const skipForwBtn = useFocusable({
    onEnterPress: () => {
      skip(10);
    },
    onArrowPress: (direction) => {
      if (direction == "left") {
        togglePlay();
      }
      return false;
    },
  });
  const skipBackBtn = useFocusable({
    onEnterPress: () => {
      skip(-10);
    },
    onArrowPress: (direction) => {
      if (direction == "right") {
        togglePlay();
      }
      return false;
    },
  });

  // Auto hide controls
  const showControlsTemporarily = () => {
    setShowControls(true);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 4000);
  };

  // Play / Pause
  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playerRef.current.paused()) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }

    showControlsTemporarily();
  };

  // Skip forward / backward
  const skip = (seconds: number) => {
    if (!playerRef.current) return;

    const current = playerRef.current.currentTime();
    const total = playerRef.current.duration();
    if (current == undefined) return;
    if (total == undefined) return;
    const newTime = Math.min(Math.max(0, current + seconds), total);

    playerRef.current.currentTime(newTime);

    showControlsTemporarily();
  };

  // Seek bar change
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current) return;

    const time = Number(e.target.value);

    playerRef.current.currentTime(time);

    setCurrentTime(time);
  };

  // Format time
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Dispose player
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
    <div className="video-container" onMouseMove={showControlsTemporarily}>
      <div ref={videoRef} className="video-js" />

      <div
        ref={controls.ref}
        className={`ott-controls ${showControls ? "show" : "hide"}`}
      >
        <FocusContext.Provider value={controls.focusKey}>
          <div className="bottom-controls">
            <button
              ref={skipBackBtn.ref}
              onClick={() => skip(-10)}
              className={`btn ${skipBackBtn.focused ? "focused" : ""}`}
            >
              {"<"}
            </button>

            <button
              ref={playBtn.ref}
              onClick={togglePlay}
              className={`btn ${playBtn.focused ? "focused" : ""}`}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button
              ref={skipForwBtn.ref}
              onClick={() => skip(10)}
              className={`btn ${skipForwBtn.focused ? "focused" : ""}`}
            >
              {">"}
            </button>

            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
            />

            <span>{formatTime(duration)}</span>
          </div>
        </FocusContext.Provider>
      </div>
    </div>
  );
};

export default VideoService;
