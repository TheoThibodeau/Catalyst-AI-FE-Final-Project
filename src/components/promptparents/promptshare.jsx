import React, { useEffect, useState } from "react";
import axios from "axios";
import CreativeWriting from "../mediums/creativewriting";
import Music from "../mediums/music";
import Movement from "../mediums/movement";
import VisualArt from "../mediums/visualart";
import Create from "../create.jsx"

const PromptParents = ({ postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [generativeSpace, setGenerativeSpace] = useState(false);

  return (
    <>
      {generativeSpace ? 
        <Create postId={postId} output={output} />
      : 
        <CreativeWriting setOutput={setOutput} output={output}  setGenerativeSpace={setGenerativeSpace} /> 
      }
      {/* {generativeSpace ? 
        <Create postId={postId} output={output} />
      : 
        <Music  setOutput={setOutput} output={output}  setGenerativeSpace={setGenerativeSpace} /> 
      } */}
    </>
  );
};

export default PromptParents;
