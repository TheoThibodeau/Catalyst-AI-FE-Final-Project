import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import PoetryPrompt from "./promptresponse";

const Movement = () => {
    const [movementSomatic, setMovementSomatic] = useState("");
    const [movementThemes, setMovementThemes] = useState("");
    const [emotion, setEmotion] = useState("");
    const [postId, setPostId] = useState(null);
    const [sentiment, setSentiment] = useState("");
    const [temperature, setTemperature] = useState("");
    const [promptLength, setPromptLength] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/movement/generate/',{
            somantic: movementSomatic,
            theme: movementThemes,
            sentiment: sentiment,
            emotion: emotion,
            temperature: temperature,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}

    const handleMovementSomatic = (selectedMovementSomatic) => {
        setMovementSomatic(selectedMovementSomatic);
        console.log(selectedMovementSomatic)
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

const mappedMovementSomatic = data.movementSomatic
const mappedMovementThemes = data.movementThemes
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedTemperature = ['0.0 🫑', '0.2🌶', '0.4🌶🌶', '0.6🌶🌶🌶', '0.8🌶🌶🌶🌶', '1.0🌶🌶🌶🌶🌶',]
const mappedPromptLength = ['one word', 'three words', 'full prompt']

return (
<>
    <h1>MOVEMENT</h1>
    <h2>MOVEMENT SOMATIC</h2>

    <div>
        <h3> Selected Movement Somatic: <br></br> {MovementSomatic}</h3>
        </div>
        <div>
            {mappedMovementSomatic.map((MovementSomatic) => (
            <button key={MovementSomatic} onClick={() => handleMovementSomatic(MovementSomatic)}>
                {MovementSomatic}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>MOVEMENT THEMES</h2>

        <div>
            <h3> Selected Theme: <br></br> {MovementThemes}</h3>
        </div>
        <div>
            {mappedMovementThemes.map((theme) => (
            <button key={theme} onClick={() => handleMovementThemes(MovementThemes)}>
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

        <h2>On a scale of 🫑-🌶🌶🌶🌶🌶, how creative would you like the prompt to be?</h2>
    <div>
        <h3>{temperature}</h3>
    </div>   
    <div>
        {mappedTemperature.map((temperature) => (
            <button key={temperature} onClick={() => handleTemperature(temperature)}>
                {temperature}
            </button>
        ))}
    </div>
    <br></br>

    <h2>PROMPT LENGTH</h2>
    <div>
        <h3>Selected Prompt Length: <br></br> {PromptLength}</h3>
    </div>   
    <div>
        {mappedPromptLength.map((PromptLength) => (
            <button key={PromptLength} onClick={() => handlePromptLength(PromptLength)}>
                {PromptLength}
            </button>
        ))}
    </div>
    <br></br>

    <br></br>
    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    
    {postId && <PoetryPrompt postId={postId} />}
</>
)}

export default Movement;