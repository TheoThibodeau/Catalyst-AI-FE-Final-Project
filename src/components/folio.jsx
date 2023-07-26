import { useEffect, useState } from 'react';
import axios from 'axios';

const Folio = () => {
  const [folios, setFolios] = useState([]);
  const [postId, setPostId] = useState(null);
  const [selectedMedium, setSelectedMedium] = useState('');
  const [promptLength, setPromptLength] = useState('');

  useEffect(() => {
    axios
      .get('https://catalyst-x226.onrender.com/api/folios/')
      .then((response) => {
        setFolios(response.data);
      })
      .catch((error) => console.error(error));
  }, [postId]);

  const handleMediumChange = (medium) => {
    setSelectedMedium(medium);
  };

  const handlePromptLengthChange = (length) => {
    setPromptLength(length);
  };

  return (
    <>
      <div>

        <h2>Previous Prompts</h2>
        <h2>Notes</h2>

        <h2>Filter by Medium</h2>
        <button onClick={() => handleMediumChange('All')}>All</button><br></br>
        <button onClick={() => handleMediumChange('Creative Writing')}>Creative Writing</button>
        <button onClick={() => handleMediumChange('Movement')}>Movement</button>
        <button onClick={() => handleMediumChange('Music')}>Music</button>
        <button onClick={() => handleMediumChange('Visual Art')}>Visual Art</button>
      </div>
    </>
  );
};

export default Folio;


// user notes 