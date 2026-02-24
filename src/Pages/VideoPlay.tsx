import { useLocation } from "react-router-dom";
import VideoService from "../Services/VideoService";

function VideoPlay() {

  const {state}=useLocation();
  const {details}=state;
  const viddeooptions = {
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    experimentalSvgIcons: true,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
    sources: [
      {
        src: "https://dclcsthfchz2h.cloudfront.net/de401/ae597794-26f9-4e76-a5f3-fe327fa3afd4/enlight-trailer-new-draft.m3u8",
      },
    ],
  }

  return (
    <div>
      <VideoService
        options={viddeooptions}
        contentId={details.contentGuid}
        contentTitle={details.title}
        contentGenre={details.genre}
         onReady={() => {
          console.log("player ready");
        }}
      ></VideoService>
    </div>
  );
}

export default VideoPlay;
