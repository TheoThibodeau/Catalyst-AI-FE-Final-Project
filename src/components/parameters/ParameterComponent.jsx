import { useState } from "react";
import axios from "axios";
import MovementPrompt from "../promptresponse/movementprompt.jsx";

const ParameterComponent = ({ data, handler, mediumNavComponent }) => {
  const title = data.title;
  const entries = data.data;
  console.log(data);

  return (
    <>
      <div className="bg-slate-100 pb-4 border border-slate-300 ">
        <div className="pl-2">
          <h1 className="pt-4 pb-4 font-mono text-slate-500 text-xl flex flex-col justify-center align-center w-full space-y-4">
            {mediumNavComponent}
          </h1>
          <h2 className="text-slate-400 font-mono pt-6 text-sm">Select one to narrow in your prompt...</h2>
        </div>
      </div>
      <div className="flex flex-col pt-5 pl-20 justify-center ">
        {entries.map((entry) => (
          <div
            key={entry}
            className="flex flex-col align-center w-60 h-20 justify-center space-y-3 pb-4 text-lg pt-4 text-slate-400 hover:text-slate-500"
          >
            <button
              className="shadow-md hover:shadow-lg rounded-md"
              key={entry}
              onClick={() => handler(title, entry)}
            >
              {entry}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParameterComponent;
