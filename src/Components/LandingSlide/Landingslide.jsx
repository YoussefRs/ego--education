import React, { useEffect, useRef, useState } from "react";
// import draicimage from "../../Assets/logo_white.png";
// import svg from "../../Assets/draic_logo.svg";
import "./LandingSlide.css";
import { Link } from "react-router-dom";
import AOS from "aos";
// import 'aos/dist/aos.css';
import IntroVideo from "../../assets/video/SCENE_01.mp4"
import ShapedWave from "../CustomWaveShape/ShapedWave";
import Aos from "aos";

const Landingslide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
            // src={IntroVideo}
            src="https://ligaeducacional.com.br/images/uploads/posts/liga-educacional-reduzido-1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className='grow'></div>
      <ShapedWave />
    </main>
  );
};
export default Landingslide;
