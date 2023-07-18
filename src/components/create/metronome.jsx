import React, { useState, useEffect } from 'react';

const Metronome = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [intervalId, setIntervalId] = useState(null);

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
    // Play sound or perform any other action on each tick
    console.log('Tick!');
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
    <div>
      <h1>Metronome</h1>
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
