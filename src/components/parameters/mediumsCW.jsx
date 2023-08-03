import { useState } from "react";
import data from "/prompt.json";

const MediumsCWParameters = () => {

    const [writingStyle, setWritingStyle] = useState("");

    const handleWritingStyle = (selectedStyle) => {
        setWritingStyle(selectedStyle);
        console.log(selectedStyle)
    }

    const mappedWritingStyle = data.writingStyle

return (
<>
<div className="flex flex-col font-mono text items-center justify-center space-y-2">
    <h1 className="text-center ">Creative Writing</h1>
    <h2>MEDIUM</h2>

    <div>
            <h3> Selected Writing Style: <br></br> {writingStyle}</h3>
        </div>
        <div className="flex flex-wrap">
            {mappedWritingStyle.map((style) => (
            <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={style} onClick={() => handleWritingStyle(style)}>
                {style}
            </button>
            ))}

            </div>    
        <br></br>
</div>
    </>
)
}

export default MediumsCWParameters;