import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Response =() => {

const [response, setResponse] = useState('')

useEffect(() => {
    axios 
    .get ('https://catalyst-x226.onrender.com/api/poem/generate/')   
    })    
    .then(() => {
        setResponse()
    })


return(
    <>
        <h2>{output}</h2>
    </>
)
}

export default Response