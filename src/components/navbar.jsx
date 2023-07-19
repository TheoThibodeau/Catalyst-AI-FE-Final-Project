import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleClickPrompt = () => {};
  const hanleClickCreativeWriting = () => {};
  const handleClickMovement = () => {};
  const handleClickMusic = () => {};
  const handleClickVisualArt = () => {};
  const handleClickCreate = () => {};
  const handleClickNotebook = () => {};
  const handleClickProfile = () => {};

return (
    <>
  <div>
    <ul>
      <Link to="/" onClick={handleClickPrompt}>
        Prompt
      </Link>
      <li className={isDropdownOpen ? "drowpdown-open" : ""}>
        <Link to="/creative-writing" onClick={handleClickCreativeWriting}>
          Creative Writing
        </Link>
        <Link to="/movement" onClick={handleClickMovement}>
          Movement
        </Link>
        <Link to="/music" onClick={handleClickMusic}>
          Music
        </Link>
        <Link to="/visual-art" onClick={handleClickVisualArt}>
          Visual Art
        </Link>
      </li>
    </ul>
  </div>
  </>
);


export default NavBar;