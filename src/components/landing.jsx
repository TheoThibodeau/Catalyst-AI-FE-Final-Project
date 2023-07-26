import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => {
   
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
      
      const handleClickCreate = () => {
        Navigate('/create');
      };
     
        const handleClickFolio = () => {
            Navigate('/folio');
        };

  return (
    
<>
      <div className="bg-slate-100 py-4 border border-slate-300">
        <div className="pt-2 pb-4 space-x-4 text-right pr-4 text-slate-300 ">
            <Link to="/create" onClick={handleClickCreate}>CREATE</Link>
            <Link to="/create" onClick={handleClickFolio}>FOLIO</Link>
        </div>
        <div className="font-mono text-left text-6xl text-gray-500 pl-10 ">
          <div className="">catalyst</div>
          <div className="text-md pl-20 pt-3 ">artist, in the loop</div>
        </div>
      </div>

      <div className="max-w-sm justify-center lg:max-w-2xl pl-10 px-6 py-5 lg:order-2">
        <p>Welcome to our app! Discover a world of creativity and inspiration through creative writing, music, movement, and visual art. </p>
        <br></br>
        <p>Select a medium, choose your focus, narrow in, recive an AI generated prompt. Create. </p>
      </div>
      <div className="flex flex-col gap-2 text-5xl text-slate-300 hover:text-slate-200 space-y-4 mb-10  pl-4 pb-20 pt-10 lg:pl-10">
        <Link to="/creativewriting" className="hover:text-gray-400" onClick={handleClickCreativeWriting}>
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

    </>
  );
};

export default Landing;