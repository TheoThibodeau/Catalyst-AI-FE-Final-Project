import axios from "axios";
import { useState } from "react";
import data from "/prompt.json";
import CreativeWritingPrompt from "../promptresponse/creativewritingprompt.jsx";
import ParameterComponent from "../parameters/ParameterComponent.jsx";
import MediumNav from "../parameters/MediumNav.jsx";
import LoadingRobot from "./../robot.jsx";
import NavBar from "../navbar.jsx";

const CreativeWriting = ({ setOutput, output, setGenerativeSpace }) => {
  const [themes, setThemes] = useState("");
  const [categories, setCategories] = useState("");
  const [writingStyle, setWritingStyle] = useState("");
  const [postId, setPostId] = useState(null);
  const [emotion, setEmotion] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [promptLength, setPromptLength] = useState("");
  const [activeElement, setActiveElement] = useState("themes");
  const [generateButton, setGenerateButton] = useState(false);
  const [beginButtonVisible, setBeginButtonVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const initialNavDataValues = [
    {
      title: "Themes",
      isActive: true,
    },
    {
      title: "Categories",
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
  const [isLoading, setIsLoading] = useState(false);

  const handlePost = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://catalyst-x226.onrender.com/api/write/generate/", {
        style: writingStyle,
        theme: themes,
        category: categories,
        sentiment: sentiment,
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
            setIsLoading(false)}, 3000)
      })
  };

  const handleThemeChange = (selectedTheme) => {
    setThemes(selectedTheme);
    console.log(selectedTheme);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategories(selectedCategory);
    console.log(selectedCategory);
  };

  const handleEmotionChange = (selectedEmotion) => {
    setEmotion(selectedEmotion);
    console.log(selectedEmotion);
  };

  const handleSentimentChange = (selectedSentiment) => {
    setSentiment(selectedSentiment);
    console.log(selectedSentiment);
  };

  const handlePromptLength = (selectedPromptLength) => {
    setPromptLength(selectedPromptLength);
    setGenerateButton(true);
    console.log(selectedPromptLength);
  };

  const handleGenerate = (selectedGenerate) => {
    setGenerate(selectedGenerate);
  };    

  const handleClickCreatePage = () => {
    setGenerativeSpace(true);
  };

  const handleBack = () => {
    const currentActiveIndex = keys.indexOf(activeElement);
    const previousActiveIndex = currentActiveIndex - 1;
    
    if (previousActiveIndex >= 0) {
      setActiveElement(keys[previousActiveIndex]);
    }
  };
  
  const mappedWritingStyle = data.writingStyle;
  const mappedThemes = data.themes;
  const mappedCategories = data.categories;
  const mappedEmotion = data.emotion;
  const mappedSentiment = data.sentiment;
  const mappedPromptLength = data.promptLength;

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
  console.log("navData",navData)

  const handleStateSet = (key, value) => {
    console.log("key", key);
    if (key === "Themes") {
      handleThemeChange(value);
      const newActiveElement = "categories";
      setActiveElement(newActiveElement);
      handleActiveNav(newActiveElement);
    }
    if (key === "Categories") {
      handleCategoryChange(value);
      const newActiveElement = "emotion";
      setActiveElement(newActiveElement);
      handleActiveNav(newActiveElement);
    }
    if (key === "Emotions") {
      handleEmotionChange(value);
      const newActiveElement = "sentiment";
      setActiveElement(newActiveElement);
      handleActiveNav(newActiveElement);
    }
    if (key === "Sentiment") {
      handleSentimentChange(value);
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

  if (key === "generateButton"){
    handleGenerate(value);
  }
  };

  const keys = ["themes", "categories", "emotion", "sentiment", "promptLength", "generate"];

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
                  <div className="font-serif text-3xl text-center pr-6 pt-10 pl-6 pb-16">
                    {postId && (
                      <CreativeWritingPrompt
                        postId={postId}
                        setOutput={setOutput}
                        output={output}
                      />
                    )}
                  </div>
                </div>
                {beginButtonVisible && (
                  <button
                  className="text-4xl m-10 p-8 bg-slate-200 border border-slate-300"
                  onClick={handleClickCreatePage}
                  >
                    BEGIN
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
              <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-slate-50 border border-slate-200 p-3">
                <div className="flex items-center">
                  <button
                    className="text-1xl text-slate-500"
                    onClick={handleBack}>
                    Back
                  </button>
                </div>
              </div>
              </div>
            )}
          </div>
            )}
        </div>
      </div>
    </>
  );
};

export default CreativeWriting;