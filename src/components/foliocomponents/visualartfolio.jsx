import { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const VisualArtFolio = () => {
  const [folios, setFolios] = useState([]);
  const [output, setOutput] = useState([]);
  const [created_at, setCreated_at] = useState([]);
  const [note, setNote] = useState([]);
  const [theme, setTheme] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [emotion, setEmotion] = useState([]);
  const [promptLength, setPromptLength] = useState([]);
  const [visualArtDataVisible, setVisualArtDataVisible] = useState(false);

  const handleVisualArtPost = (e) => {
      axios
        .get(`https://catalyst-x226.onrender.com/api/visual_art/`)
        .then((response) => {
          setOutput(response.data[0].output);
          setCreated_at(response.data[0].created_at);
          setNote(response.data[0].note);
          setTheme(response.data[0].theme);
          setSentiment(response.data[0].sentiment);
          setEmotion(response.data[0].emotion);
          setPromptLength(response.data[0].promptLength);
          setVisualArtDataVisible(true);
        })
        .catch((error) => console.error(error));
    }

  return (
    <>
      <div>
      <button onClick={handleVisualArtPost}>Visual Art</button>
      </div>
      
      {visualArtDataVisible && (
        <div>
          <h3>A.I Generate Prompt: {output}</h3>
          <h3>Date of Creation: {dayjs(created_at).format('MM-DD-YYYY HH:mm:ss')}</h3>
          <h3>Notes: {note}</h3>
          <h3>Prompt Parameters: {theme} {sentiment} {emotion} {promptLength}</h3>
        </div>
      )}
    </>
  );
};

export default VisualArtFolio;