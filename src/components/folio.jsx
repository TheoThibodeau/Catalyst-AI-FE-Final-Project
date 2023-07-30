import React, { useState } from 'react';
import MusicFolio from './foliocomponents/musicfolio';
import MovementFolio from './foliocomponents/movementfolio';
import VisualArtFolio from './foliocomponents/visualartfolio';
import CreativeWritingFolio from './foliocomponents/creativewritingfolio';

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
      
      <div className="flex gap-4 pt-5 justify-center">
        {componentData.map((component) => (
          <button
            key={component.name}
            className={`${
              selectedComponent === component.name ? 'border-blue-500' : 'border-gray-500'
            } border p-2`}
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
