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

return (
<>
    <h1>Poetry</h1>
    <h2>THEMES</h2>
        <div>
            <button>Association</button>
            <button>Emotion Exploration</button>
            <button>Historical/Cultural</button>
            <button>Conceptual</button>
        </div>
        <br></br>
    <h2>CATEGORIES</h2>
        <div>
            <button>Relationship and Love</button>
            <button>Nature and Environment</button>
            <button>Personal Growth and Reflection</button>
            <button>Social Issues and Advocacy</button>
            <button>Advocacy</button>
            <button>Mythology and Folklore</button>
            <button>Surrealism and Dreams</button>
            <button>History</button>
            <button>Identity and Diversity</button>
            <button>Imagery and Symbolism</button>
        </div>
        <br></br>
    <h2>SENTIMENT</h2>
        <div>
            <button>Harmony</button>
            <button>Resilience</button>
            <button>Fragility</button>
            <button>Majesty</button>
            <button>Serenity</button>
            <button>Wonder</button>
            <button>Transience</button>
            <button>Connection</button>
            <button>Solitude</button>
            <button>Renewal</button>
        </div>    
        <br></br>
    <h2>EMOTION</h2>
        <div>
            <button>Joy</button>
            <button>Courage</button>
            <button>Melancholy</button>
            <button>Euphoria</button>
            <button>Longing</button>
            <button>Hope</button>
            <button>Awe</button>
            <button>Bliss</button>
            <button>Anguish</button>
            <button>Greif</button>
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