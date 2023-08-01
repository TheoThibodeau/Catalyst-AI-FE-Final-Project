import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);

  return (
    <div className="timer-container">
      <div className="timer-text">
        <p>
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </p>
      </div>
      
      <div className="button-container">
        <div class="timer-start">
        <button onClick={handleStart}>Start</button>
        </div>
        <div class="timer-stop">
        <button onClick={handleStop}>Stop</button>
        </div>
        
      </div>
    </div>
  );
};


export default Timer;
