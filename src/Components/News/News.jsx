import React, { useEffect, useState } from "react";
import "./News.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import IntroVideo from '../../assets/video/finalIntro.mp4'

function News() {
    const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    setVideoLoaded(true);
  }, []);
  return (
      <div className="news">
        <img src = "https://i.giphy.com/media/cfGmVRsJI6wq6noGxP/giphy.webp"/>
      </div>
    
  )
}

export default News
