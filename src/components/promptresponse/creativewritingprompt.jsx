import React, { useEffect, useState } from "react";
import axios from "axios";

const CreativeWritingPrompt = ({ postId, setOutput, output }) => {
  const [note, setNote] = useState("");

  useEffect(() => {
    axios
      .get(`https://catalyst-x226.onrender.com/api/response/write/${postId}`)
      .then((response) => {
        setOutput(response.data.output);
        setNote(response.data.note);
      })
   },
    [postId, setOutput]);

  return (
    <>
      <h3>{output}</h3>
      <h3>{note}</h3>
    </>
  );
};

export default CreativeWritingPrompt;