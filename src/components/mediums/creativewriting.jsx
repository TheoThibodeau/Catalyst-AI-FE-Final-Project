import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import CreativeWritingPrompt from "../promptresponse/creativewritingprompt.jsx";
import {useNavigate} from 'react-router-dom'

const CreativeWriting = ( { setOutput, output, setGenerativeSpace } ) => {
    const [themes, setThemes] = useState("");
    const [categories, setCategories] = useState("");
    const [writingStyle, setWritingStyle] = useState("");
    const [postId, setPostId] = useState(null);
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
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

    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
    }

    const handleClickCreatePage = () => {
        setGenerativeSpace(true)
    }

    const mappedWritingStyle = data.writingStyle
    const mappedThemes = data.themes
    const mappedCategories = data.categories
    const mappedEmotion = data.emotion
    const mappedSentiment = data.sentiment
    const mappedPromptLength = ['one word', 'three words', 'prompt']

return (
<>
    <h1>Creative Writing</h1>
    <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1> 

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

    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>   
   <br></br>   
    <div className="promptbox">
    {postId && <CreativeWritingPrompt postId={postId} setOutput={setOutput} output={output}/>}
    </div>
    <button className="begin-button" onClick={handleClickCreatePage}>
        BEGIN
    </button> 
</>
)}

export default CreativeWriting;