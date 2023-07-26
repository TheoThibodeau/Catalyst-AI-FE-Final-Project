import { useState } from "react";
import axios from "axios";
import MovementPrompt from "../promptresponse/movementprompt.jsx";

const ParameterComponent = ({ data, handler }) => {
    const title = data.title
    const entries = data.data
    console.log(data)
   
    
    return (
        <>
      
           <h1 className="pb-4 font-mono text-slate-900 text-5xl flex flex-col justify-center align-center w-full space-y-4">
        
                {title}
            </h1>
              {entries.map((entry) => (
                <div key={entry} className="flex flex-col w-full space-y-1 pb-4 text-2xl pt-7 hover:underline">
                    <button key={entry} onClick={() => handler(title, entry)}>
                        {entry}
                    </button>
                </div>
              ))}
            </>
  );
};

export default ParameterComponent;
