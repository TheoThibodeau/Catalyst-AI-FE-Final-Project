import { useState } from "react";
import axios from "axios";
import MovementPrompt from "../promptresponse/movementprompt.jsx";
import Footer from "../footer.jsx";

const ParameterComponent = ({ data, handler, mediumNavComponent }) => {
  const title = data.title;
  const entries = data.data;
  console.log(data);

  return (
    <>
      <div className="pb-4 border-slate-300 ">
        <div className="pl-2">
          <h2 className="text-slate-400 font-mono text-3xl pt-3 ">WRITING</h2>
          <h1 className="pt-5 pb-4 font-mono text-slate-500 text-6xl flex flex-col justify-center align-center w-full space-y-4">
            {mediumNavComponent}
          </h1>
        </div>
      </div>
      <div className="h-20"></div>
      <div className="flex flex-col space-y-7 pl-20  pt-6 justify-center ">
        {entries.map((entry) => (
          <div
            key={entry}
            className="flex flex-col align-center w-60 h-50 justify-center space- text-lg text-slate-500 border bg-slate-200 border-slate-300"
          >
            <button
              className=""
              key={entry}
              onClick={() => handler(title, entry)}
            >
              {entry}
            </button>
            <Footer />
          </div>
        ))}
      </div>
    </>
  );
};

export default ParameterComponent;
