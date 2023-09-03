import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import '../Welcome-section/Welcome.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MulSlider from '../Slider/MulSlider';
gsap.registerPlugin(ScrollTrigger)

function Team() {
  
  const course = useRef(null);

  useEffect(() => {
    
    const el = course.current;
    gsap.fromTo(el, { x:100, opacity: 0 }, {opacity:1, x: 0, duration: 1, scrollTrigger: {
      trigger: el,
      start: "top center", // Adjust the start point as needed
        end: "bottom center", 
      scrub: true
    }})

  },[])

  return (
    <div className='bg-gradient-to-t from-[#008A8A] to-[#004C4C] z-[-1] pt-10' >
    <div className="section-wrapper" ref={course}>
      <div className="flex items-center">
        <h1 className="mx-4 text-sm text-white lg:text-2xl " >
        MASTER'S DEGREES
        </h1>
        <div className="flex-grow border-b border-white lg:mr-8 lg:ml-8"></div>
      </div>
      <MulSlider />
    </div>
  
    <div className="section-wrapper">
      <div className="flex items-center">
        <h1 className="mx-4 text-sm text-white lg:text-2xl">
          BACHELOR'S DEGREES
        </h1>
        <div className="flex-grow border-b border-white lg:mr-8 lg:ml-8"></div>
      </div>
      <MulSlider />
    </div>
  </div>
  

      
  );
} 

export default Team;
