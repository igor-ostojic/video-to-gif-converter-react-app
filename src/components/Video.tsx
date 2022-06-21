import { useEffect, useRef } from "react";
import defaultVideo from "../assets/intro.webm";
import IntroTitle from "./IntroTitle";

interface Video {
  video: File | null | undefined;
}

const Video = (props: Video) => {
  const videoRef = useRef<any>();

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    console.log(`The video is ${video.duration} seconds long.`);
  };
  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-player"
        controls={props.video ? true : false}
        autoPlay={props.video ? false : true}
        muted
        width="250"
        src={props.video ? URL.createObjectURL(props.video) : defaultVideo}
        onLoadedMetadata={handleLoadedMetadata}
      ></video>
      {!props.video && <IntroTitle />}
    </div>
  );
};

export default Video;
