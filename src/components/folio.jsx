import { useEffect, useState } from 'react';
import axios from 'axios';
import MusicFolio from './foliocomponents/musicfolio';
import MovementFolio from './foliocomponents/movementfolio';
import VisualArtFolio from './foliocomponents/visualartfolio';
import CreativeWritingFolio from './foliocomponents/creativewritingfolio';

const Folio = () => {
  const [folios, setFolios] = useState([]);
  const [output, setOutput] = useState([]);
  const [created_at, setCreated_at] = useState([]);
  const [note, setNote] = useState([]);
  const [concept, setConcept] = useState([]);
  const [element, setElement] = useState([]);
  const [emotion, setEmotion] = useState([]);
  const [exploration, setExploration] = useState([]);

  return (
    <>
      <div>

      <h1>Folio</h1>   

      </div>
        <MusicFolio />
        <MovementFolio />
        <VisualArtFolio />
        <CreativeWritingFolio />
    </>
  );
};

export default Folio;


// user notes 