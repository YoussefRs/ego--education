import React, { useEffect } from "react";
import Landingslide from "../Components/LandingSlide/Landingslide";
import AOS from "aos";
import "aos/dist/aos.css";
import Event from "./Courses/Event";
import HomeAbout from "./Home About Us/Home-aboutus";
import Dec2 from "./CoreTeam/deck2"

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Landingslide />
      <Event />
      <HomeAbout />
      <Dec2 />
    </div>
  );
};

export default Home;
