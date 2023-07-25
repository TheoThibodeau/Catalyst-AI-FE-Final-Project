import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import CreativeWritingPrompt from "../promptresponse/creativewritingprompt.jsx";
import MediumsCWParameters from "../parameters/mediumsCW/";
import ThemesCWParameters from "../parameters/themesCW/";
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
<div className="flex flex-col font-mono text items-center justify-center space-y-2">
    <h1 className="text-center  ">Creative Writing</h1>
    <h2>MEDIUM</h2>

    <div>
            <h3> Selected Writing Style: <br></br> {writingStyle}</h3>
        </div>
        <div className="flex flex-wrap">
            {mappedWritingStyle.map((style) => (
            <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={style} onClick={() => handleWritingStyle(style)}>
                {style}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>THEMES</h2>

        <div>
            <h3> Selected Theme: <br></br> {themes}</h3>
        </div>
        <div className="flex flex-wrap">
            {mappedThemes.map((theme) => (
            <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={theme} onClick={() => handleThemeChange(theme)}>
                {theme}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>CATEGORIES</h2>
        <div>
            <h3>Selected Category : <br></br> {categories}</h3>
        </div>
        <div className="flex flex-wrap">
            {mappedCategories.map((category) => (
                <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={category} onClick={() => handleCategoryChange(category)}>
                    {category}
                </button>
            ))}
            </div>
        <br></br>
    
    <h2>EMOTION</h2>
    <div>
        <h3>Selected Emotion: <br></br> {emotion}</h3>
    </div>   
    <div className="flex"> 
        {mappedEmotion.map((emotion) => (
            <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={emotion} onClick={() => handleEmotionChange(emotion)}>
                {emotion}
            </button>
        ))}
    </div>
    <br></br>

    <h2>SENTIMENT</h2>
        <div>
            <h3>Selected Sentiment: <br></br> {sentiment}</h3>
        </div>   
        <div className="flex">
            {mappedSentiment.map((sentiment) => (
                <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={sentiment} onClick={() => handleSentimentChange(sentiment)}>
                    {sentiment}
                </button>
            ))}
        </div>
        <br></br>

    <h2>PROMPT LENGTH</h2>
    <div>
        <h3>Selected Prompt Length: <br></br> {promptLength}</h3>
    </div>   
    <div className="flex flex-wrap">
        {mappedPromptLength.map((promptLength) => (
            <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={promptLength} onClick={() => handlePromptLength(promptLength)}>
                {promptLength}
            </button>
        ))}
    </div>
    <br></br>

    <button className="flex items-center justify-center p-3 m-3 h-20 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" onClick={handlePost}>
        GENERATE
    </button>   
   <br></br>   
    <div className="border ">
    {postId && <CreativeWritingPrompt postId={postId} setOutput={setOutput} output={output}/>}
    </div>
    <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" onClick={handleClickCreatePage}>
        BEGIN
    </button> 
</div>
</>
)}

export default CreativeWriting;