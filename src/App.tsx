import React, { useEffect, useState } from "react";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import Video from "./components/Video";
import Gif from "./components/Gif";
const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<File | null>();
  const [gif, setGif] = useState<string>();

  const convertToGif = async () => {
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video as File));
    await ffmpeg.run("-i", "test.mp4", "-t", "10", "-ss", "2.0", "-f", "gif", "out.gif");
    const data = ffmpeg.FS("readFile", "out.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));
    setGif(url);
    console.log(video?.size);

    const convertBytes = (x: any) => {
      const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      let l = 0,
        n = parseInt(x, 10) || 0;

      while (n >= 1024 && ++l) {
        n = n / 1024;
      }

      console.log(n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l]);
    };
    convertBytes(video?.size);
  };

  const load = async () => {
    setLoading(true);
    await ffmpeg.load();
    setReady(true);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    // https://opensource.com/article/17/6/ffmpeg-convert-media-file-formats
    <main className="App">
      {/* {loading && <div>LOADING...</div>} */}
      <div>
        <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
        <Video video={video} />
      </div>
      <div>
        <button onClick={convertToGif}>CONVERT</button>
      </div>
      {gif && <Gif gif={gif} />}
    </main>
  );
}

export default App;
