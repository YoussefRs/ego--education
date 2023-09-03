import React, { useEffect } from 'react'
import { gsap } from 'gsap'

function Intro() {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
    
    useEffect(() => {
        tl.to(".slider", { y: "100%", duration: 2, delay: 0.5});
        tl.to(".intro", { y: "100%", duration: 1}, "-=1.2");
        
    }, [])
    
  return (
    <>
          <div class="intro">
        <div class="intro-text">
            <h1 class="hide">
                <span class="text-green-500">The best university</span>
            </h1>
            <h1 class="hide">
                <span class="text">is the university</span>
            </h1>
            <h1 class="hide">
                <span class="text">of life.</span>
            </h1>
        </div>
    </div>
        <div className="slider"></div>
    </>
  )
}

export default Intro
