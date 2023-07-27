import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import VisualArtPrompt from "../promptresponse/visualartprompt.jsx";
import {useNavigate} from 'react-router-dom';
import ParameterComponent from "../parameters/ParameterComponent.jsx";
import MediumNav from "../parameters/MediumNav.jsx"; 

const VisualArt = ({ setOutput, output, setVisualArtGenerativeSpace }) => {
    const [visualArtThemes, setVisualArtThemes] = useState("");
    const [visualArtMedium, setVisualArtMedium] = useState("");
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);
    const [activeElement, setActiveElement] = useState("visualArtThemes");
    const [generateButton, setGenerateButton] = useState(false);
    const initialNavDataValues = [
        {
            title: "Themes",
            isActive: true,
        },
        {
            title: "Medium", 
            isActive: false,
        },
        {
            title: "Emotion",
            isActive: false,
        },
        {
            title: "Sentiment",
            isActive: false,
        },
        {
            title: "Length",
            isActive: false,
        },
    ];
    const [navData, setNavData] = useState(initialNavDataValues);

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

const handleActiveNav = (newValue) => {
    const newState = navData.map(datum => {
        if (datum.isActive) {
            datum.isActive = false
            return datum
        }

        if (datum.title.toLowerCase() === newValue) {
            datum.isActive = true
            return datum
        }

        return datum
    })

    setNavData(newState)
};

const handleStateSet = (key, value) => {
    if (key === "Visual Art Themes") {
        handleVisualArtThemes(value)
        const newActiveElement = "visualArtMedium";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
        
    }
    if (key === "Medium") {
        handleVisualArtMedium(value)
        const newActiveElement = "emotion";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
    }
    if (key === "Emotions") {
        handleEmotionChange(value)
        const newActiveElement = "sentiment";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
    }
    if (key === "Sentiment") {
        handleSentimentChange(value)
        const newActiveElement = "promptLength";
        setActiveElement(newActiveElement);
        handleActiveNav("length");
    }
    if (key === "Prompt Length") {
        handlePromptLength(value)
    }
}

const keys = ["visualArtThemes", "visualArtMedium", "emotion", "sentiment", "promptLength"]


return (
<>
<div></div>

<div>
<ParameterComponent 
key={activeElement} 
data={data[activeElement]} 
handler={handleStateSet}
mediumNavComponent={<MediumNav navData={navData} />}
        />
    </div>
    <div>
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
            {postId && (
                <VisualArtPrompt  
                postId={postId} 
                setOutput={setOutput} 
                output={output} 
             />
            )}
            </div>
            </div>
            <button className="begin-button" onClick={handleClickCreatePage}>
                BEGIN
            </button> 
        </>
    ) : (
        <></>
    )}
    </div>
</>
);
};
export default VisualArt;