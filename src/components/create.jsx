import { useState } from 'react';
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";
import Notebook from "../components/create/notebook";

const Create = () => {
  const [activeComponent, setActiveComponent] = useState("")
  const components = {
    Audio: <Audio />,
    Metronome: <Metronome />,
    Stopwatch: <Stopwatch />,
    PomodoroTimer: <PomodoroTimer />,
    Notebook: <Notebook />,
  };

  return (
      <div>
       
        <h2>Prompt will display here </h2>
        
      <div>
        <br></br>
        <br></br>
        <button onClick={() => setActiveComponent("Stopwatch")}>Stopwatch</button>
        <button onClick={() => setActiveComponent("Audio")}>Audio Play</button>
        <button onClick={() => setActiveComponent("Metronome")}>Metronome</button>
        <button onClick={() => setActiveComponent("PomodoroTimer")}>Pomodoro Timer</button>
        <button onClick={() => setActiveComponent("Notebook")}>Notebook</button>
        <button>Dictionary</button>
      </div>
      <div className="create-display">
      {components[activeComponent]}
    </div>
    <Stopwatch />
    </div>
  );
};
export default Create;
