import React, { useState } from "react";
import CreativeWriting from "../mediums/creativewriting";
import Create from "../create.jsx";

const PromptParents = ({ setPostId, postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [generativeSpace, setGenerativeSpace] = useState(false);
  const [movementGenerativeSpace, setMovementGenerativeSpace] = useState(false);

  return (
    <>
      {generativeSpace ? (
        <Create output={output} postId={postId}/>
      ) : (
        <CreativeWriting
          postId={postId}
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