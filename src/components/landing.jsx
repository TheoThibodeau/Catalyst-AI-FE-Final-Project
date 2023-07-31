import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => {
  const Navigate = useNavigate();

  const handleClickCreativeWriting = () => {
    Navigate("/creativewriting");
  };
  const handleClickMusic = () => {
    Navigate("/music");
  };
  const handleClickMovement = () => {
    Navigate("/movement");
  };
  const handleClickVisualArt = () => {
    Navigate("/visualart");
  };

  const handleClickCreate = () => {
    Navigate("/create");
  };

  const handleClickFolio = () => {
    Navigate("/folio");
  };

  const mediums = [
    {
      title: "WRITING",
      handler: handleClickCreativeWriting,
      path: "/creativewriting",
    },
    {
      title: "MOVEMENT",
      handler: handleClickMovement,
      path: "/movement",
    },
    {
      title: "MUSIC",
      handler: handleClickMusic,
      path: "/music",
    },
    {
      title: "VISUAL ART",
      handler: handleClickVisualArt,
      path: "/visualart",
    },
  ];

  return (
    <>
      <div className="bg-slate-200 py-4 border border-slate-300">
        <div className="pt-2 pb-4 space-x-4 text-right pr-4 text-slate-400">
          <Link to="/create" onClick={handleClickCreate}>
            CREATE
          </Link>
          <Link to="/folio" onClick={handleClickFolio}>
            FOLIO
          </Link>
        </div>
        <div className="font-mono text-left text-6xl text-gray-500 pl-6 ">
          <div className="">catalyst</div>
          <div className="text-md pl-20 pt-3 ">artist, in the loop</div>
        </div>
      </div>

      <div
        className={[
          "flex flex-col space-y-4 max-h-fit",
          "w-full",
          "max-w-lg ",
          "justify-center",
          "px-11 py-11",

        ].join(" ")}
      >
        <p style={{ fontFamily: "IBM Plex Mono"}}>
          Discover a world of creativity and inspiration through 
          the power of artificial intelligence.{" "}
        </p>
        <p style={{ fontFamily: "IBM Plex Mono"}}>
          Select an art form, customize your unique A.I.
          generated prompt, and start creating!{" "}
        </p>
      </div>
      <div
        className={[
          "flex",
          "flex-col",
          "gap-2",
          "text-4xl",
          "text-slate-300",
          "hover:text-slate-200",
          "space-y-6",
          "pl-6",
          "pt-10",
        ].join(" ")}
      >
        {mediums.map((medium) => (
          <Link
            key={medium.title}
            to={medium.path}
            className="text-gray-100 border border-slate-500 bg-slate-400  pl-2  pt-2 pb-2"
            onClick={medium.handler}
          >
            {medium.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Landing;
