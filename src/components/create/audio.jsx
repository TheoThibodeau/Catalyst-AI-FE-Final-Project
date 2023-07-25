import React, { useState } from "react";

const Audio = () => {
  const [audio, setAudio] = useState(null);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
    }
  };

  return (
    <div className="border p-4" >
        
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <audio ref={setAudio} src="audio.mp3" controls></audio>
    </div>
  );
};

export default Audio;