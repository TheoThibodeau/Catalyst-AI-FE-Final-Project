import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClickPrompt = () => {};
  const handleClickCreativeWriting = () => {};
  const handleClickMovement = () => {};
  const handleClickMusic = () => {};
  const handleClickVisualArt = () => {};
  const handleClickCreate = () => {};
  const handleClickFolio = () => {};
  const handleClickArchive = () => {};

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between p-20 font-roboto text-2xl max min-w-fit">
        <div onClick={toggleDropdown}>
          <span>PROMPT</span>
          {isDropdownOpen && (
            <div className="text-base">
              <Link to="/creativewriting" onClick={handleClickCreativeWriting}>CREATIVE WRITING</Link>
              <br></br>
              <Link to="/movement" onClick={handleClickMovement}>MOVEMENT</Link>
              <br></br>
              <Link to="/music" onClick={handleClickMusic}>MUSIC</Link>
              <br></br>
              <Link to="/visualart" onClick={handleClickVisualArt}>VISUAL ART</Link>
            </div>
          )}
        </div>
        <Link to="/create" onClick={handleClickCreate}>
          CREATE
        </Link>
        <Link to="/folio" onClick={handleClickFolio}>
          FOLIO
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
