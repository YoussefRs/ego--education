import React, { useEffect, useState } from "react";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HomeCourseSlider() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { title, subtitle, specialWord } = t("home.courseSlider");
  

  return (
    <div className="swiper-container" data-aos={"zoom-in"}>
      <div style={{ display: "none" }}>
      </div>
      <div className="container">
        <h2 className="container-heading-green" style={{ color: "#046635" }}>
          {title}{" "}
        </h2>
        <h1 className="container-title text-black fw-bold text-center mb-5">
          {subtitle} <span style={{ color: "#046635" }}>{specialWord}</span>
        </h1>
        <div className="row">
          <div className="col d-flex justify-content-end course_link">
            <Link to={"/courses"} >
              view more
            </Link>
          </div>
        </div>
      </div>
      <CourseSlider />
    </div>
  );
}

export default HomeCourseSlider;
