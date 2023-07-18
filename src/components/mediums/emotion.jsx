import data from "/prompt.json";


const Emotion = () => {
    const [emotion, setEmotion] = useState("");

    const handleEmotionChange = (selectedEmotion) => {
        setEmotion(selectedEmotion);
        console.log(selectedEmotion)
    }

    const mappedEmotion = data.emotion

    return(
    <>
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
    </>
    )}

export default Emotion;