import React, { useState } from "react";
import VisualArt from "../mediums/visualart";
import Create from "../create.jsx";

const VisualArtPromptParent = ({ setPostId, postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [visualArtGenerativeSpace, setVisualArtGenerativeSpace] = useState(false);

  return (
    <>
      {visualArtGenerativeSpace ? (
        <Create postId={postId} output={output} />
      ) : (
        <VisualArt
          postId={postId}
          setPostId={setPostId}
          setOutput={setOutput}
          output={output}
          setVisualArtGenerativeSpace={setVisualArtGenerativeSpace}
        />
      )}
    </>
  );
};

export default VisualArtPromptParent;