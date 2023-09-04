import React from "react";
import "./Event.css";
import Events, { CarouselItem } from "./Events";

const data = [
  {
    name: "COURSE TITLE",
    description: "COURSE DESCRIPTION",
  },
  {
    name: "COURSE TITLE",
    description: "COURSE DESCRIPTION",
  },
  {
    name: "COURSE TITLE",
    description: "COURSE DESCRIPTION",
  },
];

const Event = () => {
  return (
    <>
      <Events>
        {data.map((event, i) => (
          <CarouselItem>
            <div className="event_container">
              <div className="event_image_container">
                <img className="event_img" src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/1-How-to-Create-an-Online-Course-Thumbnail.jpg" alt="" />
              </div>
              <div className="event_content_container">
                <h1 className="event_name">{event.name}</h1>
                <p className="event_description">{event.description}</p>
                <div className="event_separator"></div>
                {/* <button className="event_btn">Register</button> */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </Events>
    </>
  );
};

export default Event;
