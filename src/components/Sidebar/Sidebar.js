// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { HiMiniChevronDoubleLeft, HiMiniChevronDoubleRight } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { FaRegFileLines } from "react-icons/fa6";
import { LuChevronDownSquare } from "react-icons/lu";
import Image from '../Image/Image';
import hcm from '../Assets/hcm.png';
import { IoChevronDown } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa6";
import SidebarItem from '../Sidebar/Sidebaritems';
import SubMenuItem from '../Sidebar/Sidebaritems';
import Header from '../Header/Header';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
     <Header className={isOpen ? 'header2' : 'header'} />
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="circle">
          {isOpen ? <HiMiniChevronDoubleLeft /> : <HiMiniChevronDoubleRight />}
        </div>
      </div>
      <Image src={hcm} alt="hcm" />
      <div>
        <div className="dotted-line"></div>
        {/* Your other content goes here */}
      </div>
      {isOpen ? (
        <ul>
          <SidebarItem
            icon={<RxDashboard />}
            text="Dashboard"
            isSelected={selectedItem === 'Dashboard'}
            handleClick={() => handleClick('Dashboard')}
          />
          <li className="submenu">
            <div className="submenu-header">
              <IoSettingsOutline />
              <a href="#" onClick={toggleSubMenu}>Attendance</a>
              <div style={{ marginLeft: 'auto' }} onClick={toggleSubMenu}>
                {showSubMenu ? <FaChevronUp /> : <IoChevronDown />}
              </div>
            </div>
            <div style={{ marginTop: '-10%', marginLeft: '10%' }}>
              {showSubMenu && (
                <ul>
                  <SubMenuItem
                    text="Attendance Request"
                    isSelected={selectedItem === 'Attendance Request'}
                    handleClick={() => handleClick('Attendance Request')}
                  />
                  <SubMenuItem
                    text="My Attendance"
                    isSelected={selectedItem === 'My Attendance'}
                    handleClick={() => handleClick('My Attendance')}
                  />
                    <SubMenuItem
                    text="Attendance Request"
                    isSelected={selectedItem === 'Attendance'}
                    handleClick={() => handleClick('Attendance')}
                  />
                    <SubMenuItem
                    text="My Shift Time"
                    isSelected={selectedItem === 'My Shift Time'}
                    handleClick={() => handleClick('My Shift Time')}
                  />
                     <SubMenuItem
                    text="Remote Work Request"
                    isSelected={selectedItem === 'Remote Work Request'}
                    handleClick={() => handleClick('Remote Work Request')}
                  />
                  
                  {/* Add other SubMenuItems here */}
                </ul>
              )}
            </div>
          </li>
          <div style={{ marginTop: '8%'}}>
          <SidebarItem
            icon={   <CiFolderOn />}
            text="Leave"
            isSelected={selectedItem === 'Leave'}
            handleClick={() => handleClick('Leave')}
            style={{ marginBottom: '-20px' }}
          />
            </div>
           <SidebarItem
            icon={  <FaRegFileLines />}
            text="Recruitment"
            isSelected={selectedItem === 'Recruitment'}
            handleClick={() => handleClick('Recruitment')}
          />
           <SidebarItem
            icon={  <FaRegFileLines />}
            text="Payroll"
            isSelected={selectedItem === 'Payroll'}
            handleClick={() => handleClick('Payroll')}
          />
             <SidebarItem
            icon={ <LuChevronDownSquare />}
            text="Loan"
            isSelected={selectedItem === 'Loan'}
            handleClick={() => handleClick('Loan')}
          />
             <SidebarItem
            icon={ <LuChevronDownSquare />}
            text="Others"
            isSelected={selectedItem === 'Others'}
            handleClick={() => handleClick('Others')}
          />
          {/* Add other SidebarItems here */}
        </ul>
      ) : (
        <div className="toggle-open">
          <RxDashboard />
          <IoSettingsOutline />
          <CiFolderOn />
          <FaRegFileLines />
          <FaRegFileLines />
          <LuChevronDownSquare />
          <LuChevronDownSquare />
        </div>
      )}
    </div>
    </>
  );
};

export default Sidebar;
