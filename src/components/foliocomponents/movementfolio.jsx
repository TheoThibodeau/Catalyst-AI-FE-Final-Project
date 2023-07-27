import { useState } from 'react';
import axios from 'axios';

const MovementFolio = () => {
  const [folios, setFolios] = useState([]);
  const [output, setOutput] = useState([]);
  const [created_at, setCreated_at] = useState([]);
  const [note, setNote] = useState([]);
  const [somatic, setSomatic] = useState([]);
  const [theme, setTheme] = useState([]);
  const [emotion, setEmotion] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [promptLength, setPromptLength] = useState([]);
  const [movementVisible, setMovementVisible] = useState(false);

  const handleMovementPost = (e) => {
      axios
        .get(`https://catalyst-x226.onrender.com/api/movement/`)
        .then((response) => {
          setOutput(response.data[0].output);
          setCreated_at(response.data[0].created_at);
          setNote(response.data[0].note);
          setSomatic(response.data[0].somatic);
          setTheme(response.data[0].theme);
          setEmotion(response.data[0].emotion);
          setSentiment(response.data[0].sentiment);
          setPromptLength(response.data[0].promptLength);
          setMovementVisible(true);
        })
        .catch((error) => console.error(error));
    }

  return (
    <>
      <div>

        <button onClick={handleMovementPost}>Movement</button>
      </div>

      {movementVisible && (
        <div>
          <h3>A.I Generate Prompt: {output}</h3>
          <h3>Date of Creation: {created_at}</h3>
          <h3>Notes: {note}</h3>
          <h3>Prompt Parameters: {somatic} {theme} {emotion} {sentiment} {promptLength}</h3>
        </div>
      )}
    </>
  );
};

export default MovementFolio;