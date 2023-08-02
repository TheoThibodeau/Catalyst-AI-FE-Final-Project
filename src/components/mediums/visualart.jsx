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
            onClick: () => {
                setActiveElement("visualArtThemes");
                handleActiveNav("themes");
              },
        },
        {
            title: "Emotions",
            isActive: false,
            onClick: () => {
                setActiveElement("emotion");
                handleActiveNav("emotion");
              },
        },
        {
            title: "Elements",
            isActive: false,
            onClick: () => {
                setActiveElement("visualArtElements");
                handleActiveNav("elements");
              },
        },
        {
            title: "Sentiments",
            isActive: false,
            onClick: () => {
                setActiveElement("sentiment");
                handleActiveNav("sentiment");
              },
        },
        {
            title: "Length",
            isActive: false,
            onClick: () => {
                setActiveElement("promptLength");
                handleActiveNav("length");
              },
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
    visualArtThemes: "Select a theme to create the atmosphere of your visual art prompt",
    visualArtElements: "Choose an element as the foundation for your visual art prompt",
    emotion: "Pick an emotion to infuse feeling into your visual art prompt",
    sentiment: "Set the mood and tone of your visual art prompt with a sentiment",
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
        <div className="instruction-container">
        <h2 className='instruction'>{instruction[activeElement]}</h2>
        </div>
      </div>
    </>
  );
  };

export default VisualArt;