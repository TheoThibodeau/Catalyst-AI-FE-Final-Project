import { useState } from "react";
import axios from "axios";
import PoetryPrompt from "./promptresponse";

const Poetry = () => {
    const [themes, setThemes] = useState("");
    const [categories, setCategories] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [emotion, setEmotion] = useState("");
    const [postId, setPostId] = useState(null);

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/write/generate/',{
            theme: themes,
            category: categories,
            sentiment: sentiment,
            emotion: emotion,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}
    
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

const mappedThemes = ['association','emotion', 'exploration','historical and cultural','conceptual']
const mappedCategories = ['relationship and love','mythology and folklore', 'surrealism and dreams', 'history', 'identity and diversity', 'nature and environment','personal growth and reflection', 'social issues and advocacy', 'imagery and symbolism']
const mappedSentiment = ['harmony','resilience','fragility','majesty','serenity','wonder','transience','connection','solitude','renewal']
const mappedEmotion= ['joy','courage','melancholy','euphoria','longing','hope','awe','bliss','anguish','grief']


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