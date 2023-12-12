import React from "react";
import "./WorldMap.css";
import map from "../../assets/map_green.png";

export default function WorldMap() {
  return (
    <div className="aboutsection1">
      <div className="firstrow">
        <h1 data-aos={"zoom-out"} className="wheredowe">
          WHERE CAN I USE MY DEGREE 
        </h1>
        <div className="seperator">
          <div>
            <h1 data-aos={"zoom-out"} data-aos-delay={"700"} id="about">
              INTERNATIONAL DEGREE
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
        </div>
      </div>
        <div className="distribution-map">
          <img src={map} alt="" />

          <button className="map-point" style={{ top: "15%", left: "35%" }}>
            <div className="map-content">
              <div className="centered-y">
                <h2>Country</h2>
                <p>
                  Description
                </p>
              </div>
            </div>
          </button>
          <button className="map-point" style={{ top: "35%", left: "50%" }}>
            <div className="map-content">
              <div className="centered-y">
              <h2>Country</h2>
                <p>
                  Description
                </p>
              </div>
            </div>
          </button>
          <button className="map-point" style={{ top: "76%", left: "82.5%" }}>
            <div className="map-content">
              <div className="centered-y">
              <h2>Country</h2>
                <p>
                  Description
                </p>
              </div>
            </div>
          </button>
          <button className="map-point" style={{ top: "45%", left: "16%" }}>
            <div className="map-content">
              <div className="centered-y">
              <h2>Country</h2>
                <p>
                  Description
                </p>
              </div>
            </div>
          </button>
          <button className="map-point" style={{ top: "60%", left: "53%" }}>
            <div className="map-content">
              <div className="centered-y">
              <h2>Country</h2>
                <p>
                  Description
                </p>
              </div>
            </div>
          </button>
          <button className="map-point" style={{ top: "25%", left: "70%" }}>
            <div className="map-content">
              <div className="centered-y">
              <h2>Country</h2>
                <p>
                  Description
                </p>
              </div>
            </div>
          </button>
        </div>
    </div>
  );
}
