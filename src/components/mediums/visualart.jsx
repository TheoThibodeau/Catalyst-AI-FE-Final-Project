import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import VisualArtPrompt from "../promptresponse/visualartprompt.jsx";
import {useNavigate} from 'react-router-dom';
import ParameterComponent from "../parameters/ParameterComponent.jsx";


const VisualArt = ({ setOutput, output, setVisualArtGenerativeSpace }) => {
    const [visualArtThemes, setVisualArtThemes] = useState("");
    const [visualArtMedium, setVisualArtMedium] = useState("");
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);
    const [activeElement, setActiveElement] = useState("visualArtThemes");
    const [generateButton, setGenerateButton] = useState(false);
   

    const handlePost = (e) => {
        
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/visual_art/generate/',{
            theme: visualArtThemes,
            medium: visualArtMedium,
            sentiment: sentiment,
            emotion: emotion,
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

    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
        setGenerateButton(true);
    }

    const handleClickCreatePage = () => {
        setVisualArtGenerativeSpace(true)
    }

const mappedVisualArtThemes = data.visualArtThemes
const mappedVisualArtMedium = data.visualArtMedium
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedPromptLength = data.promptLength

const handleStateSet = (key, value) => {
    if (key === "Visual Art Themes") {
        handleVisualArtThemes(value)
        setActiveElement("visualArtMedium")
    }
    if (key === "Medium") {
        console.log("key", key)
        console.log("value", value)
        handleVisualArtMedium(value)
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

const keys = ["visualArtThemes", "visualArtMedium", "emotion", "sentiment", "promptLength"]


return (
<>

<ParameterComponent key={activeElement} data={data[activeElement]} handler={handleStateSet} />

{generateButton ? (
        <>
        <div className="container">
        <div className="robot"></div>
        </div>
            <div>
            <div>
                <button className="generate-button" onClick={handlePost}>
                    GENERATE
                </button>     
            </div> 
            <div className="promptresponse">
            {postId && <VisualArtPrompt  postId={postId} setOutput={setOutput} output={output} />}
            </div>
            </div>
            <button className="begin-button" onClick={handleClickCreatePage}>
                BEGIN
            </button> 
        </>
    ) : (<></>)
    }
</>
)}

export default VisualArt;