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
  const handleClickNotebook = () => {};
  const handleClickProfile = () => {};

  return (
    <>
      <div className="navbar">
        <Link to="/" onClick={handleClickPrompt}>Prompt</Link>
        <Link to="/create" onClick={handleClickCreate}>Create</Link>

      </div>
      <Outlet />
    </>
  );
};

export default NavBar;


  /* <li className={isDropdownOpen ? "drowpdown-open" : ""}>
  <li>
    <Link to="/creative-writing" onClick={handleClickCreativeWriting}>
      Creative Writing
    </Link>
  </li>
  <li>
    <Link to="/movement" onClick={handleClickMovement}>
      Movement
    </Link>
  </li>
  <li>
    <Link to="/music" onClick={handleClickMusic}>
      Music
    </Link>
  </li>
  <li>
    <Link to="/visual-art" onClick={handleClickVisualArt}>
      Visual Art
    </Link>
  </li>
</li> */
}
