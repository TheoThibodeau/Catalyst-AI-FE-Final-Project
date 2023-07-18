import React from 'react'
import {Navigate} from 'react-router-dom'

const Landing = () => {

const handleClickCreativeWriting = () => {
    navigate('/components/mediums/creativewriting');
}
const handleClickMusic = () => {
    navigate('/components/mediums/music');
}
const handleClickMovement = () => {
    navigate('/components/mediums/movement');
}
const handleClickVisualArt = () => {
    navigate('/components/mediums/visualart');
}

return (
<div>
<div>
    <h2>Generated Welcome Satement</h2>
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