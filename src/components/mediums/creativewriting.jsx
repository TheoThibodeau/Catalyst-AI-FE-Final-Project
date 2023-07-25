import { useState } from "react";
import axios from "axios";
import data from "/prompt.json";
import CreativeWritingPrompt from "../promptresponse/creativewritingprompt.jsx";
import MediumsCWParameters from "../parameters/mediumsCW/";
import ThemesCWParameters from "../parameters/themesCW/";
import {useNavigate} from 'react-router-dom'

const CreativeWriting = ( { setOutput, output, setGenerativeSpace } ) => {

    const [postId, setPostId] = useState(null);
    const [mediumCWStateChange, setMediumCWStateChange] = useState(false);
    const [themesCWStateChange, setThemesCWStateChange] = useState(false);

    const handlePost = (e) => {
        e.preventDefault();
        axios
        .post('https://catalyst-x226.onrender.com/api/write/generate/',{
            style: writingStyle,
            theme: themes,
            category: categories,
            sentiment: sentiment,
            emotion: emotion,
            prompt_length: promptLength,
        })
        .then((response) => {
            console.log(response.data)
            setPostId(response.data.id)
        })}

    const handleClickCreatePage = () => {
        setGenerativeSpace(true)
    }

return (
<>
<div>
    {mediumCWStateChange ? (
        <MediumsCWParameters postId={postId} output={output} />
      ) : (
        <CreativeWriting
          setOutput={setOutput}
          output={output}
          setMediumCWStateChange={setMediumCWStateChange}
        />
    )}
    <button className="flex items-center justify-center p-3 m-3 h-20 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" onClick={handlePost}>
        GENERATE
    </button>   
   <br></br>   
    <div className="border ">
    {postId && <CreativeWritingPrompt postId={postId} setOutput={setOutput} output={output}/>}
    </div>
    <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" onClick={handleClickCreatePage}>
        BEGIN
    </button> 
</div>
</>
)}

export default CreativeWriting;