import React, { useState } from "react";
import CreativeWriting from "../mediums/creativewriting";
import Create from "../create.jsx";

const PromptParents = ({ setPostId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [generativeSpace, setGenerativeSpace] = useState(false);
  const [movementGenerativeSpace, setMovementGenerativeSpace] = useState(false);

  return (
    <>
      {generativeSpace ? (
        <Create output={output} />
      ) : (
        <CreativeWriting
          setPostId={setPostId}
          setOutput={setOutput}
          output={output}
          setGenerativeSpace={setGenerativeSpace}
        />
      )}
    </>
  );
};

export default PromptParents;