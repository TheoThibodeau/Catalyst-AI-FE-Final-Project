import React, { useEffect, useState } from "react";
import axios from "axios";

const MusicPrompt = ({ postId }) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    axios
      .get(`https://catalyst-x226.onrender.com/api/response/music/${postId}`)
      .then((response) => {
        setOutput(response.data.output);
      })
      .catch((error) => console.error(error));
  },
    [postId]);

  return (
    <>
      
      <h3>{output}</h3>
    </>
  );
};

export default MusicPrompt;