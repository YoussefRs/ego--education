import React, { Fragment, useEffect, useState } from "react";
import "./E-Offers.css";
import {bachelors, masters} from "../../Data/offers-list.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import Background from "../Background";
import MetaData from "../../Data/MetaData";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebaseConfig.js";

const Eoffers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [courses, setCourses] = useState([]);

const fetchCourseData = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "courses"));
    const coursesArray = [];

    for (const doc of querySnapshot.docs) {
      const courseData = { id: doc.id, ...doc.data(), modules: [] };

      // Fetch subcollection 'modules' for each course
      const modulesSnapshot = await getDocs(collection(doc.ref, "modules"));
      modulesSnapshot.forEach((moduleDoc) => {
        courseData.modules.push({ id: moduleDoc.id, ...moduleDoc.data() });
      });

      coursesArray.push(courseData);
    }

    setCourses(coursesArray);
  } catch (error) {
    console.error("Error fetching course data:", error);
  }
  };

  useEffect(() => {
fetchCourseData();
  }, [])
  console.log(courses)

  return (
    <div className="offer-page">
      <div className="offer-header">
        <div className="offer_headline_div">
          <h1 data-aos={"zoom-in-up"} className="offer-moto">
          <Background />
            A GLIMPSE OF EDUCATIONAL COURSES
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
              OUR COURSES
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
                      <div>BUY</div>
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
