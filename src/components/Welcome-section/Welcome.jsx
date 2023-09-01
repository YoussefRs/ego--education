import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Welcome.css';
import WaveShape from '../WaveShape';

function Welcome() {

  return (
    <div className='min-h-full overflow-x-hidden z-0 confWrap'>
      <WaveShape />

      <div className='welcome w-full'>
        <div className="heading ">
          <h1 className='text-white text-center text-lg lg:text-4xl'>WELCOME TO EGO</h1>
        </div>
        <div className="courses">
          <div className="course-details">
            <h3>What We Do</h3>
            <p className='text-sm'><span style={{ color: '#046635' }}>Ieli</span> is in the process of being accredited by Malta Further and Higher Education Authority (MFHEA)
              to obtain a High Education Institution license for its brand <span style={{ color: '#046635' }}>eGO</span> . <br /> <br />
              <span style={{ color: '#046635' }}>eGO</span> represents a new international project of integrated, innovative, highly specialized training.
              A new Higher Education Institution aimed not only for young people, but also for whomever needs professional
              requalification or updating status. <br /> <br />
            </p>
          </div>
        </div>
        {/* <WaveShape rotate={'rotate(180deg)'} /> */}
      </div>
    </div>
  );
}

export default Welcome;
