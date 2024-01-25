import React, { Fragment, useEffect, useState } from "react";
import aboutusinfo from "../../Data/home-about-us";
import "./Home-aboutus.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import ShapedWave from "../CustomWaveShape/ShapedWave";


function HomeAbout() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  
  return (
    <div className="aboutsection1">
      {/* <ShapedWave /> */}
      <div className="firstrow">
        <h1 data-aos={"zoom-out"} className="wheredowe">
          WHERE DO WE COME FROM
        </h1>
        <div className="seperator">
          <div>
            <h1
              data-aos={"zoom-out"}
              data-aos-delay={"700"}
              id="about"
            >
              ABOUT US
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
      {aboutusinfo.map((card, i) => {
        return (
          <Fragment key={i}>
            <div className="thirdrow">
              <div className="divs1" data-aos={"fade-right"} >
                <h1 className="title1">WHO WE ARE</h1>
                <p className="paragraph1">{card.whoweare}</p>
              </div>
              <div className="divs1" data-aos={"zoom-out"} >
                <h1 className="title1">WHAT WE DO</h1>
                <p className="paragraph1">{card.whatwedo}</p>
              </div>
              <div className="divs2" data-aos={"fade-left"} >
                <h1 className="title1">OUR MISSION</h1>
                <p className="paragraph1">{card.ourmission}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default HomeAbout;