import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Welcome-section/Welcome.css';
import WaveShape from '../WaveShape';
import prog from '../../assets/logo/Progetto-senza-titolo.png'

function Bac() {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
    gsap.defaults({ ease: "power3" });

    gsap.set(".conf", { x: -100 });

    ScrollTrigger.batch(".conf", {
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
    <div className='min-h-full overflow-x-hidden z-0 conf'>
      <WaveShape />
      <div className='welcome w-full'>
        <div className="flex justify-center md:justify-end lg:justify-end">
          {/* <h1 className='text-2xl lg:text-4xl'>WELCOME TO EGO</h1> */}
          <img src={prog} className='h-[100px] lg:h-full md:h-full '/>
        </div>
        {/* <WaveShape rotate={'rotate(180deg)'} /> */}
      </div>
    </div>
  );
}

export default Bac;
