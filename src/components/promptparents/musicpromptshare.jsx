import React, { useState } from "react";
import Music from "../mediums/music";
import Create from "../create.jsx";

const MusicPromptParent = ({ postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [musicGenerativeSpace, setMusicGenerativeSpace] = useState(false);

  return (
    <>
      {musicGenerativeSpace ? (
        <Create postId={postId} output={output} />
      ) : (
        <Music
          setOutput={setOutput}
          output={output}
          setMusicGenerativeSpace={setMusicGenerativeSpace}
        />
      )}
    </>
  );
};

export default MusicPromptParent;