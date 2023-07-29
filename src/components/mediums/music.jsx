import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import MusicPrompt from "../promptresponse/musicprompt.jsx";
import {useNavigate} from 'react-router-dom';
import ParameterComponent from "../parameters/ParameterComponent.jsx";
import MediumNav from "../parameters/MediumNav.jsx";

const Music = ({ setOutput, output, setMusicGenerativeSpace }) => {
    const [explorations, setExplorations] = useState("");
    const [concepts, setConcepts] = useState("");
    const [elements, setElements] = useState("");
    const [emotion, setEmotion] = useState("");
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);
    const [activeElement, setActiveElement] = useState("explorations");
    const [generateButton, setGenerateButton] = useState(false);
    const initialNavDataValues = [
        {
          title: "Explorations",
          isActive: true,
        },
        {
          title: "Elements",
          isActive: false,
        },
        {
          title: "Concepts",
          isActive: false,
        },
        {
          title: "Emotion",
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
        });
    };
    
        const handleExplorations = (selectedExplorations) => {
            setExplorations(selectedExplorations);
        };
        

        const handleElements = (selectedElements) => {
            setElements(selectedElements);
        };
        
        
        const handleConcepts = (selectedConcepts) => {
            setConcepts(selectedConcepts);
        };
        
        
        const handleEmotionChange = (selectedEmotion) => {
            setEmotion(selectedEmotion);
        }

        const handlePromptLength = (selectedPromptLength) => {
            setPromptLength(selectedPromptLength);
            setGenerateButton(true);
        }

        const handleClickCreatePage = () => {
            setMusicGenerativeSpace(true)
        }

const mappedExplorations = data.explorations
const mappedConcepts = data.concepts
const mappedEmotion = data.emotion
const mappedElements = data.elements
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

    setNavData(newState);
  };

const handleStateSet = (key, value) => {
    if (key === "Music Explorations") {
        handleExplorations(value)
        const newActiveElement = "elements";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
    }
    if (key === "Elements") {
        console.log("key", key)
        console.log("value", value)
        handleElements(value)
        const newActiveElement = "concepts";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
    }
    if (key === "Concepts") {
        const newActiveElement = "emotion";
        handleConcepts(value)
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
    }
    if (key === "Emotions") {
        const newActiveElement = "promptLength";
        handleEmotionChange(value)
        setActiveElement(newActiveElement);
        handleActiveNav("length");
    }
    if (key === "Prompt Length") {
        handlePromptLength(value);
        const newActiveElement = "generate";
        setActiveElement(newActiveElement);
        setGenerateButton(true);
        handleActiveNav(newActiveElement);
    }

    if (key === "Generate Button"){

    }
};

const keys = ["explorations", "elements", "concepts", "emotion", "promptLength", "generate"]

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
                <div>
                <div>
                    <button className="text-4xl" onClick={handlePost}>
                        GENERATE
                    </button>     
                </div> 
                <div className="promptresponse">
                {postId && (
                    <MusicPrompt  
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

export default Music;