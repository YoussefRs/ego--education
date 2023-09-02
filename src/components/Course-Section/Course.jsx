import React, { useEffect } from 'react'
import './Course.css'
import WaveShape from '../WaveShape'
import MulSlider from '../Slider/MulSlider'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Course() {
    
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
    gsap.defaults({ ease: "power3" });

    gsap.set(".confWrap", { x: 100 });

    ScrollTrigger.batch(".confWrap", {
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          stagger: { each: 0.15 },
          overwrite: true,
        }),
      onLeave: batch => gsap.set(batch, { opacity: 0, x: -100, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0, x: 100, overwrite: true })
    });
  }, []);
  return (
    <div className=''>
                {/* <WaveShape  rotate={'rotateY(180deg)'}/> */}
                <div className=''>
                  <div className="" >
                        {/* <p className='text-sm lg:text-lg'>VIEW MORE </p> */}
                    </div>
                
                    <div className="lg:ml-8 lg:mr-12">
                      <h1 className='text-2xl lg:text-4xl text-left'>COURSES </h1>
                        <MulSlider />
                    </div>
                </div>
                    {/* <WaveShape rotate={'rotate(180deg)'}/> */}
            </div>
  )
}

export default Course
