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
        <div class="distribution-map">
          <img src={map} alt="" />

          <button class="map-point" style={{ top: "15%", left: "35%" }}>
            <div class="content">
              <div class="centered-y">
                <h2>A Place</h2>
                <p>
                  You can put plenty of details in here. In the original, I
                  listed contact information and linked phone numbers and email
                  addresses.
                </p>
              </div>
            </div>
          </button>
          <button class="map-point" style={{ top: "35%", left: "50%" }}>
            <div class="content">
              <div class="centered-y">
                <h2>Another Place</h2>
                <p>Lorem ipsum something something</p>
              </div>
            </div>
          </button>
          <button class="map-point" style={{ top: "76%", left: "82.5%" }}>
            <div class="content">
              <div class="centered-y">
                <h2>Marauder Town</h2>
                <p>I solemnly swear that I am up to no good</p>
              </div>
            </div>
          </button>
          <button class="map-point" style={{ top: "45%", left: "16%" }}>
            <div class="content">
              <div class="centered-y">
                <h2>Logan's Mum</h2>
                <p>I’m a marshmallow</p>
              </div>
            </div>
          </button>
          <button class="map-point" style={{ top: "60%", left: "53%" }}>
            <div class="content">
              <div class="centered-y">
                <h2>Toto</h2>
                <p>I bless the rains</p>
              </div>
            </div>
          </button>
          <button class="map-point" style={{ top: "25%", left: "70%" }}>
            <div class="content">
              <div class="centered-y">
                <h2>With Love</h2>
                <p>— 007</p>
              </div>
            </div>
          </button>
        </div>
    </div>
  );
}
