import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import PoetryPrompt from "./promptresponse";

const Poetry = () => {
    const [themes, setThemes] = useState("");
    const [categories, setCategories] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [writingStyle, setWritingStyle] = useState("");
    const [emotion, setEmotion] = useState("");
    const [postId, setPostId] = useState(null);

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/write/generate/',{
            style: writingStyle,
            theme: themes,
            category: categories,
            sentiment: sentiment,
            emotion: emotion,
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

    const handleSentimentChange = (selectedSentiment) => {
        setSentiment(selectedSentiment);
        console.log(selectedSentiment)
    }

    const handleEmotionChange = (selectedEmotion) => {
        setEmotion(selectedEmotion);
        console.log(selectedEmotion)
    }

const mappedWritingStyle = data.writingStyle
const mappedThemes = data.themes
const mappedCategories = data.categories
const mappedSentiment = data.sentiment
const mappedEmotion = data.emotion

return (
<>
    <h1>Creative Writing</h1>
    <h2>MEDIUM</h2>

    <div>
            <h3> Selected Theme: <br></br> {writingStyle}</h3>
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
    <br></br>
    <br></br>
    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    
    {postId && <PoetryPrompt postId={postId} />}
</>
)}

export default Poetry;