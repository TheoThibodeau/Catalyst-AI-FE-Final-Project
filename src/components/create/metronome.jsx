import React, { useState, useEffect } from 'react';

const Metronome = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [intervalId, setIntervalId] = useState(null);
  const audioContextRef = React.useRef(new (window.AudioContext || window.webkitAudioContext)());

  useEffect(() => {
    if (isRunning) {
      const interval = (60 / bpm) * 1000;
      const id = setInterval(tick, interval);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, bpm, intervalId]);

  const tick = () => {
    playTickSound();
  };

  const playTickSound = () => {
    const oscillator = audioContextRef.current.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = 1000; // Adjust this to change the pitch of the metronome tick
    oscillator.connect(audioContextRef.current.destination);
    oscillator.start();
    oscillator.stop(audioContextRef.current.currentTime + 0.05); // Adjust this to change the duration of the tick sound
  };

  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };

  const handleBpmChange = (event) => {
    const newBpm = parseInt(event.target.value, 10);
    setBpm(newBpm);
  };

  const handleSliderChange = (event) => {
    const newBpm = parseInt(event.target.value, 10);
    setBpm(newBpm);
  };

  return (
    <div className="border p-4">
      <div>
        <label htmlFor="bpm">BPM:</label>
        <input
          type="number"
          id="bpm"
          min="1"
          value={bpm}
          onChange={handleBpmChange}
        />
        <input
          type="range"
          min="1"
          max="240"
          value={bpm}
          onChange={handleSliderChange}
        />
      </div>
      <button onClick={handleStartStopClick}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Metronome;
