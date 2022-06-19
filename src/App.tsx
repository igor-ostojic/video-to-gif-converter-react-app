import React, { useEffect, useState } from "react";
import "./App.css";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<File | null | undefined>();
  const [gif, setGif] = useState<string>();

  const convertToGif = async () => {
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video as File));
    await ffmpeg.run("-i", "test.mp4", "-t", "10", "-ss", "2.0", "-f", "gif", "out.gif");
    const data = ffmpeg.FS("readFile", "out.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));
    setGif(url);
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
    <div className="App">
      {loading && <div>LOADING...</div>}
      <div>
        <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
        {video && <video controls width="250" src={URL.createObjectURL(video)}></video>}
      </div>
      <div>
        <button onClick={convertToGif}>CONVERT</button>
      </div>
      <div>{gif && <img src={gif} width="250px" />}</div>
    </div>
  );
}

export default App;
