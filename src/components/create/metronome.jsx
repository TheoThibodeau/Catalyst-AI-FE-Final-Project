import React, { useState, useEffect } from "react";

const Metronome = () => {
  const [bpm, setBpm] = useState(120);
  const [playing, setPlaying] = useState(false);
  const [oscillator, setOscillator] = useState(null);

  useEffect(() => {
    if (playing) {
      start();
    } else {
      stop();
    }
  }, [playing]);

  useEffect(() => {
    if (playing && oscillator) {
      const intervalId = setInterval(play, (60 / bpm) * 1000);
      return () => clearInterval(intervalId);
    }
  }, [bpm]);

  const start = () => {
    const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();
    osc.frequency.setValueAtTime(calculateFrequency(), audioContext.currentTime);
    osc.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
    setOscillator(osc);
  };

  const stop = () => {
    if (oscillator) {
      oscillator.stop();
      setOscillator(null);
    }
  };

  const play = () => {
    if (oscillator) {
      oscillator.stop();
    }
    start();
  };

  const handleBpmChange = (e) => {
    setBpm(e.target.value);
  };

  const calculateFrequency = () => {
    return 440 * (2 ** ((bpm - 69) / 12));
  };

  return (
    <div>
      <h1>Metronome</h1>
      <div>
        <label>BPM</label>
        <input
          type="number"
          value={bpm}
          onChange={handleBpmChange}
        />
      </div>
      <div>
        <input
          type="range"
          min="60"
          max="240"
          value={bpm}
          onChange={handleBpmChange}
        />
      </div>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default Metronome;
