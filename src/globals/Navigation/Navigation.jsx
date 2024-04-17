import React, { useEffect, useRef, useState } from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logos/logo-ego-white.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navigation({ show }) {
  const navItems = [
    { key: "home", link: "/" },
    { key: "courses", link: "/courses" },
    { key: "eLearning", link: "/elearn" },
    { key: "partners", link: "#" },
    { key: "research", link: "/research" },
    { key: "apply", link: "/apply" },
    { key: "about", link: "/about" },
  ];

  const navRef = useRef(null);
  const [activeLink, setActiveLink] = useState("home");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        navRef.current &&
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80)
      ) {
        navRef.current.classList.add("fixed_nav");
      } else if (navRef.current) {
        navRef.current.classList.remove("fixed_nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <section className="flex_content">
        <figure className="logo fixed_flex">
          <Link to={"/"} className="p-0">
            <img src={Logo} alt="white logo" />
          </Link>
        </figure>
      </section>
      <section className="flex_content nav_content">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.link}
            className={activeLink === item.key ? "active" : ""}
            onClick={() => handleLinkClick(item.key)}
            style={{ color: "#fff" }}
          >
            {t(`home.nav.${item.key}`)}
          </Link>
        ))}
      </section>
      <section className="flex_content d-flex alingn-items-center justify-content-between">
        {/* <div className="flag-switch">
          <input
            type="checkbox"
            id="check2"
            defaultChecked={i18n.language === "en"}
            onChange={(e) => {
              if (e.target.checked) {
                changeLanguage("en");
              } else {
                changeLanguage("br");
              }
            }}
          />
          <label for="check2"></label>
        </div> */}
        <a
          className="ham"
          href="https://ego-education.ispringlearn.eu/login"
          target="_blank"
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a
          className="ham"
          onClick={() => {
            show((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </section>
    </nav>
  );
}

export default Navigation;
