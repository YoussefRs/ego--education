import React, { useState, useContext } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo/logo-ego-white.png'
import  { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome library
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isBachelorsOpen, setIsBachelorsOpen] = useState(false);
  const [isMastersOpen, setIsMastersOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
    setIsDropdownOpen(false); 
    setIsBachelorsOpen(false);
    setIsMastersOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); 
  };

  const toggleBachelors = () => {
    setIsBachelorsOpen(prevState => !prevState);
  };
  const toggleMasters = () => {
    setIsMastersOpen(prevState => !prevState);
    setIsBachelorsOpen(false);
  };


  
  
  return (
   <section className='navbarr '>
        <div className="logo-container z-9">
        <a href='/'>
          <img src={Logo} alt="Logo" style={{height: 49}} href='/'/>
        </a>
        </div>
        <div className="block-nav">
          <div id="toggler" onClick={toggleNav}>
            <span className={`tog a ${isOpen ? 'open' : ''}`}></span>
            <span className={`tog b ${isOpen ? 'open' : ''}`}></span>
            <span className={`tog c ${isOpen ? 'open' : ''}`}></span>
          </div>
          <div>
          <a href='https://ego-education.ispringlearn.eu/login' style={{fontSize: 25, color: 'white'}} target="_blank"> 
            <FontAwesomeIcon icon={faUser} /> 
          </a>
          </div>
        </div>
        <ul id="navBar" style={{ right: isOpen ? 0 : '-200px' }} 
      >
          <li onClick={toggleNav}>
                <NavLink
                activeclassname="active"
                aria-current="page"
                to="/"
          >
                <div>Home</div>
              </NavLink>
          </li>
          <li>
            <div className='nav-dropdown'>
                <div className='nav-item' style={{padding: 0, display: 'flex',alignItems: "center", gap: 5, border: "none", background:"transparent"}}
              
                >
                  {/* <button onClick={toggleDropdown} style={{height: 30, width: 30, cursor: "pointer"}}>&lt;</button> */}
                  <NavLink activeclassname='active' aria-current='page' to='/courses' onMouseEnter={toggleDropdown}>
                  <div  >Courses</div>
                  </NavLink>
                </div>
                {isDropdownOpen && (
                  <ul className='dropdown-content' >
                  <li>
                    <div activeclassname='active' style={{padding: 0, display: 'flex',alignItems: "center", gap: 10,}} onClick={toggleBachelors}>
                      BACHELORS
                      {/* <button style={{height: 30, width: 30, cursor: "pointer"}}>v</button> */}
                    </div>
                  </li>
                    {isBachelorsOpen && (
                      <ul onClick={toggleNav} style={{listStyle: 'none'}} >
                        <li><NavLink to='/courses/educational-science'>Educational Sciences</NavLink></li>
                        <li><NavLink to='/courses/business-administartion'>Business Administration</NavLink></li>
                        <li><NavLink to='/courses/civil-engeneering'>Civil Engineering</NavLink></li>
                        <li><NavLink to='/courses/sport-science'>Sport Sciences</NavLink></li>
                      </ul>
                    )}
                  <li>
                    <div activeclassname='active' style={{padding: 0, display: 'flex',alignItems: "center", gap: 10,}} onClick={toggleMasters}>
                      MASTERS
                      {/* <button style={{height: 30, width: 30, cursor: "pointer"}}>v</button> */}
                    </div>
                  </li>
                  {isMastersOpen && (
                      <ul onClick={toggleNav} style={{listStyle: 'none'}}>
                        <li><NavLink to='/courses/informatics'>Informatics</NavLink></li>
                        <li><NavLink to='/courses/sustainable-developement'>Sustainable Developement</NavLink></li>
                      </ul>
                    )}
                    <li>
                    <div activeclassname='active' style={{padding: 0, display: 'flex',alignItems: "center", gap: 10,}} >
                      ENGLISH COURSES
                      {/* <button style={{height: 30, width: 30, cursor: "pointer"}}>v</button> */}
                    </div>
                  </li>
                </ul>
                )}
              </div>
          </li>
          {/* <li onClick={toggleNav}>
                <NavLink
                activeclassname="active"
                aria-current="page"
                to="/courses"
          >
                <div>Courses</div>
              </NavLink>
          </li> */}
          <li onClick={toggleNav}>
                <NavLink
                target="_blank"
                activeclassname="active"
                aria-current="page"
                to="https://ego-education.ispringlearn.eu/signup/kDuZZhxbaZMhMNY5cUqoh5aX8xM"
          >
                <div>Platform Trial</div>
              </NavLink>
          </li>
          <li onClick={toggleNav}>
                <NavLink
                activeclassname="active"
                aria-current="page"
                to="/about"
          >
                <div>About</div>
              </NavLink>
          </li>
          <li onClick={toggleNav}>
                <NavLink
                activeclassname="active"
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
