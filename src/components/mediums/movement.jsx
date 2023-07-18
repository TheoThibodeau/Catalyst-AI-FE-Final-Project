import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import PoetryPrompt from "./promptresponse";

const Movement = () => {
    const [movementSomatic, setMovementSomatic] = useState("");
    const [movementThemes, setMovementThemes] = useState("");
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/movement/generate/',{
            somantic: movementSomatic,
            theme: movementThemes,
            sentiment: sentiment,
            emotion: emotion,
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

const mappedMovementSomatic = data.MovementSomatic
const mappedMovementThemes = data.MovementThemes
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment

return (
<>
    <h1>MOVEMENT</h1>
    <h2>MOVEMENT Somatic</h2>

    <div>
        <h3> Selected MOVEMENT Somatic: <br></br> {writingStyle}</h3>
        </div>
        <div>
            {mappedWritingStyle.map((style) => (
            <button key={style} onClick={() => handleWritingStyle(style)}>
                {style}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>THEMES</h2>

        <div>
            <h3> Selected Theme: <br></br> {themes}</h3>
        </div>
        <div>
            {mappedThemes.map((theme) => (
            <button key={theme} onClick={() => handleThemeChange(theme)}>
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

    <br></br>
    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    
    {postId && <PoetryPrompt postId={postId} />}
</>
)}

export default Movement;