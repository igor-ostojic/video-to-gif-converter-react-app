import { useRef, useEffect } from "react";

interface Gif {
  gif: string;
}

const Gif = ({ gif }: Gif) => {
  const fieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (gif && fieldRef.current) {
      fieldRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [gif]);

  return (
    <div className="video-container gif-container" ref={fieldRef}>
      {gif && <img src={gif} className="video-player" />}
    </div>
  );
};

export default Gif;
