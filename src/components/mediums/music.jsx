import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import MusicPrompt from "../promptresponse/musicprompt.jsx";

const Music = () => {
    const [explorations, setExplorations] = useState("");
    const [concepts, setConcepts] = useState("");
    const [elements, setElements] = useState("");
    const [emotion, setEmotion] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);

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
        console.log(selectedExplorations)
        }
    
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
        console.log(selectedElements)
    }

    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
    }

const mappedExplorations = data.explorations
const mappedConcepts = data.concepts
const mappedEmotion = data.emotion
const mappedElements = data.elements
const mappedPromptLength = ['one word', 'three words', 'prompt']

return (
<>
    <h1>MUSIC</h1>
    <h2>EXPLORATIONS</h2>

    <div>
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
            <h3>Selected Category : <br></br> {concepts}</h3>
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
    <br></br>

    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    
    {postId && <MusicPrompt postId={postId} />}
    </>
    );
};

export default Music;