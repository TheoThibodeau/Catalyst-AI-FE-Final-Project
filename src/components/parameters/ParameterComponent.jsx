import { useState } from "react";
import axios from "axios";
import MovementPrompt from "../promptresponse/movementprompt.jsx";

const ParameterComponent = ({ data, handler }) => {
    const title = data.title
    const entries = data.data
    console.log(data)
  return (
    <>
    <h1 className="pb-4 text-red-500 flex flex-col justify-center align-center w-full space-y-4">
        {title}
    </h1>
      {entries.map((entry) => (
        <div key={entry} className="flex flex-col justify-center align-center w-full space-y-4 pb-4">
            <button key={entry} onClick={() => handler(title, entry)}>
                {entry}
            </button>
        </div>
      ))}
    </>
  );
};

export default ParameterComponent;
