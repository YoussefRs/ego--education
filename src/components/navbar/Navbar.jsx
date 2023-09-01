import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/logo-ego-white.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
   <section className='navbarr w-full mb-[6em] md:mb-[6em] lg:mb-[6em]'>
        <div className="logo-container z-9">
          <img src={Logo} alt="Logo" style={{height: 50,}} />
        </div>
        <div id="toggler" onClick={toggleNav}>
          <span className={`tog a ${isOpen ? 'open' : ''}`}></span>
          <span className={`tog b ${isOpen ? 'open' : ''}`}></span>
          <span className={`tog c ${isOpen ? 'open' : ''}`}></span>
        </div>
        <ul id="navBar" style={{ right: isOpen ? 0 : '-200px' }}>
          <li>Home</li>
          <li>Menu</li>
          <li>Profile</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
    </section>
  );
}

export default Navbar;
