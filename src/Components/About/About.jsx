import React, { useEffect } from "react";
// import { NavLink } from 'react-router-dom';
import InfoCard from "./components/InfoCard";
import NeumericInfobox from "./components/NeumericInfobox";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Dec2 from "../CoreTeam/deck2"

const card1Text =
  "The International E-Learning Institute Ltd (IELI) is a company established since October 23rd, 2017 in Malta, by deed C83113, created by a decennial experience of its founders in the field of university education.";
const card1Icon =
  "https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-group-social-media-sbts2018-solid-sbts2018.png";
const card1Title = "WHO WE ARE";

const card2Text =
  "Nowadays, IELI’s activities reflect those inherited by the Main Force brand. Thus acquiring an important know-how in the field of distance education and university internationalization on behalf of different Italian universities. With more than 5,000 students enrolled through our network, we have guaranteed constant support during their training: from orientation to enrollment procedures, from technical support to study assistance.";
const card2Icon =
  "https://img.icons8.com/ios-filled/50/ffffff/mission-of-a-company.png";
const card2Title = "ACTIVITIES";

const card3Text =
  "With the new eGO brand, Ieli intends to initiate this internationalization process through highly specialized, innovative and professionalizing courses for active employment research.";
const card3Icon = "https://img.icons8.com/android/48/ffffff/rocket.png";
const card3Title = "VISION";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div className="about-body">
      <div className="aboutmain">
        <div className="about-title-body">
          <h1 data-aos={"zoom-in-up"} className="about-subheading">
            WHO WE ARE AND WHY WE ARE DOING THIS
          </h1>
          <div className="about-seperator">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="about-title-line1"
            ></div>
            <div>
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"1200"}
                className="about-heading"
              >
                ABOUT US
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="about-title-line2"
            ></div>
          </div>
        </div>

        <div className="about-content">
          <div
            data-aos={"fade-up"}
            data-aos-delay={"1000"}
            className="about-content-first-row"
          >
            <InfoCard
              contentText={card1Text}
              cardIcon={card1Icon}
              cardTitle={card1Title}
              key={card1Title}
            />
            <InfoCard
              contentText={card2Text}
              cardIcon={card2Icon}
              cardTitle={card2Title}
              key={card2Title}
            />
          </div>
          <div
            data-aos={"fade-up"}
            data-aos-delay={"1400"}
            className="about-content-second-row"
          >
            <InfoCard
              contentText={card3Text}
              cardIcon={card3Icon}
              cardTitle={card3Title}
              key={card3Title}
            />
            <div className="neumeric-info-boxes">
              <div className="neumeric-info-row-1">
                <NeumericInfobox NeumericTitle={"Members"} n={"30+"} />
                <NeumericInfobox NeumericTitle={"Projects"} n={"50+"} />
              </div>
              <div className="neumeric-info-row-2">
                <NeumericInfobox NeumericTitle={"Alumini"} n={"300+"} />
                <NeumericInfobox NeumericTitle={"Achievements"} n={"50+"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Dec2 /> */}
    </div>
  );
};

export default About;
