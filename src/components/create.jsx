import React, { useState, useEffect, useRef } from "react";
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";

const Create = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [activeComponent, setActiveComponent] = useState("Stopwatch")
  const components = {
    Audio: <Audio />,
    Metronome: <Metronome />,
    Stopwatch: <Stopwatch />,
    PomodoroTimer: <PomodoroTimer />,
  };

  useEffect(() => {
    inputRef.current.focus();
    // input.current.selectionStart = 0;
  }, []);

  return (
      <div>
        <h1>Create page</h1>
        <h2>Prompt will display here </h2>
        
      <input
        ref={inputRef}
        className="create-box"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div>
        <br></br>
        <br></br>
        <button onClick={() => setActiveComponent("Stopwatch")}>Stopwatch</button>
        <button onClick={() => setActiveComponent("Audio")}>Audio Play</button>
        <button onClick={() => setActiveComponent("Metronome")}>Metronome</button>
        <button onClick={() => setActiveComponent("PomodoroTimer")}>Pomodoro Timer</button>
      </div>
      <div className="create-display">
      {components[activeComponent]}
    </div>
    </div>
  );
};
export default Create;
