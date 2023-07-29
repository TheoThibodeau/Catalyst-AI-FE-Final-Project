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
      <div className="flex flex-col pt-5 pb-4 pl-2 font-mono text-slate-500 bg-orange-200 text-5xl justify-center align-center w-full space-y-4">
            {mediumNavComponent}
      </div>
      <div className="flex flex-col pb-20 pt-40 items-center justify-center space-y-10">
        {entries.map((entry) => (
          <div
            key={entry}
            className="flex flex-col align-center w-60 h-50  justify-center text-lg text-slate-500 border bg-slate-200"
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
        <Footer />
      </div>
    </>
  );
};

export default ParameterComponent;
