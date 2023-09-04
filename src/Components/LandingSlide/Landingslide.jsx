import React, { useEffect } from "react";
// import draicimage from "../../Assets/logo_white.png";
// import svg from "../../Assets/draic_logo.svg";
import "./LandingSlide.css";
import { Link } from "react-router-dom";
import AOS from "aos";
// import 'aos/dist/aos.css';
import IntroVideo from "../../assets/video/SCENE_01.mp4"

const Landingslide = () => {

  return (
    <main>
      <div class="video-container">
        <video
          autoPlay
          muted
          loop
          id="video-background"
          class="videoo"
        >
          <source
            src={IntroVideo}
            type="video/mp4"
          />
        </video>
      </div>
      <div className='grow'></div>
    </main>
  );
};
export default Landingslide;
