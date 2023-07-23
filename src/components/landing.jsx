import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => { 

    const [output, setOutput] = useState("");
    const [responseID, setResponseID] = useState("");

    const Navigate = useNavigate()

    const handleClickCreativeWriting = () => {
        Navigate('/creativewriting');
    }
    const handleClickMusic = () => {
        Navigate('/music');
    }
    const handleClickMovement = () => {
        Navigate('/movement');
    }
    const handleClickVisualArt = () => {
        Navigate('/visualart');
    }

return (
<div className="items-center justify-center h-screen">
<div className="w-full">
    <h2 className=""> Generated Welcome {output}</h2>
    <h4>What medium are you working in today? </h4>
</div>
<div className= "flex justify-between p-20"  >
    <button className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-serif rounded-md"onClick={handleClickCreativeWriting}>CREATIVE WRITING</button>
    <button className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-serif rounded-md"onClick={handleClickMusic}>MUSIC</button>
    <button className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-serif rounded-md"onClick={handleClickMovement}>MOVEMENT</button>
    <button className="p-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-serif rounded-md"onClick={handleClickVisualArt}>VISUAL ART</button>
</div>
</div>

)
}

export default Landing;