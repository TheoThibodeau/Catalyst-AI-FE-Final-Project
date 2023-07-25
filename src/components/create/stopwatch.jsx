import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="border p-4">
      
      <div>
        <span>Time: {formatTime(time)}</span>
      </div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
