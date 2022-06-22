import { useEffect, useRef } from "react";
import defaultVideo from "../assets/intro.webm";
import IntroTitle from "./IntroTitle";

interface Video {
  video: File | null | undefined;
  handleLoadedMetadata: () => void;
  videoRef: any;
}

const Video = (props: Video) => {
  return (
    <div className="video-container">
      <video
        ref={props.videoRef}
        className="video-player"
        controls={props.video ? true : false}
        autoPlay
        muted
        width="250"
        src={props.video ? URL.createObjectURL(props.video) : defaultVideo}
        onLoadedMetadata={props.handleLoadedMetadata}
      ></video>
      {!props.video && <IntroTitle />}
    </div>
  );
};

export default Video;
