import React, { Fragment, useEffect } from "react";
import "./E-Offers.css";
import {bachelors, masters} from "../../Data/offers-list.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Background from "../Background";
import MetaData from "../../Data/MetaData";

const Eoffers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="offer-page">
      <MetaData title="Educational Offers | eGO Education" />
      <div className="offer-header">
        <div className="offer_headline_div">
          <h1 data-aos={"zoom-in-up"} className="offer-moto">
          <Background />
            A GLIMPSE OF EDUCATIONAL OFFERS
          </h1>
        </div>
        <div className="offer-seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="offer-line1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="offer-page-title"
            >
              BACHELOR'S DEGREES
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="offer-line2"
          ></div>
        </div>
      </div>
      <div className="offers-container">
        {bachelors.map((card, i) => {
          return (
            <Fragment key={i}>
              <div
                data-aos={"zoom-in-up"}
                data-aos-delay={`${i > 2 ? "0" : "700"}`}
                className="individual-offer-container"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="offer-image"
                  src={card.imgURL}
                  alt="Rome"
                />
                <h1 className="offer-title">{card.offer_name}</h1>
                <div className="offer-decoration-line" />
                  <p className="offer-description">{card.offer_duration}</p>
                  <p className="offer-description">{card.offer_fees}</p>
                <div className="offer-decoration-line" />
                  <button className="offer_readmore_btn">
                    <NavLink
                      activeclassname="active"
                      aria-current="page"
                      to={card.offer_link}                     >
                      <div>READ MORE</div>
                    </NavLink>
                  </button>
                </div>
            </Fragment>
          );
        })}
      </div>

      <div className="offer-header-2">
        <div className="offer-seperator">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="offer-line1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="offer-page-title"
            >
              MASTER'S DEGREES
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="offer-line2"
          ></div>
        </div>
      </div>
      <div className="offers-container">
        {masters.map((card, i) => {
          return (
            <Fragment key={i}>
              <div
                data-aos={"zoom-in-up"}
                data-aos-delay={`${i > 2 ? "0" : "700"}`}
                className="individual-offer-container"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="offer-image"
                  src={card.imgURL}
                  alt="Rome"
                />
                <h1 className="offer-title">{card.offer_name}</h1>
                <div className="offer-decoration-line" />

                <p className="offer-description">{card.offer_duration}</p>
                <p className="offer-description">{card.offer_fees}</p>
                <div className="offer-decoration-line" />
                <button className="offer_readmore_btn">
                  <NavLink
                    activeclassname="active"
                    aria-current="page"
                    to={card.offer_link}                     >
                    <div>READ MORE</div>
                  </NavLink>
                </button>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Eoffers;
