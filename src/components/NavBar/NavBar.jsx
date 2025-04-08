import React, { useState } from 'react';
import "./NavBar.css";
import { IoHomeOutline } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="navbar">
      <div className="tooltip">
        <a 
          href="#" 
          className={activeNav === "#" ? "active" : ""} 
          onClick={() => setActiveNav("#")}
        >
          <IoHomeOutline />
        </a>
        <span className="tooltiptext">Home</span>
      </div>

      <div className="tooltip">
        <a 
          href="#about" 
          className={activeNav === "#about" ? "active" : ""} 
          onClick={() => setActiveNav("#about")}
        >
          <LuUserRound />
        </a>
        <span className="tooltiptext">About</span>
      </div>

      <div className="tooltip">
        <a 
          href="#services" 
          className={activeNav === "#services" ? "active" : ""} 
          onClick={() => setActiveNav("#services")}
        >
          <BiBook />
        </a>
        <span className="tooltiptext">Services</span>
      </div>

      <div className="tooltip">
        <a 
          href="#projects" 
          className={activeNav === "#projects" ? "active" : ""} 
          onClick={() => setActiveNav("#projects")}
        >
          <RiServiceLine />
        </a>
        <span className="tooltiptext">Projects</span>
      </div>

      <div className="tooltip">
        <a 
          href="#contact" 
          className={activeNav === "#contact" ? "active" : ""} 
          onClick={() => setActiveNav("#contact")}
        >
          <BiMessageSquareDetail />
        </a>
        <span className="tooltiptext">Contact</span>
      </div>
    </nav>
  );
};

export default NavBar;
