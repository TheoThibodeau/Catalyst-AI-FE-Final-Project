import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Landing = () => {
  const [output, setOutput] = useState('');
  const [responseID, setResponseID] = useState('');

    useEffect(()=> {
        axios
        .post('https://catalyst-x226.onrender.com/api/welcome/generate/')
        .then((response) => {
            setResponseID(response.data.id)
        }) 
        axios
            .get(`https://catalyst-x226.onrender.com/api/welcome/${responseID}`)
            .then((response) => {
                setOutput(response.data.output)}) 
    },[])
  
  const Navigate = useNavigate();

  const handleClickCreativeWriting = () => {
    Navigate('/creativewriting');
  };
  const handleClickMusic = () => {
    Navigate('/music');
  };
  const handleClickMovement = () => {
    Navigate('/movement');
  };
  const handleClickVisualArt = () => {
    Navigate('/visualart');
  };

  return (
    <>
    <h3 className="font-mono max-w-md justify-center p-10">Welcome to our app! Discover a world of creativity and inspiration through creative writing, music, movement, and visual art. Unleash your imagination and embark on a journey of self-expression and growth with our diverse range of prompts and activities. Let's start creating and exploring together!"</h3>
      <div
        className="flex items-center justify-center h-screen" 
      >
        <div className="max-w-fit">
          <div className="flex justify-center">
            <div
              className="text-center font-roboto text-shadow-sm justify-center"
              style={{ display: 'flex', flexWrap: 'wrap' }}
            >
              <a href="/creativewriting" className="relative inline-block">
                <img
                  src="src/images/0012_Scan 2020-5-18 18.28.07.jpg"
                  alt="Creative Writing"
                  style={{ maxWidth: '200px', opacity: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  CREATIVE WRITING
                </div>
              </a>

              <a href="/music" className="relative inline-block">
                <img
                  src="src/images/0015_Scan 2020-5-18 18.24.17.jpg"
                  alt="/music"
                  style={{ maxWidth: '200px', opacity: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  MUSIC
                </div>
              </a>

              <a href="/movement" className="relative inline-block">
                <img
                  src="src/images/0020_Scan 2020-5-18 18.00.22.jpg"
                  alt="/Movement"
                  style={{ maxWidth: '200px', opacity: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  MOVEMENT
                </div>
              </a>

              <a href="/visualart" className="relative inline-block">
                <img
                  src="src/images/0027_Scan 2020-5-18 17.58.47.jpg"
                  alt="Visual Art"
                  style={{ maxWidth: '200px' , opacity: 0.5}}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                 VISUAL ART
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Landing;
