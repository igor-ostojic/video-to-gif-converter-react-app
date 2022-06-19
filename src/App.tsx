import React, { useEffect, useState } from "react";
import "./App.css";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await ffmpeg.load();
      setReady(true);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <div className="App">
      {loading && <div>LOADING...</div>}
      <div>test</div>
    </div>
  );
}

export default App;
