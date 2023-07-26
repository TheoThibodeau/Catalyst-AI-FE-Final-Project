import { useState } from "react";
import axios from "axios";
import MovementPrompt from "../promptresponse/movementprompt.jsx";

const ParameterComponent = ({ data, handler }) => {
    const title = data.title
    const entries = data.data
    console.log(data)
   
    
    return (
        <>
      
           <h1 className="pb-4 font-mono text-slate-500 text-6xl flex flex-col justify-center align-center w-full space-y-4">
        
                {title}
            </h1>
              {entries.map((entry) => (
                <div key={entry} className="flex flex-col justify-center align-center w-full space-y-5 pb-4 text-3xl pt-4 hover:underline">
                    <button key={entry} onClick={() => handler(title, entry)}>
                        {entry}
                    </button>
                </div>
              ))}
            </>
  );
};

export default ParameterComponent;
