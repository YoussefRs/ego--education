import React from "react";
import "./Event.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  className: 'sample',
  autoplay: true,
  arrows: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
};

const data = [
  {
    name: "COURSE TITLE",
    description: "COURSE DESCRIPTION",
    img : "https://www.concentrix.com/wp-content/uploads/2023/06/home-insights-forrester-thumb-1.webp"
  },
  {
    name: "COURSE TITLE",
    description: "COURSE DESCRIPTION",
    img : "https://www.concentrix.com/wp-content/uploads/2023/06/home-insights-forrester-thumb-1.webp"
  },
  {
    name: "COURSE TITLE",
    description: "COURSE DESCRIPTION",
    img : "https://www.concentrix.com/wp-content/uploads/2023/06/home-insights-forrester-thumb-1.webp"
  },
];



const Event = () => {
  return (
    <>
      <div className="outer-event">    <div className="firstrow">
        <h1 data-aos={"zoom-out"} className="wheredowe">
          WHAT DO WE PROVIDE
        </h1>
        <div className="seperator">
          <div className="events-upcoming-events">
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              id="about"
            >
              LATEST COURSES 
            </h1>
          </div>
          <div
            data-aos={"fade-right"}
            data-aos-delay={"700"}
            id="lineaboutus1"
          ></div>
          <div
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            id="lineaboutus2"
          ></div>
        <button className="offer_readmore_btn_home">
            <NavLink
            data-aos={"zoom-out"}
              to="/courses">
            <div>VIEW MORE</div>
          </NavLink>
        </button>
        </div>
      </div>
          </div>
        <Slider {...settings}>
        {data.map((event, i) => (
            <div className="event_container" key={i} data-aos={"zoom-out"}>
              <div className="event_image_container">
                <img className="event_img" src={event.img} alt="" />
              </div>
              <div className="event_content_container">
                <h1 className="event_name">{event.name}</h1>
                <p className="event_description">{event.description}</p>
                <div className="event_separator"></div>
                <button className="event_btn">Apply</button>
              </div>
            </div>
        ))}
        </Slider>
    </>
  );
};

export default Event;
