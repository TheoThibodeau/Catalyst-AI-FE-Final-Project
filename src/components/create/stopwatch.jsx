import React, { useState, useEffect } from "react";
import "./../time.css"

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
    <div className="container">
      
      <div>
        <span className="center-item">Time: {formatTime(time)}</span>
      </div>
      <div className="buttons">
        <button className="start" onClick={start}>Start</button>
        <button className="p-4" onClick={pause}>Pause</button>
        <button className="p-4"onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
