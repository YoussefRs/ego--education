import React, { Fragment, useEffect, useState } from "react";
import aboutusinfo from "../../Data/home-about-us";
import "./Home-aboutus.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import ShapedWave from "../CustomWaveShape/ShapedWave";


function HomeAbout() {
  const [activeindex, setActiveIndex] = useState(0);
  const [previndex, setPrevIndex] = useState(3);
  const [nextindex, setNextIndex] = useState(1);
  const [move, setMove] = useState("right");

  const [activeindex2, setActiveIndex2] = useState(0);
  const [previndex2, setPrevIndex2] = useState(2);
  const [nextindex2, setNextIndex2] = useState(1);
  const [move2, setMove2] = useState("right");

  const [activeindex3, setActiveIndex3] = useState(0);
  const [previndex3, setPrevIndex3] = useState(2);
  const [nextindex3, setNextIndex3] = useState(1);
  const [move3, setMove3] = useState("right");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [activeindex]);

  // setTimeout(() => {
  //   setPrevIndex(activeindex)
  //   setActiveIndex((activeindex + 1) % 3)
  // }, 5000)

  const handlenext = () => {
    setPrevIndex(activeindex);
    setActiveIndex((activeindex + 1) % 4);
    setNextIndex((activeindex + 2) % 4);
    setMove("right");
  };
  const handleprev = () => {
    setPrevIndex((previndex + 3) % 4); 
    setActiveIndex((activeindex + 3) % 4); 
    setNextIndex(activeindex);
    setMove("left");
  };

  const handlenext2 = () => {
    setPrevIndex2(activeindex2);
    setActiveIndex2((activeindex2 + 1) % 2);
    setNextIndex2((activeindex2 + 2) % 2);
    setMove2("right");
  };
  const handleprev2 = () => {
    setPrevIndex2(previndex2 - 1 < 0 ? 2 : previndex2 - 1);
    setActiveIndex2(activeindex2 - 1 < 0 ? 2 : activeindex2 - 1);
    setNextIndex2(activeindex2);
    setMove2("left");
  };
  
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
            <div className="secondrow" >
              <div className="secondrowcol1">
                <div className="our-college-slider">
                  <i className="home-about-arrow left" onClick={handleprev} />
                  <div className="slider-content">
                    {card.ourcollegeimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourcollegeimg 
                        ${index === activeindex
                            ? "active"
                            : index === previndex
                              ? "prev"
                              : index === nextindex
                                ? "next"
                                : ""
                          } 
                        ${move === "left"
                            ? "left"
                            : move === "right"
                              ? "right"
                              : ""
                          }
                      `}
                        src={image}
                        alt="collegepic"
                        key={index}
                      />
                    ))}
                  </div>
                  <i className="home-about-arrow right" onClick={handlenext} />
                </div>
                <Link to="#" target="_blank" className="home-about-slider-image-container" >
                  <h1 className="imagetext">BACHELOR'S DEGREES</h1>
                </Link>
              </div>

              <div className="secondrowcol1">
                <div className="our-college-slider">
                  <i className="home-about-arrow left" onClick={handleprev2} />
                  <div className="slider-content">
                    {card.ourmastersimages.map((image, index) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        className={`ourcollegeimg 
                        ${index === activeindex2
                            ? "active"
                            : index === previndex2
                              ? "prev"
                              : index === nextindex2
                                ? "next"
                                : ""
                          } 
                        ${move2 === "left"
                            ? "left"
                            : move2 === "right"
                              ? "right"
                              : ""
                          }
                      `}
                        src={image}
                        alt="collegepic"
                        key={index}
                      />
                    ))}
                  </div>
                  <i className="home-about-arrow right" onClick={handlenext2} />
                </div>
                <Link to="#" target="_blank" className="home-about-slider-image-container" >
                  <h1 className="imagetext">MASTER'S DEGREES</h1>
                </Link>
             </div>

              
            </div>
            <div className="thirdrow">
              <div className="divs1">
                <h1 className="title1">WHO WE ARE</h1>
                <p className="paragraph1">{card.whoweare}</p>
              </div>
              <div className="divs1">
                <h1 className="title1">WHAT WE DO</h1>
                <p className="paragraph1">{card.whatwedo}</p>
              </div>
              <div className="divs2">
                <h1 className="title1">OUR MISSION</h1>
                <p className="paragraph1">{card.ourmission}</p>
              </div>
            </div>
          </Fragment>
        );
      })}
      {/* <ShapedWave rotate={'rotateX(180deg)'}/> */}
    </div>
  );
}

export default HomeAbout;