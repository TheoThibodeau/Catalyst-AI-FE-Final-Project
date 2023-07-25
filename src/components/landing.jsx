import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  
  
    const BackgroundLines = () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-20 left-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line x1="0" y1="20" x2="100" y2="50" stroke="#ccc" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="20" y2="100" stroke="#ccc" strokeWidth="0.5" />
        </svg>
      );

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
<BackgroundLines />
     <div className="flex justify-end">
     <h3 className="font-mono max-w-md p-10 mt-20 mr-5 pr-5 pb-5 text-right text-gray-500 bg-slate-200">
        Welcome to our app! Discover a world of creativity and inspiration
        through creative writing, music, movement, and visual art. Unleash your
        imagination and embark on a journey of self-expression and growth with
        our diverse range of prompts and activities. Let's start creating and
        exploring together!"
      </h3>
      <div className="fixed bottom-0 text-left p-4">
        <div>
        <div className="flex flex-col gap-2 text-6xl text-slate-500 hover:text-slate-200 space-y-4 ">
            <Link to="/creativewriting"   className="hover:text-gray-500" onClick={handleClickCreativeWriting}>
              CREATIVE WRITING
            </Link>
            <Link to="/movement" className="hover:text-gray-500" onClick={handleClickMovement}>
              MOVEMENT
            </Link>
            <Link to="/music" className="hover:text-gray-500" onClick={handleClickMusic}>
              MUSIC
            </Link>
            <Link to="/visualart" className="hover:text-gray-500" onClick={handleClickVisualArt}>
              VISUAL ART
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Landing;
