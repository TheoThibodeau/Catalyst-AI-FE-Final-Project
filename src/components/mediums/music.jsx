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
        
    const handleConcepts = (selectedConcepts) => {
        setConcepts(selectedConcepts);
        console.log(selectedConcepts)
    }

    const handleEmotionChange = (selectedEmotion) => {
        setEmotion(selectedEmotion);
        console.log(selectedEmotion)
    }

    const handleElements = (selectedElements) => {
        setElements(selectedElements);
    }
    console.log("elements", elements)

    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
    }

    const handleClickCreatePage = () => {
        setMusicGenerativeSpace(true)
    }

const mappedExplorations = data.explorations
const mappedConcepts = data.concepts
const mappedEmotion = data.emotion
const mappedElements = data.elements
const mappedPromptLength = ['one word', 'three words', 'prompt']

const handleStateSet = (key, value) => {
    if (key === "Music Explorations") {
        console.log("key", key)
        console.log("value", value)
        handleExplorations(value)
        setActiveElement("elements")
    }
    if (key === "Elements") {
        handleElements(value)
    }
    // if (key === "explorations") {
    //     handleExplorations(value)
    // }
    // if (key === "explorations") {
    //     handleExplorations(value)
    // }
    // if (key === "explorations") {
    //     handleExplorations(value)
    // }
    // if (key === "explorations") {
    //     handleExplorations(value)
    // }
}
// const renderActiveState = (key) => {
//     if key === 
// }
const keys = ["explorations", "elements"]

return (
<>

    {/* <h1>MUSIC</h1>
    <h2>EXPLORATIONS</h2> */}
    {/* {keys.map(key => ( */}
        <ParameterComponent key={activeElement} data={data[activeElement]} handler={handleStateSet} />
    {/* ))} */}

    {/* <div>
            <h3> Selected Explorations: <br></br> {explorations}</h3>
        </div>
        <div>
            {mappedExplorations.map((explorations) => (
            <button key={explorations} onClick={() => handleExplorations(explorations)}>
                {explorations}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>ELEMENTS</h2>

        <div>
            <h3> Selected Element: <br></br> {elements}</h3>
        </div>
        <div>
            {mappedElements.map((elements) => (
            <button key={elements} onClick={() => handleElements(elements)}>
                {elements}
            </button>
            ))}

            </div>    
        <br></br>

    <h2>CONCEPTS</h2>
        <div>
            <h3>Selected Concept : <br></br> {concepts}</h3>
        </div>
        <div>
            {mappedConcepts.map((concepts) => (
                <button key={concepts} onClick={() => handleConcepts(concepts)}>
                    {concepts}
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
    <br></br> */}
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
    );
};

export default Music;