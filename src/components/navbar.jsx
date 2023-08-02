import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClickCreate = () => {
    setDropdownOpen(false);
  };

  const handleClickFolio = () => {
    setDropdownOpen(false);
  };

  const handleClickLogin = () => {
    setDropdownOpen(false);
    setIsLoggedIn((prevState) => !prevState);
    // I am not sure this is right  
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

   
  
  return (
    <div className="flex items-center justify-end text-lg  text-slate-500 min-w-fit p-5 space-x-3">
    
      <div className="lg:hidden" onClick={toggleDropdown}>
        <div className={`w-6 h-1 ${isDropdownOpen ? "rotate-45" : ""} bg-slate-400 mb-1 transition-all`} />
        <div className={`w-6 h-1 ${isDropdownOpen ? "opacity-0" : ""} bg-slate-400 mb-1 transition-all`} />
        <div className={`w-6 h-1 ${isDropdownOpen ? "-rotate-45" : ""} bg-slate-400 transition-all`} />
      </div>

      <div className={`lg:flex items-center space-x-3 ${isDropdownOpen ? "flex-col" : "hidden"}`}>
        <Link to="/" onClick={handleClickCreate}>
          HOME
        </Link>
        <Link to="/folio" onClick={handleClickFolio}>
          FOLIO
        </Link>
        <Link to="/login" onClick={handleClickLogin}>
          {isLoggedIn ? "LOG OUT" : "LOG IN"}
          {/* does a token go here?  */}
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
