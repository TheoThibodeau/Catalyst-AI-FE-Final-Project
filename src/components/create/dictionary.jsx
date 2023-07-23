import React, { useState, useEffect } from 'react';
import axios from "axios";

const Dictionary = ({}) => {
    
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [defineId, setDefineId] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/definition/generate/', {
            word: word,
        })
        .then((response) => {
            setDefineId(response.data.defineId); 
            axios
                .get(`https://catalyst-x226.onrender.com/api/definition/${defineId}`)
                .then((response) => {
                    setWord(response.data.word);
                    setDefinition(response.data.definition);
                })
        })
    }
    
    const handleInputChange = (e) => {
        setWord(e.target.value);
    };

    return (
        <>
            <form onSubmit={handlePost}>
                <label>Don't recognize a word?</label>
                <input
                    type="text"
                    value={word}
                    onChange={handleInputChange} 
                    style={{
                        border: '1px solid black',
                        borderRadius: '4px',
                        padding: '8px'
                    }}
                />
                <button className="button-25" type="submit">Ask ChatGPT</button>
            </form>
            <h2>Definition: {definition}</h2>
        </>
    );
};

export default Dictionary;