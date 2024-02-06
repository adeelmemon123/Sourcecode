import React, { useState } from 'react';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GoBell } from "react-icons/go";
import Image from '../Image/Image';
import profile from '../Assets/Profile.png';
import { CiSearch } from "react-icons/ci";
import Badge from '@mui/material/Badge'; // Import Badge component from Material-UI
import './Header.css'; // Import CSS file

function Header({className}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notificationCount, setNotificationCount] = useState(1); // Example notification count
  const [emailCount, setEmailCount] = useState(1); // Example email count

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`header ${className}`}>
      <div className="input-container">
        <CiSearch className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="right">
        <div className="badge-container">
          <Badge badgeContent={notificationCount} color="primary" variant="dot" >
            <HiOutlineEnvelope className="icon" />
          </Badge>
        </div>
        <div className="badge-container">
          <Badge badgeContent={emailCount} color="primary" variant="dot">
            <GoBell className="icon" />
          </Badge>
        </div>
        <div className="profile-container" onClick={toggleDropdown}>
          <Image src={profile} alt="hcm" className="icon"  />
          {showDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
