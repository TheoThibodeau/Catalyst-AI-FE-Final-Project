import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingRobot from "./../robot.jsx";


const VisualArtPrompt = ({ postId, setOutput, output  }) => {
  useEffect(() => {
    
    axios
      .get(`https://catalyst-x226.onrender.com/api/response/visual_art/${postId}`)
      .then((response) => {
        setOutput(response.data.output)
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

export default VisualArtPrompt;

