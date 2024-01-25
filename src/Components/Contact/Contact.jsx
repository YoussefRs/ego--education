import React, { useEffect } from "react";
import "./Contact.css";
import Background from "../Background";
import AOS from "aos";
import MetaData from "../../Data/MetaData";
import  { NavLink } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
    <MetaData title="Contact | eGO Education" />
      <div className="contact_main_body">
        <div className="contact_headline_div">
          <h1 data-aos={"zoom-in-up"} className="contact_headline">
            <Background />
            LET'S HAVE A CHAT !
          </h1>
        </div>
        <div className="contactus_seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="contactusline1"
          ></div>
          <div className="contact_topic">
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="contactusheading"
            >
              GET IN TOUCH
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="contactusline2"
          ></div>
        </div>
        <div className="contact_form_details">
          <div
            className="join_team"
            data-aos={"fade-right"}
            data-aos-delay={"1500"}
          >
            <div className="contact_fillform_div">
              <h3 className="contact_fillform fillform2">
                Please fill the form and try for free the platform{" "}
              </h3>
            </div>
            <div>
              <div className="contact_para">
                <p>
                  Feel free to try the platform by filling the form below!
                </p>
              </div>
            </div>
            <div className="contact_joinnow_div">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-Bja69pPMSrK48ARFjWI3yJRe0WSIzdDMCMaYv6spkSI4yw/viewform"
                rel="noreferrer"
                target="_blank"
              >
                <button className="contact_joinnowbtn">JOIN NOW</button>
              </a>
            </div>
          </div>

          <div
            data-aos={"fade-left"}
            data-aos-delay={"1500"}
            className="contact_information_div"
          >
            <h1 className="contact_info_headline">CONTACT INFORMATION</h1>
            <div className="contact_info_email_div">
              <img
                loading="lazy"
                decoding="async"
                className="contact_icons"
                alt="email"
                src="https://img.icons8.com/material-rounded/24/ffffff/new-post.png"
              />
              <div className="contact_infoemail">
                <h1 className="contact_info_subhead">WRITE TO US</h1>
                <h1 className="contact_all_information">
                  info@ego-education.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
