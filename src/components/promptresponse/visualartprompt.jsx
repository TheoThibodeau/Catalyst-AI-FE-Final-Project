import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingRobot from "./../robot.jsx";


const VisualArtPrompt = ({ postId, setOutput, output  }) => {
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    axios
      .get(`https://catalyst-x226.onrender.com/api/response/visual_art/${postId}`)
      .then((response) => {
        const timeout = setTimeout(() => {
            setOutput(response.data.output)
            setIsLoading(false)}, 3000)
          })
      })
      .catch((error) => console.error(error));
  },
    [postId]);

  return (
    <>
    <div>
    {isLoading ?(
        <LoadingRobot/>
    ):(<h3>{output}</h3>)}
    </div>
        
    </>
  )
};

export default VisualArtPrompt;

