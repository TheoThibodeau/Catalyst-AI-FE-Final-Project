import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";

const VisualArt = () => {
    const [visualArtThemes, setVisualArtThemes] = useState("");
    const [visualArtMedium, setVisualArtMedium] = useState("");
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [temperature, setTemperature] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/visual_art/generate/',{
            theme: visualArtThemes,
            medium: visualArtMedium,
            sentiment: sentiment,
            emotion: emotion,
            temperature: temperature,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}

    const handleVisualArtThemes = (selectedVisualArtThemes) => {
        setVisualArtThemes(selectedVisualArtThemes);
        console.log(selectedVisualArtThemes)
        }
    
    const handleVisualArtMedium = (selectedVisualArtMedium) => {
        setVisualArtMedium(selectedVisualArtMedium);
        console.log(selectedVisualArtMedium)
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

const mappedVisualArtThemes = data.visualArtThemes
const mappedVisualArtMedium = data.visualArtMedium
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedTemperature = ['0.0 🫑', '0.2🌶', '0.4🌶🌶', '0.6🌶🌶🌶', '0.8🌶🌶🌶🌶', '1.0🌶🌶🌶🌶🌶',]
const mappedPromptLength = ['one word', 'three words', 'full prompt']

return (
<>
    <h1>VISUAL ART</h1>
    <h2>THEMES</h2>

    <div>
        <h3> Selected Theme: <br></br> {VisualArtThemes}</h3>
    </div>
    <div>
    {mappedVisualArtThemes.map((theme) => (
    <button key={theme} onClick={() => handleVisualArtThemes(VisualArtThemes)}>
        {theme}
    </button>
    ))}

    </div>    
<br></br>

    <h2>MEDIUM</h2>

        <div>
            <h3> Selected Medium: <br></br> {VisualArtMedium}</h3>
        </div>
        <div>
            {mappedVisualArtMedium.map((medium) => (
            <button key={medium} onClick={() => handleVisualArtMedium(VisualArtMedium)}>
                {medium}
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

    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    
    {postId && <PoetryPrompt postId={postId} />}
</>
)}

export default VisualArt;