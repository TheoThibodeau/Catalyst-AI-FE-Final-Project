import { useState } from "react";
import data from "/prompt.json";

const ThemesCWParameters = () => {
    const [themes, setThemes] = useState("");

    const handleThemeChange = (selectedTheme) => {
        setThemes(selectedTheme);
        console.log(selectedTheme);
    }

    const mappedThemes = data.themes;

    return (
        <>
            <div className="flex flex-col font-mono text items-center justify-center space-y-2">
                <h2>THEMES</h2>
                <div>
                    <h3>Selected Theme: <br /> {themes}</h3>
                </div>
                <div className="flex flex-wrap">
                    {mappedThemes.map((theme) => (
                        <button className="flex items-center justify-center p-3 m-3 h-15 bg-white border border-black hover:bg-gray-200 text-black font-sans rounded-md" key={theme} onClick={() => handleThemeChange(theme)}>
                            {theme}
                        </button>
                    ))}
                </div>
                <br />
            </div>
        </>
    );
}

export default ThemesCWParameters;