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

const mappedThemes = ['association','emotion exploration','historical/cultural','conceptual']
const mappedCategories = ['relationship and love','nature and environment','personal growth and reflection', 'social issues and advocay']
const mappedSentiment = ['harmony','resilience','fragility','majesty','serenity','wonder','transcience','connection','solitude','renewal']

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
            <h3>Selected Category : <br></br> {categories}</h3>
        </div>
        <div>
            {mappedCategories.map((categoies) => (
                <button key={categories} onClick={() => handleCategoriesChange(category)}>
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
        <button onClick={() => handleEmotionChange('Joy')}>Joy</button>
                <button onClick={() => handleEmotionChange('courage')}>Courage</button>
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