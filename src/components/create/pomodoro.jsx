import React, { useState, useEffect } from "react";
import "./../time.css"

const PomodoroTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState(null);
  const [round, setRound] = useState(0);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    if (secondsLeft <= 0) {
      clearInterval(timer);
      setTimer(null);
      if (isWorking) {
        setRound((prevRound) => prevRound + 1);
      }
      setIsWorking(!isWorking);
      setSecondsLeft(isWorking ? 5 * 60 : 25 * 60);
    }
  }, [secondsLeft, timer, isWorking]);

  const startTimer = () => {
    if (timer) {
      return;
    }

    setRound(0);
    setIsWorking(true);
    setSecondsLeft(25 * 60);
    setTimer(setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000));
  };

  const stopTimer = () => {
    if (!timer) {
      return;
    }

    clearInterval(timer);
    setTimer(null);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const renderMessage = () => {
    if (round > 0 && !timer) {
      return <div>Good Work!</div>;
    }
    return null;
  };

  return (
    <div class="container">
    
     
      <div class="time-container">
        <span class="time">{formatTime(secondsLeft)}</span>
      </div>
      <div class="round-container">
        <span class='round'>Round {round}</span>
      </div>
      <div class='buttons'>
        <button class="start" onClick={startTimer}>Start</button>
        <button class="stop" onClick={stopTimer}>Stop</button>
      </div>
      {renderMessage()}
   
</div>
  );
};

export default PomodoroTimer;
