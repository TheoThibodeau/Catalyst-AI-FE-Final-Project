import React, { useState, useRef } from "react";
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";
import Notebook from "../components/create/notebook";
import Dictionary from "../components/create/dictionary";
import { Editor } from '@tinymce/tinymce-react';
import Timer from "./create/timer";

const Create = ({ postId, output }) => {
  const [activeComponent, setActiveComponent] = useState("");
  const components = {
    Audio: <Audio />,
    Metronome: <Metronome />,
    Stopwatch: <Stopwatch />,
    PomodoroTimer: <PomodoroTimer />,
    Notebook: <Notebook />,
    Dictionary: <Dictionary />,
    Timer: <Timer />
  };

  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center w-full p-4">
        <div className="flex-end">FOLIO</div>
        <div className="w-full pb-4 pl-4 pr-4">
          <div className="font-serif text-center p-7 pr-5 pl-5 mt- border font-extralight text-md">
            {output}
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 mt-2 pt-4">
              <button
                className="w-full px-4 py-2 border border-slate-300 text-gray-800 font-mono text-center"
                onClick={() => setActiveComponent("Timer")}
              >
                Timer
              </button>
              <button
                className="w-full px-4 py-2 border border-slate-300 text-gray-800 font-mono text-center"
                onClick={() => setActiveComponent("Notebook")}
              >
                Notebook
              </button>
              <button
                className="w-full px-4 py-2 border border-slate-300 text-gray-800 font-mono text-center"
                onClick={() => setActiveComponent("PomodoroTimer")}
              >
                Pomodoro
              </button>
              <button
                className="w-full px-4 py-2 border border-slate-300 text-gray-800 font-mono text-center"
                onClick={() => setActiveComponent("Dictionary")}
              >
                Dictionary
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text- w-full p-4 pb-8 flex flex-grow lg:w-1/2 font-serif justify-center">
        {components[activeComponent]}
      </div>
    </>
  );
};
export default Create;
