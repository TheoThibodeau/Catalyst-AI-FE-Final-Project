import { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const MusicFolio = () => {
  const [folios, setFolios] = useState([]);
  const [output, setOutput] = useState([]);
  const [created_at, setCreated_at] = useState([]);
  const [note, setNote] = useState([]);
  const [concept, setConcept] = useState([]);
  const [element, setElement] = useState([]);
  const [emotion, setEmotion] = useState([]);
  const [exploration, setExploration] = useState([]);
  const [promptLength, setPromptLength] = useState([]);
  const [musicVisible, setMusicVisible] = useState(false);

  const handleMusicPost = (e) => {
      axios
        .get(`https://catalyst-x226.onrender.com/api/music/`)
        .then((response) => {
          setOutput(response.data[0].output);
          setCreated_at(response.data[0].created_at);
          setNote(response.data[0].note);
          setConcept(response.data[0].concept);
          setElement(response.data[0].element);
          setEmotion(response.data[0].emotion);
          setExploration(response.data[0].exploration);
          setPromptLength(response.data[0].promptLength);
          setMusicVisible(true);
        })
        .catch((error) => console.error(error));
    }

  return (
    <>
      <div>
          <button onClick={handleMusicPost}>Music</button>
      </div>

      {musicVisible && (
        <div>
          <h3>A.I Generate Prompt: {output}</h3>
          <h3>Date of Creation: {dayjs(created_at).format('MM-DD-YYYY HH:mm:ss')}</h3>
          <h3>Notes: {note}</h3>
          <h3>Prompt Parameters: {concept} {element} {emotion} {exploration} {promptLength}</h3>
        </div>
      )}

    </>
  );
};

export default MusicFolio;