import React, { useState, useRef } from "react";
import PomodoroTimer from "../components/create/pomodoro";
import Stopwatch from "../components/create/stopwatch";
import Metronome from "../components/create/metronome";
import Audio from "../components/create/audio";
import CreativeWritingSave from "../components/create/notebook";
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
    Notebook: <CreativeWritingSave postId={postId}/>,
    Dictionary: <Dictionary />,
    Timer: <Timer />
  };
console.log(postId)
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
    <NavBar />
      <div className="flex flex-wrap items-center w-full ">
        <div className="w-full pb-4 pl-4 pr-4">
          <div className="font-serif text-center p-7 pr-5 pl-5  bg-slate-100 border border-slate-500 font-extralight text-lg">
            {output}
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 mt-2 pt-4">
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
      <div className="text- w-full p-4 pb-8 flex flex-grow lg:w-1/2 font-serif justify-center">
        {components[activeComponent]}
      </div>
    </>
  );
};
export default Create;