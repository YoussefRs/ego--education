import React, { useEffect } from 'react'
import Logo from '../assets/logo/logo-ego-white-2.png'
import { gsap } from 'gsap'

function Intro() {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    
    useEffect(() => {
        tl.to("span", { y: "0%", duration: 1,immediateRender: false, stagger: 0.20});
        tl.to(".slider", { y: "-100%", duration: 4, delay: 0.5});
        tl.to(".intro", { y: "-100%", duration: 1}, "-=1.2");
        tl.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 1}, "-=.5");
        
    }, [])
    
  return (
    <>
        <div className='intro bg-black h-screen w-screen fixed flex justify-between items-center z-10 top-0 left-0 grow'>
            <div className=" flex justify-center items-center w-full gap-5 hide ">
            <span className='hide '><img src={Logo} alt='ego-education logo' className="text" style={{height: 100}}/></span>
                <div className='p-0 m-0 text-center'>
                <h2 className='hide '>
                    <span className='text-2xl sm:text-sm md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Own your future</span>
                </h2>
                <h2 className='hide '>
                    <span className='text-2xl sm:text-l md:text-5xl lg:text-6xl xl:text-7xl font-bold'>learning <span style={{color: '#046635', textDecoration: 'underline', }}
                        className='text-2xl sm:text-l md:text-5xl lg:text-6xl xl:text-7xl font-bold'
                        >
                        new skills</span>
                    </span>
                </h2>  
                <h2 className='hide '>
                    <span className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>online.</span>
                </h2>  
                </div>
            </div>
        </div>
        <div className="slider"></div>
    </>
  )
}

export default Intro
