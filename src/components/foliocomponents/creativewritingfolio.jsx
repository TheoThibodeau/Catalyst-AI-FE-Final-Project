import { useState } from 'react';
import axios from 'axios';

const CreativeWritingFolio = () => {
  const [folios, setFolios] = useState([]);
  const [output, setOutput] = useState([]);
  const [created_at, setCreated_at] = useState([]);
  const [note, setNote] = useState([]);
  const [theme, setTheme] = useState([]);
  const [category, setCategory] = useState([]);
  const [emotion, setEmotion] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [promptLength, setPromptLength] = useState([]);
  const [creativeWritingVisible, setCreativeWritingVisible] = useState(false);

  const handleCreativeWritingPost = (e) => {
      axios
        .get(`https://catalyst-x226.onrender.com/api/write/`)
        .then((response) => {
          setOutput(response.data[0].output);
          setCreated_at(response.data[0].created_at);
          setNote(response.data[0].note);
          setTheme(response.data[0].theme);
          setCategory(response.data[0].category);
          setEmotion(response.data[0].emotion);
          setSentiment(response.data[0].sentiment);
          setPromptLength(response.data[0].promptLength);
          setCreativeWritingVisible(true);
        })
        .catch((error) => console.error(error));
    }

  return (
    <>
      <div>

      <button onClick={handleCreativeWritingPost}>Creative Writing</button>
      </div>

      {creativeWritingVisible && (
        <div>
          <h3>A.I Generate Prompt: {output}</h3>
          <h3>Date of Creation: {created_at}</h3>
          <h3>Notes: {note}</h3>
          <h3>Prompt Parameters: {theme} {category} {emotion} {sentiment} {promptLength}</h3>
        </div>
      )}
    </>
  );
};

export default CreativeWritingFolio;