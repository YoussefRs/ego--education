import React, { useEffect, useState } from "react";
import "./LandingSlide.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import IntroVideo from '../../assets/video/finalIntro.mp4'

const Landingslide = () => {
  
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setVideoLoaded(true);
  }, []);
  return (
    <main className={`fade-in ${videoLoaded ? "show" : ""} main` }>
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          id="video-background"
          className="videoo"
        >
          <source
            src={IntroVideo}
            // src="https://ligaeducacional.com.br/images/uploads/posts/liga-educacional-reduzido-1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className='grow'></div>
    </main>
  );
};
export default Landingslide;
