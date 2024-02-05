import React from 'react';

const SubMenuItem = ({ text, isSelected, handleClick }) => {
  return (
    <li className={isSelected ? 'selected-item' : ''} onClick={handleClick}>
      {text}
    </li>
  );
};

export default SubMenuItem;