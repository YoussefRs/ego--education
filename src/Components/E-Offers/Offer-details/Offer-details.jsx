import React from "react";
import "./Offer-details.css";

// const ProfDepList = members.filter((member) => member[3] === "Programming");

function OfferDetails(props) {
  console.log(props)
  return (
    <>
      <div className="offer-details-page">
        <div className="offer-details-hero-container">
          <div className="offer-details-text-container">
            <h1 className="offer-details-title">{props.data.title}</h1>
            <p className="offer-details-description">
           {props.data.description}
           </p>
          </div>
          <div className="offer-details-image-container">
            <img
              loading="lazy"
              decoding="async"
              src={props.data.imgUrl}
              className="offer-details-image"
              alt="departimg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
