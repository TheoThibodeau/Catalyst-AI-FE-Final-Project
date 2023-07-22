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
    <h3>____________________________________________________</h3>
      <div className="navbar">
                <div onClick={toggleDropdown}>
              <span>PROMPT</span>
              {isDropdownOpen && (
                <div className="dropdown-options">
                  <Link to="/creativewriting">CREATIVE WRITING</Link>
                  <br></br>
                  <Link to="/movement">MOVEMENT</Link>
                  <br></br>
                  <Link to="/music">MUSIC</Link>
                  <br></br>
                  <Link to="/visualart">VISUAL ART</Link>
                </div>
              )}
            </div>
        <Link to="/create" onClick={handleClickCreate}>CREATE</Link>
        <Link to="/folio" onClick={handleClickFolio}>FOLIO</Link>
        {/* <Link to="/archive" onClick={handleClickArchive}>PROFILE</Link> */}
      </div>
      <h3>____________________________________________________</h3>
      <Outlet />
    </>
  );
};

export default NavBar;



// <Dropdown isOpen={isOpen} onToggle={setIsOpen}>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//           </Dropdown>



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

