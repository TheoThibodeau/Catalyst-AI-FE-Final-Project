import React from 'react'
import {useNavigate} from 'react-router-dom'

const Landing = () => { 

    // useEffect(() => {
        
    //     axios
    //     .post('https://catalyst-x226.onrender.com/api/welcome/generate/',{
            
    //     })
    //     .get(` https://catalyst-x226.onrender.com/api/welcome/<int:pk>`)
    //       .then((response) => {}
    //       })
    //       .catch((error) => console.error(error));
    //   },

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
    <h2>Generated Welcome Statement</h2>
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