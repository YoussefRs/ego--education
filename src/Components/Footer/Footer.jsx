import React  from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo/logo-ego-white.png";
import Progetto from "../../assets/logo/Progetto-senza-titolo.png"
import ShapedWave from "../CustomWaveShape/ShapedWave";
import Accordian from "../accordian/accordian";

const Footer = () => {
  
  return (
    <>
      <div className="footer_section">
      <ShapedWave rotate={'rotateX(180deg)'}/>
      <ShapedWave />
      <Accordian />
        <div className="footer">
          <Link className="creator_link" to="/creators">
            <div className="footer_intro">
              <img
                loading="lazy"
                decoding="async"
                src={logo}
                className="footer_image"
                alt="ego-education"
              />
              <img
                loading="lazy"
                decoding="async"
                src={Progetto}
                className="footer_image"
                alt="Pegaso-international"
              />
              <br/>
              {/* <h1>EGO EDUCATION</h1> */}
              {/* <p>A new vision of the world</p>
              <p>A new opportunity for growth</p> */}
            </div>
          </Link>
          <div className="footer_links_section">
            <div className="footer_links">
              <h1 className="footer_links_name">LINKS</h1>
              <ul>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/">
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/project">
                    {" "}
                    News{" "}
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/achievements">
                    {" "}
                    Offers{" "}
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/about">
                    {" "}
                    About{" "}
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/contact">
                    {" "}
                    Contact{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <div className="footer_links">
              <h1 className="footer_links_name">DEPARTMENTS</h1>
              <ul>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/progammingDepartment">
                    Programming
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/MechenicalDepartment">
                    Mechanical
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/ElectricalDepartment">
                    Electronics
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/PublicRelations">
                    Public Relations
                  </NavLink>
                </li>
                <li className="footer_link">
                  <NavLink className="footer_link" to="/Creators">
                    Creators
                  </NavLink>
                </li>
              </ul>
            </div> */}
          </div>
          <div>
          <div className="footer_address">
            <div className="footer_locate">
              <img
                loading="lazy"
                decoding="async"
                alt=" "
                className="footer_location_pin"
                src="https://img.icons8.com/color-glass/48/4a90e2/google-maps-new.png"
              />
              <h1 className="footer_locateus">LOCATE US</h1>
            </div>
            <a
              rel="noopener noreferrer"
              className="footer_location"
            >
              40, Villa Fairholme, <br/> Sir Augustus Bartolo Street, <br/> Ta’ Xbiex XBX 1095, Malta
              <br />
            </a>
          </div>
          <div className="footer_address">
            <div className="footer_locate">
              <img
                loading="lazy"
                decoding="async"
                alt=" "
                className="footer_location_pin"
                src="https://www.pngmart.com/files/7/E-Mail-PNG-Clipart.png"
              />
              <h1 className="footer_locateus">CONTACT US</h1>
            </div>
            <a
              rel="noopener noreferrer"
              className="footer_location"
            >
              info@ego-education.com
              <br />
            </a>
            <p style={{width: "50%", marginTop: 20}}>The GDPR has been implemented through the Maltese Data Protection Act 2018 
              (Chapter 586 of the Laws of Malta) <br/> (the “DPA”)  which took effect on 28 May 2018.
            </p>
          </div>
          </div>
          <div className="footer_social">
            <Link
              className="footer_social_links"
              to="#"
              target="_blank"
            >
              <img
                loading="lazy"
                decoding="async"
                className="footer_social_img"
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="Linkedin"
              />
            </Link>
            <a
              className="footer_social_links"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                decoding="async"
                className="footer_social_img"
                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a
              className="footer_social_links"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                decoding="async"
                className="footer_social_img"
                src="https://img.icons8.com/color/48/000000/twitter-squared.png"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
        <div className="footer_copyrights">
          <div className="footer_ruler"></div>
          <p className="footer_copyright">
          Copyright © 2022. All rights reserved | ego-education.com <br />
          Powered by The Digital 
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
