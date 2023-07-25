import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import MovementPrompt from "../promptresponse/movementprompt.jsx";
import {useNavigate} from 'react-router-dom';
import ParameterComponent from "../parameters/ParameterComponent.jsx";

const Movement = ({ setOutput, output, setMovementGenerativeSpace }) => {
    const [movementSomatics, setMovementSomatics] = useState("");
    const [movementThemes, setMovementThemes] = useState("");
    const [emotion, setEmotion] = useState("");
    const [postId, setPostId] = useState(null);
    const [sentiment, setSentiment] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [activeElement, setActiveElement] = useState("movementSomatics");
    const [generateButton, setGenerateButton] = useState(false);

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/movement/generate/',{
            somatic: movementSomatics,
            theme: movementThemes,
            sentiment: sentiment,
            emotion: emotion,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}

    const handleMovementSomatics = (selectedMovementSomatics) => {
        setMovementSomatics(selectedMovementSomatics);
        console.log(selectedMovementSomatics)
    }
    
    const handleMovementThemes = (selectedMovementThemes) => {
        setMovementThemes(selectedMovementThemes);
        console.log(selectedMovementThemes)
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

    const handleMovementClickCreatePage = () => {
        setMovementGenerativeSpace(true)
    }

const mappedMovementSomatics = data.movementSomatics
const mappedMovementThemes = data.movementThemes
const mappedEmotion = data.emotion
const mappedSentiment = data.sentiment
const mappedPromptLength = data.promptLength

const handleStateSet = (key, value) => {
    if (key === "Movement Somatics") {
        handleMovementSomatics(value)
        setActiveElement("movementThemes")
        console.log("key", key)
        console.log("value", value)
    }
    if (key === "Movement Themes") {
        handleMovementThemes(value)
        setActiveElement("emotion")
        console.log("key", key)
        console.log("value", value)
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

const keys = ["movementSomatics", "movementThemes", "emotion", "sentiment", "promptLength"]

return (
<>
<ParameterComponent key={activeElement} data={data[activeElement]} handler={handleStateSet} />

{generateButton ? (
        <>
            <div>
            <div>
                <button className="generate-button" onClick={handlePost}>
                    GENERATE
                </button>     
            </div> 
            <div className="promptresponse">
            {postId && <MovementPrompt  postId={postId} setOutput={setOutput} output={output} />}
            </div>
            </div>
            <button className="begin-button" onClick={handleMovementClickCreatePage}>
                BEGIN
            </button> 
        </>
    ) : (<></>)
    }
</>
)}

export default Movement;