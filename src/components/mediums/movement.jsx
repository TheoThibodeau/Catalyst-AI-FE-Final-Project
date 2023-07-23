import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import MovementPrompt from "../promptresponse/movementprompt.jsx";
import {useNavigate} from 'react-router-dom'

const Movement = ({ setOutput, output, setMovementGenerativeSpace }) => {
    const [movementSomatics, setMovementSomatics] = useState("");
    const [movementThemes, setMovementThemes] = useState("");
    const [emotion, setEmotion] = useState("");
    const [postId, setPostId] = useState(null);
    const [sentiment, setSentiment] = useState("");
    const [promptLength, setPromptLength] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/movement/generate/',{
            somatic: movementSomatics,
            theme: movementThemes,
            sentiment: sentiment,
            emotion: emotion,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}

    const handleMovementSomatics = (selectedMovementSomatics) => {
        setMovementSomatics(selectedMovementSomatics);
        console.log(selectedMovementSomatics)
    }
    
    const handleMovementThemes = (selectedMovementThemes) => {
        setMovementThemes(selectedMovementThemes);
        console.log(selectedMovementThemes)
    }

    const handleEmotionChange = (selectedEmotion) => {
        setEmotion(selectedEmotion);
        console.log(selectedEmotion)
    }

    const handleSentimentChange = (selectedSentiment) => {
        setSentiment(selectedSentiment);
        console.log(selectedSentiment)
    }

    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
    }

    const handleMovementClickCreatePage = () => {
        setMovementGenerativeSpace(true)
    }

const mappedMovementSomatics = data.movementSomatics
const mappedMovementThemes = data.movementThemes
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedPromptLength = ['one word', 'three words', 'prompt']

return (
<>
    <h1>MOVEMENT</h1>
    <h2>MOVEMENT SOMATIC</h2>

    <div>
        <h3> Selected Movement Somatics: <br></br> {movementSomatics}</h3>
        </div>
        <div>
            {mappedMovementSomatics.map((movementSomatics) => (
            <button key={movementSomatics} onClick={() => handleMovementSomatics(movementSomatics)}>
                {movementSomatics}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>MOVEMENT THEMES</h2>

        <div>
            <h3> Selected Theme: <br></br> {movementThemes}</h3>
        </div>
        <div>
            {mappedMovementThemes.map((theme) => (
            <button key={theme} onClick={() => handleMovementThemes(theme)}>
                {theme}
            </button>
            ))}

            </div>    
        <br></br>
    
        <h2>EMOTION</h2>
    <div>
        <h3>Selected Emotion: <br></br> {emotion}</h3>
    </div>   
    <div>
        {mappedEmotion.map((emotion) => (
            <button key={emotion} onClick={() => handleEmotionChange(emotion)}>
                {emotion}
            </button>
        ))}
    </div>
    <br></br>

    <h2>SENTIMENT</h2>
        <div>
            <h3>Selected Sentiment: <br></br> {sentiment}</h3>
        </div>   
        <div>
            {mappedSentiment.map((sentiment) => (
                <button key={sentiment} onClick={() => handleSentimentChange(sentiment)}>
                    {sentiment}
                </button>
            ))}
        </div>
        <br></br>

    <h2>PROMPT LENGTH</h2>
    <div>
        <h3>Selected Prompt Length: <br></br> {promptLength}</h3>
    </div>   
    <div>
        {mappedPromptLength.map((promptLength) => (
            <button key={promptLength} onClick={() => handlePromptLength(promptLength)}>
                {promptLength}
            </button>
        ))}
    </div>
    <br></br>

    <br></br>
    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    <div className="promptbox">
    {postId && <MovementPrompt  postId={postId} setOutput={setOutput} output={output} />}
    </div>
    <button className="begin-button" onClick={handleMovementClickCreatePage}>
        BEGIN
    </button> 
</>
)}

export default Movement;