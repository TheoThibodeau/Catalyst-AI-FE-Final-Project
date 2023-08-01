import React, { useState } from "react";
import Music from "../mediums/music";
import Create from "../create.jsx";

const MusicPromptParent = ({ setPostId, postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [musicGenerativeSpace, setMusicGenerativeSpace] = useState(false);

  return (
    <>
      {musicGenerativeSpace ? (
        <Create postId={postId} output={output} />
      ) : (
        <Music
          postId={postId}
          setPostId={setPostId}
          setOutput={setOutput}
          output={output}
          setMusicGenerativeSpace={setMusicGenerativeSpace}
        />
      )}
    </>
  );
};

export default MusicPromptParent;