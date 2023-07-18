import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";

const Music = () => {
    const [explorations, setExplorations] = useState("");
    const [concepts, setConcepts] = useState("");
    const [elements, setElements] = useState("");
    const [emotion, setEmotion] = useState("");
    const [temperature, setTemperature] = useState("");
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
            temperature: temperature,
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

    const handleTemperature = (selectedTemperature) => {
        setTemperature(selectedTemperature);
        console.log(selectedTemperature)
    }
    const handlePromptLength = (selectedPromptLength) => {
        setPromptLength(selectedPromptLength);
        console.log(selectedPromptLength)
    }

const mappedExplorations = data.explorations
const mappedConcepts = data.concepts
const mappedEmotion = data.emotion
const mappedElements = data.elements
const mappedTemperature = ['0.0 🫑', '0.2🌶', '0.4🌶🌶', '0.6🌶🌶🌶', '0.8🌶🌶🌶🌶', '1.0🌶🌶🌶🌶🌶',]
const mappedPromptLength = ['one word', 'three words', 'full prompt']

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
            <h3>Selected Category : <br></br> {Concepts}</h3>
        </div>
        <div>
            {mappedConcepts.map((concepts) => (
                <button key={concepts} onClick={() => handleConcepts(Concepts)}>
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

    <h2>SENTIMENT</h2>
        <div>
            <h3>Selected Sentiment: <br></br> {sentiment}</h3>
        </div>   
        <div>
            {mappedSentiment.map((sentiment) => (
                <button key={sentiment} onClick={() => handleSentiment(sentiment)}>
                    {sentiment}
                </button>
            ))}
        </div>
        <br></br>
    
    <h2>On a scale of 🫑-🌶🌶🌶🌶🌶, how creative would you like the prompt to be?</h2>
    <div>
        <h3>{temperature}</h3>
    </div>   
    <div>
        {mappedTemperature.map((temperature) => (
            <button key={temperature} onClick={() => handleTemperature(temperature)}>
                {temperature}
            </button>
        ))}
    </div>
    <br></br>

    <h2>PROMPT LENGTH</h2>
    <div>
        <h3>Selected Prompt Length: <br></br> {PromptLength}</h3>
    </div>   
    <div>
        {mappedPromptLength.map((PromptLength) => (
            <button key={PromptLength} onClick={() => handlePromptLength(PromptLength)}>
                {PromptLength}
            </button>
        ))}
    </div>
    <br></br>

    <button className="generate-button" onClick={handlePost}>
        GENERATE
    </button>      
    
    {postId && <PoetryPrompt postId={postId} />}
</>
)}

export default Music;