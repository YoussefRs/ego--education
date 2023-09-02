import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Welcome.css';
import WaveShape from '../WaveShape';

function Welcome() {
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
    <div className='min-h-full overflow-x-hidden z-0 confWrap'>
      {/* <WaveShape /> */}
        {/* <WaveShape rotate={'rotate(180deg)'} /> */}
    </div>
  );
}

export default Welcome;
