import defaultVideo from "../assets/intro.webm";
import IntroTitle from "./IntroTitle";

interface Video {
  video: File | null | undefined;
}

const Video = (props: Video) => {
  return (
    <div className="video-container">
      <video
        className="video-player"
        controls={props.video ? true : false}
        autoPlay={props.video ? false : true}
        muted
        width="250"
        src={props.video ? URL.createObjectURL(props.video) : defaultVideo}
      ></video>
      {!props.video && <IntroTitle />}
    </div>
  );
};

export default Video;
