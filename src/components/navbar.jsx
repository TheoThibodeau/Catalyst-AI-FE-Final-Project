import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClickCreate = () => {};
  const handleClickFolio = () => {};

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-end text-lg min-w-fit p-5 space-x-3"> 
     <Link to="/" onClick={handleClickCreate}>
        HOME
      </Link>
      <Link to="/create" onClick={handleClickCreate}>
        CREATE
      </Link>
      <Link to="/folio" onClick={handleClickFolio}>
        FOLIO
      </Link>
      <Outlet />
    </div>
  );
};

export default NavBar;
