import React, { useEffect } from 'react'
import WaveShape from '../WaveShape'
import MulSlider from '../Slider/MulSlider'
import '../Welcome-section/Welcome.css';
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
    <div className='min-h-full overflow-hidden confWrap'>
                <WaveShape  rotate={'rotateY(180deg)'}/>
                <div className='welcome w-screen'>
                    <div className="heading w-screen pr-8 pl-8 flex justify-between items-center confWrap z-2" >
                        <h1 className='text-2xl lg:text-4xl'>COURSES </h1>
                        {/* <p className='text-sm lg:text-lg'>VIEW MORE </p> */}
                    </div>
                
                    <div className="confWrap lg:ml-8 lg:mr-12">
                        <MulSlider />
                    </div>
                </div>
                    {/* <WaveShape rotate={'rotate(180deg)'}/> */}
            </div>
  )
}

export default Course
