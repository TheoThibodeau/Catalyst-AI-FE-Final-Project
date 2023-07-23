import React, { useState } from "react";
import Movement from "../mediums/movement";
import Create from "../create.jsx";

const MovementPromptParent = ({ postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [movementGenerativeSpace, setMovementGenerativeSpace] = useState(false);

  return (
    <>
      {movementGenerativeSpace ? (
        <Create postId={postId} output={output} />
      ) : (
        <Movement
          setOutput={setOutput}
          output={output}
          setMovementGenerativeSpace={setMovementGenerativeSpace}
        />
      )}
    </>
  );
};

export default MovementPromptParent;