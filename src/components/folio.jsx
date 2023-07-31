import React, { useState } from 'react';
import MusicFolio from './foliocomponents/musicfolio';
import MovementFolio from './foliocomponents/movementfolio';
import VisualArtFolio from './foliocomponents/visualartfolio';
import CreativeWritingFolio from './foliocomponents/creativewritingfolio';
import NavBar from './navbar';

const Folio = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const componentData = [
    { name: 'creative', label: 'Writing' },
    { name: 'movement', label: 'Movement' },
    { name: 'music', label: 'Music' },
    { name: 'visual', label: 'VisualArt' },
  ];

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <NavBar />
      <div className="flex p-6 gap-4 pt-5 justify-center ">
        {componentData.map((component) => (
          <button
            key={component.name}
            className={`${
              selectedComponent === component.name ? 'border-slate-500' : 'border-gray-300'
            } border p-2 bg-slate-100`}
            onClick={() => handleComponentClick(component.name)}
          >
            {component.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {selectedComponent === 'music' && <MusicFolio />}
        {selectedComponent === 'movement' && <MovementFolio />}
        {selectedComponent === 'visual' && <VisualArtFolio />}
        {selectedComponent === 'creative' && <CreativeWritingFolio />}
      </div>
    </>
  );
};

export default Folio;
