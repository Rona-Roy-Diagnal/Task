import VideoService from "../Services/VideoService";

function VideoPlay() {
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
  };

  return (
    <div>
      <VideoService
        options={viddeooptions}
        onReady={() => {
          console.log("player ready");
        }}
      ></VideoService>
    </div>
  );
}

export default VideoPlay;
