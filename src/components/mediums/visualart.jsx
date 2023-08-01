import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import VisualArtPrompt from "../promptresponse/visualartprompt.jsx";
import {useNavigate} from 'react-router-dom';
import ParameterComponent from "../parameters/ParameterComponent.jsx";
import MediumNav from "../parameters/MediumNav.jsx"; 
import LoadingRobot from "./../robot.jsx";

const VisualArt = ({ setOutput, output, setVisualArtGenerativeSpace }) => {
    const [visualArtThemes, setVisualArtThemes] = useState("");
    const [emotion, setEmotion] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [visualArtElements, setVisualArtElements] = useState("")
    const [promptLength, setPromptLength] = useState("");
    const [postId, setPostId] = useState(null);
    const [activeElement, setActiveElement] = useState("visualArtThemes");
    const [generateButton, setGenerateButton] = useState(false);
    const [beginButtonVisible, setBeginButtonVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const initialNavDataValues = [
        {
            title: "Themes",
            isActive: true,
        },
        {
            title: "Emotion",
            isActive: false,
        },
        {
            title: "Elements",
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
    const [isLoading, setIsLoading] = useState(false);

    const handlePost = (e) => {
        setIsLoading(true);
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/visual_art/generate/',{
            theme: visualArtThemes,
            sentiment: sentiment,
            element: visualArtElements,
            emotion: emotion,
            prompt_length: promptLength,
        })
        .then((response) => {
            setPostId(response.data.id);
            setBeginButtonVisible(true);
            setIsClicked(true);
            })
        .finally(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)}, 1000)
    })
    }

    const handleVisualArtThemes = (selectedVisualArtThemes) => {
        setVisualArtThemes(selectedVisualArtThemes);
        console.log(selectedVisualArtThemes)
        }

    const handleEmotionChange = (selectedEmotion) => {
        setEmotion(selectedEmotion);
        console.log(selectedEmotion)
    }

    const handleVisualArtElements = (selectedVisualArtElements) => {
        setVisualArtElements(selectedVisualArtElements);
        console.log(selectedVisualArtElements)
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

    const handleGenerate = (selectedGenerate) => {
        setGenerate(selectedGenerate);
        setBeginButtonVisible(true);
      };    

    const handleClickCreatePage = () => {
        setVisualArtGenerativeSpace(true)
    }

    const handleBack = () => {
      const currentActiveIndex = keys.indexOf(activeElement);
      const previousActiveIndex = currentActiveIndex - 1;
      
      if (previousActiveIndex >= 0) {
        setActiveElement(keys[previousActiveIndex]);
      }
    };

const mappedVisualArtThemes = data.visualArtThemes
const mappedEmotion = data.emotion
const mappedVisualArtElements = data.visualArtElements
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
        const newActiveElement = "emotion";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
        
    }

    if (key === "Emotions") {
        handleEmotionChange(value)
        const newActiveElement = "visualArtElements";
        setActiveElement(newActiveElement);
        handleActiveNav(newActiveElement);
    }

    if (key === "Visual Art Elements") {
        handleVisualArtElements(value)
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
        handlePromptLength(value);
        const newActiveElement = "generate";
        setActiveElement(newActiveElement);
        setGenerateButton(true);
        handleActiveNav(newActiveElement);
    }

    if (key === "Generate Button"){
        handleGenerate(value);
    }
}

const keys = ["visualArtThemes", "emotion", "visualArtElements", "sentiment", "promptLength", "generate"]

const instruction = {
    themes: "Choose a theme to set the atmosphere for your visual art prompt",
    element: "Choose an element as the building blocks for your visual art prompt",
    emotion: "Choose an emotion as the driving force in your visual art prompt",
    sentiment: "Choose a sentiment to set the overall mood and tone of your visual art prompt",
    length: "How long will your visual art prompt be?"
}

return (
    <>
      <div className="flex flex-col items-center justify-center space-y-10 h-screen">
        <div>
            {isLoading ?(
                <LoadingRobot/>
            ) : (
          <div className="flex flex-col items-center ">
            {generateButton ? (
              <>
                <div>
                  <div className="flex justify-center">
                  {isClicked ?
                      <button 
                      onClick={handlePost}
                      className="begin-button border border-slate-400 p-4"
                      >
                        REGENERATE
                      </button>
                      :
                      <button
                        className="text-4xl m-10 p-8 bg-slate-200 border border-slate-500"
                        onClick={handlePost}
                        key="generateButton"
                      >
                        GENERATE
                      </button>
                    }
                  </div>
                  <div className="font-serif text-3xl text-center pr-6 pt-24 pl-6 pb-24 ">
                    {postId && (
                      <VisualArtPrompt
                        postId={postId}
                        setOutput={setOutput}
                        output={output}
                      />
                    )}
                  </div>
                </div>
                {beginButtonVisible && (
                  <button
                    className="text-4xl  p-8 bg-slate-200 border border-slate-500"
                    onClick={handleClickCreatePage}
                  >
                    CREATE
                  </button>
                )}
              </>
            ) : (
            <div>
              <ParameterComponent
                key={activeElement}
                data={data[activeElement]}
                handler={handleStateSet}
                mediumNavComponent={<MediumNav navData={navData} />}
              />
             
          </div>
            )}
          </div>
            )}
        </div>
      </div>
    </>
  );
  };

export default VisualArt;