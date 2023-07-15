import React from "react";
import { useState } from "react";
import axios from "axios";

const Poetry = () => {
    const [themes, setThemes] = useState("");
    const [categories, setCategories] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [emotion, setEmotion] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/poem/generate',{
            themes: themes,
            categories: categories,
            sentiment: sentiment,
            emotion: emotion,
        })
        .then(() => {
            setThemes("");
            setCategories("");
            setSentiment("");
            setEmotion("");
        })
        .catch((error) => console.error(error));
    }

    const handleThemeChange = (selectedTheme) => {
        setThemes(selectedTheme);
        console.log(selectedTheme)
        }
    
    const handleCategoriesChange = (selectedCategory) => {
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

const mappedThemes = ['Association','Emotion Exploration','Historical/Cultural','Conceptual']

return (
<>
    <h1>Poetry</h1>
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
            <button onClick={() => handleCategoriesChange('Relationship and Love')}>Relationship and Love</button>
            <button onClick={() => handleCategoriesChange('Nature and Environment')}>Nature and Environment</button>
            <button onClick={() => handleCategoriesChange('Personal Growth and Reflection')}>Personal Growth and Reflection</button>
            <button onClick={() => handleCategoriesChange('Social Issues and Advocacy')}>Social Issues and Advocacy</button>
            <button onClick={() => handleCategoriesChange('Advocacy')}>Advocacy</button>
            <button onClick={() => handleCategoriesChange('Mythology and Folklore')}>Mythology and Folklore</button>
            <button onClick={() => handleCategoriesChange('Surrealism and Dreams')}>Surrealism and Dreams</button>
            <button onClick={() => handleCategoriesChange('History')}>History</button>
            <button onClick={() => handleCategoriesChange('Identity and Diversity')}>Identity and Diversity</button>
            <button onClick={() => handleCategoriesChange('Imagery and Symbolism')}>Imagery and Symbolism</button>
        </div>
        <br></br>
    <h2>SENTIMENT</h2>
        <div>
            <button onClick={() => handleSentimentChange('Harmony')}>Harmony</button>
            <button onClick={() => handleSentimentChange('Resilience')}>Resilience</button>
            <button onClick={() => handleSentimentChange('Fragility')}>Fragility</button>
            <button onClick={() => handleSentimentChange('Majesty')}>Majesty</button>
            <button onClick={() => handleSentimentChange('Serenity')}>Serenity</button>
            <button onClick={() => handleSentimentChange('Wonder')}>Wonder</button>
            <button onClick={() => handleSentimentChange('Transience')}>Transience</button>
            <button onClick={() => handleSentimentChange('Connection')}>Connection</button>
            <button onClick={() => handleSentimentChange('Solitude')}>Solitude</button>
            <button onClick={() => handleSentimentChange('Renewal')}>Renewal</button>
        </div>    
        <br></br>
    <h2>EMOTION</h2>
        <div>
        <button onClick={() => handleEmotionChange('Joy')}>Joy</button>
                <button onClick={() => handleEmotionChange('Courage')}>Courage</button>
                <button onClick={() => handleEmotionChange('Melancholy')}>Melancholy</button>
                <button onClick={() => handleEmotionChange('Euphoria')}>Euphoria</button>
                <button onClick={() => handleEmotionChange('Longing')}>Longing</button>
                <button onClick={() => handleEmotionChange('Hope')}>Hope</button>
                <button onClick={() => handleEmotionChange('Awe')}>Awe</button>
                <button onClick={() => handleEmotionChange('Bliss')}>Bliss</button>
                <button onClick={() => handleEmotionChange('Anguish')}>Anguish</button>
                <button onClick={() => handleEmotionChange('Grief')}>Grief</button>
        </div>
    <br></br>
    <br></br>
    <br></br>
    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>
        
</>
)
}

export default Poetry