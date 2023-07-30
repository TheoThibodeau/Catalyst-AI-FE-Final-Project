import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';


const CreativeWritingFolio = () => {
  const [folios, setFolios] = useState([]);
  const [selectedFolio, setSelectedFolio] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [output, setOutput] = useState([]);
  const [note, setNote] = useState([]);
  const [category, setCategory] = useState([]); // Corrected variable name
  const [somatic, setSomatic] = useState([]);
  const [theme, setTheme] = useState([]);
  const [emotion, setEmotion] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [promptLength, setPromptLength] = useState([]);

  useEffect(() => {
    axios
      .get('https://catalyst-x226.onrender.com/api/write/')
      .then((response) => {
        setFolios(response.data);
        setOutput(response.data[0].output);
        setNote(response.data[0].note);
        setSomatic(response.data[0].somatic);
        setTheme(response.data[0].theme);
        setEmotion(response.data[0].emotion);
        setSentiment(response.data[0].sentiment);
        setPromptLength(response.data[0].promptLength);
        setCategory(response.data[0].category); // Corrected variable name
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDateClick = (date) => {
    if (selectedDate === date) {
        setSelectedDate(null);
        setSelectedFolio(null);
      } else {
        setSelectedDate(date);
        setSelectedFolio(folios.find((folio) => dayjs(folio.created_at).format('MM-DD-YYYY HH:mm:ss') === date));
      }
    };

  return (
    <>
      <div>
        {folios.map((folio) => (
          <button
            key={folio.id}
            onClick={() =>
              handleDateClick(dayjs(folio.created_at).format('MM-DD-YYYY HH:mm:ss'))
            }
          >
            {dayjs(folio.created_at).format('MMMM D, YYYY - HH:mm')}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div>
          <h3>Date of Creation: {selectedDate}</h3>
          {selectedFolio && (
            <>
              <h3>A.I Generate Prompt:{output}</h3>
              <h3>
                Prompt Parameters: {theme} {category}{somatic}
                {emotion} {sentiment} {promptLength}
              </h3>
              <h3>Notes: {note}</h3>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CreativeWritingFolio;
