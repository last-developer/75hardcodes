// Header.jsx
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
const navigate=useNavigate()
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <a href="#" className={`logo josefin-font`} onClick={()=>{navigate('/')}}>
             75hardcodes
            </a>
          </li>
          <li>
            <a href="#" className="josefin-font" id="about-button" onClick={()=>{navigate('about')}}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;