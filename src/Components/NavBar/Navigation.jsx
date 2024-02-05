import React, { useState, useContext, useRef, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/logo-ego-white.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome library
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBachelorsOpen, setIsBachelorsOpen] = useState(false);
  const [isMastersOpen, setIsMastersOpen] = useState(false);
  const navbarRef = useRef();
  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
    setIsDropdownOpen(false);
    setIsBachelorsOpen(false);
    setIsMastersOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleBachelors = () => {
    setIsBachelorsOpen((prevState) => !prevState);
  };
  const toggleMasters = () => {
    setIsMastersOpen((prevState) => !prevState);
    setIsBachelorsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Clicked outside the navbar, so close it
        setIsOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <section className="navbarr " ref={navbarRef}>
      <div className="logo-container z-9">
        <a href="/">
          <img src={Logo} alt="Logo" style={{ height: 49 }} href="/" />
        </a>
      </div>
      <div className="block-nav">
        <div id="toggler" onClick={toggleNav}>
          <span className={`tog a ${isOpen ? "open" : ""}`}></span>
          <span className={`tog b ${isOpen ? "open" : ""}`}></span>
          <span className={`tog c ${isOpen ? "open" : ""}`}></span>
        </div>
        <div>
          <a
            href="https://ego-education.ispringlearn.eu/login"
            style={{ fontSize: 25, color: "white" }}
            target="_blank"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
      </div>
      <ul id="navBar" style={{ right: isOpen ? 0 : "-200px" }}>
        <li onClick={toggleNav}>
          <NavLink
            className="__navigation"
            activeclassname="active"
            aria-current="page"
            to="/"
          >
            <div>Home</div>
          </NavLink>
        </li>
        <li>
          <div className="nav-dropdown">
            <div
              className=""
              style={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: 5,
                border: "none",
                background: "transparent",
              }}
            >
              {/* <button onClick={toggleDropdown} style={{height: 30, width: 30, cursor: "pointer"}}>&lt;</button> */}
              <NavLink
                activeclassname="active"
                aria-current="page"
                to="/courses"
                onMouseEnter={toggleDropdown}
                className="__navigation"
              >
                <div>Courses</div>
              </NavLink>
            </div>
            {/* {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <div
                    activeclassname="active"
                    style={{
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                    onClick={toggleBachelors}
                  >
                    BACHELORS
                  </div>
                </li>
                {isBachelorsOpen && (
                  <ul onClick={toggleNav} style={{ listStyle: "none" }}>
                    <li>
                      <NavLink to="/courses/educational-science">
                        Educational Sciences
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/business-administartion">
                        Business Administration
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/civil-engeneering">
                        Civil Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/sport-science">
                        Sport Sciences
                      </NavLink>
                    </li>
                  </ul>
                )}
                <li>
                  <div
                    activeclassname="active"
                    style={{
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                    onClick={toggleMasters}
                  >
                    MASTERS
                  </div>
                </li>
                {isMastersOpen && (
                  <ul onClick={toggleNav} style={{ listStyle: "none" }}>
                    <li>
                      <NavLink to="/courses/informatics">Informatics</NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses/sustainable-developement">
                        Sustainable Developement
                      </NavLink>
                    </li>
                  </ul>
                )}
                <li>
                  <div
                    activeclassname="active"
                    style={{
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    ENGLISH COURSES
                  </div>
                </li>
              </ul>
            )} */}
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
            className="__navigation"
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
            className="__navigation"
          >
            <div>About</div>
          </NavLink>
        </li>
        <li onClick={toggleNav}>
          <NavLink
            activeclassname="active"
            aria-current="page"
            to="/contact"
            className="__navigation"
          >
            <div>Contact</div>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
