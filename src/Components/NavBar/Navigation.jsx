import React, { useState, useContext } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/logo-ego-white.png'
import  { NavLink } from 'react-router-dom';
import { ThemeContext } from "../../Context/themeProvider";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  const { setIsDarkMode } = useContext(ThemeContext)
  const [isLightMode, setIsLightMode] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode)
    setIsLightMode((prevState) => !prevState);
  }
  
  return (
   <section className='navbarr '>
        <div className="logo-container z-9">
        <a href='/'>
          <img src={Logo} alt="Logo" style={{height: 49}} href='/'/>
        </a>
        </div>
        <div id="toggler" onClick={toggleNav}>
          <span className={`tog a ${isOpen ? 'open' : ''}`}></span>
          <span className={`tog b ${isOpen ? 'open' : ''}`}></span>
          <span className={`tog c ${isOpen ? 'open' : ''}`}></span>
        </div>
        <div className="light-mode-button" onClick={handleChangeTheme}>
          <ion-icon id='icon' name={isLightMode ? 'sunny' : 'moon'}></ion-icon>
        </div>
        <ul id="navBar" style={{ right: isOpen ? 0 : '-200px' }} onClick={toggleNav}>
          <li>
                <NavLink
                activeClassName="active"
                aria-current="page"
                to="/"
          >
                <div>Home</div>
              </NavLink>
          </li>
          <li>
                <NavLink
                activeClassName="active"
                aria-current="page"
                to="/news"
          >
                <div>News</div>
              </NavLink>
          </li>
          <li>
                <NavLink
                activeClassName="active"
                aria-current="page"
                to="/educational-offers"
          >
                <div>Education Offers</div>
              </NavLink>
          </li>
          <li>
                <NavLink
                activeClassName="active"
                aria-current="page"
                to="/about"
          >
                <div>About</div>
              </NavLink>
          </li>
          <li>
                <NavLink
                activeClassName="active"
                aria-current="page"
                to="/contact"
          >
                <div>Contact</div>
              </NavLink>
          </li>
        </ul>
    </section>
  );
}

export default Navbar;
