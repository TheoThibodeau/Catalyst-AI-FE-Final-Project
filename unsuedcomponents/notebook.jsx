import { useEffect, useState } from 'react';
import axios from 'axios';

const Folio = () => {
  const [notebook, setnotebook] = useState([]);
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
  }
}