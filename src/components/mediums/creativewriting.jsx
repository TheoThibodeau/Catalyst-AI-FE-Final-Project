import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import CreativeWritingPrompt from "./promptresponse/creativewritingprompt.jsx";

const CreativeWriting = () => {
    const [themes, setThemes] = useState("");
    const [categories, setCategories] = useState("");
    const [writingStyle, setWritingStyle] = useState("");
    const [postId, setPostId] = useState(null);
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [temperature, setTemperature] = useState("");
    const [promptLength, setPromptLength] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/write/generate/',{
            style: writingStyle,
            theme: themes,
            category: categories,
            sentiment: sentiment,
            emotion: emotion,
            temperature: temperature,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}

    const handleWritingStyle = (selectedStyle) => {
        setWritingStyle(selectedStyle);
        console.log(selectedStyle)
    }
    
    const handleThemeChange = (selectedTheme) => {
        setThemes(selectedTheme);
        console.log(selectedTheme)
        }
    
    const handleCategoryChange = (selectedCategory) => {
        setCategories(selectedCategory);
        console.log(selectedCategory)
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

const mappedWritingStyle = data.writingStyle
const mappedThemes = data.themes
const mappedCategories = data.categories
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedTemperature = ['0.0 🫑', '0.2🌶', '0.4🌶🌶', '0.6🌶🌶🌶', '0.8🌶🌶🌶🌶', '1.0🌶🌶🌶🌶🌶',]
const mappedPromptLength = ['one word', 'three words', 'full prompt']

return (
<>
    <h1>Creative Writing</h1>
    <h2>MEDIUM</h2>

    <div>
            <h3> Selected Writing Style: <br></br> {writingStyle}</h3>
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

    <h2>CATEGORIES</h2>
        <div>
            <h3>Selected Category : <br></br> {categories}</h3>
        </div>
        <div>
            {mappedCategories.map((category) => (
                <button key={category} onClick={() => handleCategoryChange(category)}>
                    {category}
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
    
    {postId && <CreativeWritingPrompt postId={postId} />}
</>
)}

export default CreativeWriting;