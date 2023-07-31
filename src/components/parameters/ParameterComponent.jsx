import { useState } from "react";
import axios from "axios";
import MovementPrompt from "../promptresponse/movementprompt.jsx";
import NavBar from "../navbar.jsx";

const ParameterComponent = ({ data, handler, mediumNavComponent }) => {
  const title = data.title;
  const entries = data.data;
  console.log(data);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between pt-8 pb-6 pl-2 font-mono bg-slate-300 text-5xl items-center w-full space-y-4">
        {mediumNavComponent}
      </div>

      <div className="flex flex-col pb-20 items-center justify-center space-y-10 flex-grow">
        {entries.map((entry) => (
          <div
            key={entry}
            className="flex flex-col align-center w-60 h-50 justify-center text-lg text-slate-500 border bg-slate-200 border border-slate-400 p-2"
          >
            <button
              className=""
              key={entry}
              onClick={() => handler(title, entry)}
            >
              {entry}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ParameterComponent;
