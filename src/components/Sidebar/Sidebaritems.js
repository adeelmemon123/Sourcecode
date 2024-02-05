import React from 'react';

const SidebarItem = ({ icon, text, isSelected, handleClick }) => {
  return (
    <li className={isSelected ? 'selected-item' : ''} onClick={handleClick}>
      {icon} <a href="#">{text}</a>
    </li>
  );
};

export default SidebarItem;