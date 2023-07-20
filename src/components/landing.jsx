import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => { 

    const [output, setOutput] = useState("");
    const [responseID, setResponseID] = useState("");

    useEffect(() => {
        axios
        .post('https://catalyst-x226.onrender.com/api/welcome/generate/', {
            id: responseID,
            output_text: output,
        })
        .then((response) => {
            setResponseID(response.data.ID)
        })
    }, [responseID, output]);

    useEffect(() => {
        axios
        .get(`https://catalyst-x226.onrender.com/api/welcome/${responseID}`)
        .then((response) => {
            setOutput(response.data.output)
        })
    }, [responseID]);
    
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
<div>
<div>
    <h2>{output}</h2>
</div>
<div>
    <h4>What medium are you working in today? </h4>
</div>
<div>
    <button onClick={handleClickCreativeWriting}>CREATIVE WRITING</button>
    <button onClick={handleClickMusic}>MUSIC</button>
    <button onClick={handleClickMovement}>MOVEMENT</button>
    <button onClick={handleClickVisualArt}>VISUAL ART</button>
</div>
</div>

)
}

export default Landing;