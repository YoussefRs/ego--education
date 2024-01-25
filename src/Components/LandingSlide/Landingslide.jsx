import React, { useEffect, useState } from "react";
import "./LandingSlide.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import IntroVideo from '../../assets/video/finalIntro.mp4'
import Loader from "../Loader/Loader";

const Landingslide = () => {
  
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const videoElement = document.getElementById("video-background");
    videoElement.addEventListener("loadeddata", () => {
      setVideoLoaded(true);
    });

    return () => {
      videoElement.removeEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    };
    // <main className={`fade-in ${videoLoaded ? "show" : ""} main` }></main>
  }, []);

  return (
    <main >
      {!videoLoaded &&  <Loader />}
      <div className={`fade-in ${videoLoaded ? "show" : ""} main video-container` }>
        <video
          autoPlay
          muted
          loop
          id="video-background"
          className="videoo"
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
