import axios from "axios";
import { useState } from "react";
import data from "/prompt.json";
import CreativeWritingPrompt from "../promptresponse/creativewritingprompt.jsx";
import {useNavigate} from 'react-router-dom';
import ParameterComponent from "../parameters/ParameterComponent.jsx";

const CreativeWriting = ( { setOutput, output, setGenerativeSpace } ) => {
    const [themes, setThemes] = useState("");
    const [categories, setCategories] = useState("");
    const [writingStyle, setWritingStyle] = useState("");
    const [postId, setPostId] = useState(null);
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [activeElement, setActiveElement] = useState("themes");
    const [generateButton, setGenerateButton] = useState(false);

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
        setGenerateButton(true);
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
    const mappedPromptLength = data.promptLength

    const handleStateSet = (key, value) => {
        if (key === "Themes") {
            handleThemeChange(value)
            setActiveElement("categories")
        }
        if (key === "Categories") {
            console.log("key", key)
            console.log("value", value)
            handleCategoryChange(value)
            setActiveElement("emotion")
        }
        if (key === "Emotions") {
            handleEmotionChange(value)
            setActiveElement("sentiment")
        }
        if (key === "Sentiment") {
            handleSentimentChange(value)
            setActiveElement("promptLength")
        }
        if (key === "Prompt Length") {
            handlePromptLength(value)
        }
    }

    const keys = ["themes", "categories", "emotion", "sentiment", "promptLength"]

return (
<>
    <ParameterComponent key={activeElement} data={data[activeElement]} handler={handleStateSet} />

<div>

{generateButton ? (
        <>
            <div>
            <div>
                <button  className="text-4xl" onClick={handlePost}>
                    GENERATE
                </button>     
            </div> 
            <div className="promptresponse">
            {postId && <CreativeWritingPrompt  postId={postId} setOutput={setOutput} output={output} />}
            </div>
            </div>
            <button className="begin-button" onClick={handleClickCreatePage}>
                BEGIN
            </button> 
        </>
    ) : (<></>)
    }

</div>
</>
)}

export default CreativeWriting;