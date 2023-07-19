import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import MovementPrompt from "../promptresponse/movementprompt.jsx";

const Movement = () => {
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

    const handleTemperature = (selectedTemperature) => {
        setTemperature(selectedTemperature);
        console.log(selectedTemperature)
    }
    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
    }

const mappedMovementSomatics = data.movementSomatics
const mappedMovementThemes = data.movementThemes
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedTemperature = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',]
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
    
    {postId && <MovementPrompt postId={postId} />}
    
</>
)}

export default Movement;