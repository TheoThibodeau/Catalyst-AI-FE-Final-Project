import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingRobot from "./../robot.jsx";


const VisualArtPrompt = ({ postId, setOutput, output  }) => {
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    axios
      .get(`https://catalyst-x226.onrender.com/api/response/visual_art/${postId}`)
      .then((response) => {
        setOutput(response.data.output);
        
        setIsLoading(false)
      })
      .catch((error) => console.error(error));
      const timer = setTimeout(() => {
        VisualArtPrompt({postId, setOutput, output});
      }, 5000);

      return () => clearTimeout(timer);
      })
  },
    [postId];

  return (
    <>
    
    {isLoading ?(
        <LoadingRobot/>
    ):(<h3>{output}</h3>)}
        
    </>
  );
};

export default VisualArtPrompt;

