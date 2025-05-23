import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../Assets/logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <header className="neumorphic-header">
    
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className="menu">
          <ul className="menu-list">
            <Link to="/#home" className="menu-link">
              <li>
               
                Home
              </li>
            </Link>
            <a href="#about" className="menu-link">
              <li>
               
                About
              </li>
            </a>
            <a href="#services" className="menu-link">
              <li>
               
                Services
              </li>
            </a>
            <a href="#contact" className="menu-link">
              <li>
               
                Contact
              </li>
            </a>
          </ul>
        </nav>
        
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <FaPhoneAlt className="menuIcon" />
         <h1 className="mobile">+917332845555</h1>
         </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </div>
       
      </header>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="sidebar-wrapper">
          <div className="sidebar-overlay" onClick={closeSidebar}></div>
          <div className="sidebar">
            <div className="sidebar-header">
              <h2>Menu</h2>
              <IoMdClose className="close-icon" onClick={closeSidebar} />
            </div>
            <ul className="sidebar-list">
              <li>
                <a href="#home" onClick={closeSidebar}>
                  <FaHome className="sidebar-icon" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeSidebar}>
                  <FaInfoCircle className="sidebar-icon" />
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeSidebar}>
                  <FaServicestack className="sidebar-icon" />
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeSidebar}>
                  <FaPhoneAlt className="sidebar-icon" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </aside>


                
      )}
    </>
  );
}

export default Header;
