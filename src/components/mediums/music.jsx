import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import MusicPrompt from "../promptresponse/musicprompt.jsx";
import {useNavigate} from 'react-router-dom'
import ParameterComponent from "../parameters/ParameterComponent.jsx";

const Music = ({ setOutput, output, setMusicGenerativeSpace }) => {
    const [explorations, setExplorations] = useState("");
    const [concepts, setConcepts] = useState("");
    const [elements, setElements] = useState("");
    const [emotion, setEmotion] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);
    const [activeElement, setActiveElement] = useState("explorations");
    const [generateButton, setGenerateButton] = useState(false);

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/music/generate/',{
            exploration: explorations,
            concept: concepts,
            element: elements,
            emotion: emotion,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}
    
        const handleExplorations = (selectedExplorations) => {
            setExplorations(selectedExplorations);
            }
        console.log("explorations", explorations)

        const handleElements = (selectedElements) => {
            setElements(selectedElements);
        }
        console.log("elements", elements)
        
        const handleConcepts = (selectedConcepts) => {
            setConcepts(selectedConcepts);
        }
        console.log("concepts", concepts)
        
        const handleEmotionChange = (selectedEmotion) => {
            setEmotion(selectedEmotion);
            console.log("emotion", emotion)
        }

        const handlePromptLength = (selectedPromptLength) => {
            setPromptLength(selectedPromptLength);
            setGenerateButton(true);
        }
        console.log("promptLength", promptLength)

        const handleClickCreatePage = () => {
            setMusicGenerativeSpace(true)
        }

const mappedExplorations = data.explorations
const mappedConcepts = data.concepts
const mappedEmotion = data.emotion
const mappedElements = data.elements
const mappedPromptLength = data.promptLength

const handleStateSet = (key, value) => {
    if (key === "Music Explorations") {
        handleExplorations(value)
        setActiveElement("elements")
    }
    if (key === "Elements") {
        console.log("key", key)
        console.log("value", value)
        handleElements(value)
        setActiveElement("concepts")
    }
    if (key === "Concepts") {
        handleConcepts(value)
        setActiveElement("emotion")
    }
    if (key === "Emotions") {
        handleEmotionChange(value)
        setActiveElement("promptLength")
    }
    if (key === "Prompt Length") {
        handlePromptLength(value)
    }
}

const keys = ["explorations", "elements", "concepts", "emotion", "promptLength"]

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
            {postId && <MusicPrompt  postId={postId} setOutput={setOutput} output={output} />}
            </div>
            </div>
            <button className="begin-button" onClick={handleClickCreatePage}>
                BEGIN
            </button> 
        </>
    ) : (<></>)
    }
    </>
    );
};

export default Music;