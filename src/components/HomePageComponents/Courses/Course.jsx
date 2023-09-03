import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import '../Welcome-section/Welcome.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MulSlider from '../Slider/MulSlider';
import { courses } from '../../../utils/data';

gsap.registerPlugin(ScrollTrigger)

function Course() {
  
  const course = useRef(null);

  useEffect(() => {
    
    const el = course.current;
    gsap.fromTo(el, { x:100, opacity: 0 }, {opacity:1, x: 0, duration: 2, scrollTrigger: {
      trigger: el,
      scrub: true
    }})

  },[])

  return (
    <div>
    <div className="flex items-center">
      <h1 className="mx-4 text-sm text-white lg:text-2xl" ref={course}>
        LATEST COURSE
      </h1>
      <div className="flex-grow border-b border-gray-600 lg:mr-8 lg:ml-8"></div>
    </div>
      <MulSlider />
  </div>
  );
}

export default Course;
