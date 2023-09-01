import React, { useEffect } from 'react'
import './Exp.css'
import MulSlider from '../Slider/MulSlider'
import WaveShape from '../WaveShape'
import Bac from '../Degrees-Section/Bac'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Exp() {
    useEffect(() => {
        if (typeof window !== `undefined`) {
          gsap.registerPlugin(ScrollTrigger);
          gsap.core.globals("ScrollTrigger", ScrollTrigger);
        }
        gsap.defaults({ ease: "power3" });
    
        gsap.set(".confW", { x: -100 });
    
        ScrollTrigger.batch(".confW", {
          onEnter: batch =>
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              stagger: { each: 0.15 },
              overwrite: true,
            }),
          onLeave: batch => gsap.set(batch, { opacity: 0, x: 100, overwrite: true }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15, overwrite: true }),
          onLeaveBack: batch => gsap.set(batch, { opacity: 0, x: -100, overwrite: true })
        });
      }, []);
  return (
    <div className='min-h-full overflow-hidden confW'>
                {/* <WaveShape  rotate={'rotateY(180deg)'}/> */}
                <div className='welcome w-screen'>
                    <div className="heading w-screen pr-8 pl-8 flex justify-between items-center z-2" >
                        <h1 className='text-2xl lg:text-4xl confW'>BACHELOR'S DEGREES </h1>
                        {/* <p className='text-sm lg:text-lg'>VIEW MORE </p> */}
                    </div>
                
                    <div className=" lg:ml-8 lg:mr-12 ">
                        <MulSlider />
                    </div>
                </div>
                    <WaveShape rotate={'rotateY(180deg)'}/>
            </div>
  )
}

export default Exp
