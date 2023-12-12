import React, { useEffect } from "react";
import "./Offers.css";
import AOS from "aos";
import { achievements, master, English } from "../../Data/achievements";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="achievements_section">
      <div className="achievements_header">
        <div className="achievements_headline_div">
          <h1 data-aos={"zoom-in-up"} className="achievements_thought">
            {" "}
            OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM
          </h1>
        </div>
        <div className="achievements_heading">
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            className="achievements_line_1"
          ></div>
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
              className="achievements_title"
            >
              EDUCATIONAL OFFERS
            </h1>
          </div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="achievements_line_2"
          ></div>
        </div>
      </div>
      <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"1600"}>
          BACHELOR'S DEGREES
        </h1>
        {achievements.map((a, i) => {
          return (
            <div className="achievement_container right">
              <div
                data-aos-delay={"0"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                  <div className="achievement_devicer"></div>
                  <p>{a.offer_duration}</p>
                  <p>{a.offer_fees}</p>
                  <div className="achievement_buttons">
                  <button className="offer_readmore_btn">
                    <NavLink
                      activeclassname="active"
                      aria-current="page"
                      to={a.offer_link}
                    >
                      <div>READ MORE</div>
                    </NavLink>
                  </button>
                  <button className="offer_readmore_btn">
                    <NavLink
                      activeclassname="active"
                      aria-current="page"
                      to={a.offer_link}
                    >
                      <div>COURSES</div>
                    </NavLink>
                  </button>
                  </div>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"0"}>
          MASTER DEGREES
        </h1>
        {master.map((a, i) => {
          return (
            <div className="achievement_container right">
              <div
                data-aos-delay={"0"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                  <div className="achievement_devicer"></div>
                  <p>{a.offer_duration}</p>
                  <p>{a.offer_fees}</p>
                  <button className="offer_readmore_btn">
                    <NavLink
                      activeclassname="active"
                      aria-current="page"
                      to={a.offer_link}
                    >
                      <div>READ MORE</div>
                    </NavLink>
                  </button>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="title" data-aos={"zoom-out"} data-aos-delay={"0"}>
          ENGLISH LANGUAGE COURSES
        </h1>
        {English.map((a, i) => {
          return (
            <div className="achievement_container right">
              <div
                data-aos-delay={"0"}
                data-aos={"fade-left"}
                className="achievement_content_container"
              >
                <div className="achievements_contents">
                  <h2>{a.name}</h2>
                  <div className="achievement_devicer"></div>
                  <p>{a.description}</p>
                  <div className="achievement_devicer"></div>
                  <p>{a.offer_duration}</p>
                  <p>{a.offer_fees}</p>
                  <button className="offer_readmore_btn">
                    <NavLink
                      activeclassname="active"
                      aria-current="page"
                      to={a.offer_link}
                    >
                      <div>READ MORE</div>
                    </NavLink>
                  </button>
                </div>
                <div className="achievement_image_conainer">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="achievement_image"
                    src={a.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
