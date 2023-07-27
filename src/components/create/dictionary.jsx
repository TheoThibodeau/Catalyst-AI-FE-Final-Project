import React, { useState } from 'react';
import axios from "axios";

const Dictionary = ({}) => {
    
    const [word, setWord] = useState("");
    const [define, setDefine] = useState("");
    const [synonym, setSynonym] = useState("");
    const [antonym, setAntonym] = useState("");
    const [sentence, setSentence] = useState("");
    const [joke, setJoke] = useState("");
    const [color, setColor] = useState("");
    const [defineId, setDefineId] = useState("");

    const handlePost = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://catalyst-x226.onrender.com/api/definition/generate/', {
                word: word,
            })
            .then((response) => {
                setDefineId(response.data.id); 
                });
    const getResponse = await axios.get(`https://catalyst-x226.onrender.com/api/definition/${defineId}`)
            .then((response) => {
                setWord(response.data.word);
                setDefinition(response.data.definition);
                setSynonym(response.data.synonym);
                setAntonym(response.data.antonym);
                setSentence(response.data.sentence);
                setJoke(response.data.joke);
                setColor(response.data.color);
            });
    }
    
    const handleInputChange = (e) => {
        setWord(e.target.value);
    };

    const handleDefine = (selectedDefine) => {
        setDefine(selectedDefine);
        console.log(selectedDefine)
    }

    const handleSynonym = (selectedSynonym) => {
        setSynonym(selectedSynonym);
        console.log(selectedSynonym)
    }

    const handleAntonym = (selectedAntonym) => {
        setAntonym(selectedAntonym);
        console.log(selectedAntonym)
    }

    const handleSentence = (selectedSentence) => {
        setSentence(selectedSentence);
        console.log(selectedSentence)
    }

    const handleJoke = (selectedJoke) => {
        setJoke(selectedJoke);
        console.log(selectedJoke)
    }

    const handleColor = (selectedColor) => {
        setColor(selectedColor);
        console.log(selectedColor)
    }

    return (
        <>
        <div className="border p-4">
            <form onSubmit={handlePost}>
                <label>Define : </label>
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
                <button className="border p-4 m-4" type="submit">Ask ChatGPT</button>
            </form>
            <div>
                <div>
                <button onClick={handleDefine}>define</button>
                {define && <p>{define}</p>}
                </div>
                <div>
                <button onClick={handleSynonym}>synonym</button>
                {synonym && <p>{synonym}</p>}
                </div>
                <div>
                <button onClick={handleAntonym}>antonym</button>
                {antonym && <p>{antonym}</p>}
                </div>
                <div>
                <button onClick={handleSentence}>sentence</button>
                {sentence && <p>{sentence}</p>}
                </div>
                <div>
                <button onClick={handleJoke}>joke</button>
                {joke && <p>{joke}</p>}
                </div>
                <div>
                <button onClick={handleColor}>color</button>
                {color && <p>{color}</p>}
                </div>
                
                </div>
            </div>
        </>
    );
};

export default Dictionary;

{/* <button onClick={handleClick}>antonym</button>
                <button onClick={handleClick}>sentence</button>
                <button onClick={handleClick}>joke</button>
                <button onClick={handleClick}>color</button> */}