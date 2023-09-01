import React, { useState } from 'react'
import Welcome from '../components/Welcome-section/Welcome';
import Course from '../components/Course-Section/Course';
import Navbar from '../components/navbar/Navbar';
import Bac from '../components/Degrees-Section/Bac';
import WaveShape from '../components/WaveShape';
import Exp from '../components/Experience-Section/Exp';


function Homepage() {
  return (

    <div className="overflow-x-hidden z-0">
      <Navbar />
      <div className="flex flex-col min-h-full overflow-x-hidden overflow-y-clip flex justify-center items-center ">
        <main className="grow ">
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              id="video-background"
              className="videoo"
            >
              <source
                src="https://ligaeducacional.com.br/images/uploads/posts/liga-educacional-reduzido-1.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
          </div>
          {/* <WaveShape  rotate={'rotateX(180deg)'}/> */}
        </main>
      </div>
      <Course />
      {/* <Welcome /> */}
      <Bac />
      <Exp />
    </div>

  );
}


export default Homepage

