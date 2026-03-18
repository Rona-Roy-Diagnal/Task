import VideoService from "../Services/VideoService";

function VideoPlay() {
  const url = import.meta.env.VITE_VIDEO_URL;

  let title, contentGuid, genre;
  const detData = sessionStorage.getItem("details");
  if (detData) {
    title = JSON.parse(detData);
    contentGuid = JSON.parse(detData);
    genre = JSON.parse(detData);
  }
  const viddeooptions = {
    autoplay: true,
    controls: false,
    fluid: true,
    responsive: true,
    experimentalSvgIcons: true,
    sources: [
      {
        src: url,
      },
    ],
  };

  return (
    <div>
      <VideoService
        options={viddeooptions}
        contentId={contentGuid}
        contentTitle={title}
        contentGenre={genre}
        onReady={() => {
          console.log("player ready");
        }}
      ></VideoService>
    </div>
  );
}

export default VideoPlay;
