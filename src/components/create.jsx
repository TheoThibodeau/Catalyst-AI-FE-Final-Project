import { useState } from 'react';
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";
import Notebook from "../components/create/notebook";

const Create = ( {postId, output} ) => {

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
      <div>
        <p>Output: {output}</p>
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
    </div>
  );
};
export default Create;
