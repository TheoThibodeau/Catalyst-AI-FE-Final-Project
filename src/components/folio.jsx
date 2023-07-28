import { useEffect, useState } from 'react';
import axios from 'axios';
import MusicFolio from './foliocomponents/musicfolio';
import MovementFolio from './foliocomponents/movementfolio';
import VisualArtFolio from './foliocomponents/visualartfolio';
import CreativeWritingFolio from './foliocomponents/creativewritingfolio';

const Folio = () => {

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