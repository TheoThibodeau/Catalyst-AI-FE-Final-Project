import React, { useState, useRef } from "react";
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";
import Notebook from "../components/create/notebook";
import Dictionary from "../components/create/dictionary";
import { Editor } from '@tinymce/tinymce-react';
import Timer from "./create/timer";
import NavBar from "./navbar";

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

  const handleToggle = () => {
    setActiveComponent(activeComponent ? "" : ""); 
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap items-center w-full ">
        <div className="w-full pb-4 pl-4 pr-4">
          <button
            onClick={handleToggle}
            className={activeComponent
              ? "font-serif text-center p-8 pr-5 pl-5 bg-slate-100 border border-slate-500 font-extralight text-lg"
              : "border border-slate-200 text-3xl font-serif p-8 mt-5 mb-5 text-center "
            }
          >
            {output}
          </button>
          <div className="text- w-full pb-4 flex flex-grow lg:w-1/2 font-serif justify-center">
            {components[activeComponent]}
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="w-full px-4 py-2 border border-slate-400 text-gray-800 bg-slate-100 font-mono text-center"
                onClick={() => setActiveComponent("Timer")}
              >
                Timer
              </button>
              <button
                className="w-full px-4 py-2 border border-slate-400 text-gray-800  bg-slate-100 font-mono text-center"
                onClick={() => setActiveComponent("Notebook")}
              >
                Notebook
              </button>
              <button
                className="w-full px-4 py-2 border border-slate-400 text-gray-800  bg-slate-100 font-mono text-center"
                onClick={() => setActiveComponent("PomodoroTimer")}
              >
                Pomodoro
              </button>
              <button
                className="w-full px-4 py-2 border border-slate-400 text-gray-800  bg-slate-100 font-mono text-center"
                onClick={() => setActiveComponent("Dictionary")}
              >
                Lexicon
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
