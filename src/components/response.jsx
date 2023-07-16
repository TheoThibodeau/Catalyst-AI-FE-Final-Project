import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Response = () => {

    const [output, setOutput] = useState("");
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        axios 
        .get (`https://catalyst-x226.onrender.com/api/response/poem/16`)       
        .then((response) => {
            setOutput(response.data.output)
        })
        .catch((error) => console.error(error));
               
        })

return(
    <>
        <h2>Hello werld!</h2>
        <h2>{output}</h2>
    </>
)
}

export default Response;