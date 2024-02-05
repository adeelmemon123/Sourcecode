import React from 'react';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import './Header.css'; // Import CSS file

function Header({className}) {
  return (
    <div className={`header ${className}`}>
  <div class="input-container">
  <CiSearch className="search-icon" />
  <input type="text" placeholder="Search..." class="search-input" />
</div>
      <div className="right">
      <HiOutlineEnvelope  className="icon" />
      <GoBell className="icon" />
      <LuUser className="icon" />
      </div>
    </div>
  );
}

export default Header;
