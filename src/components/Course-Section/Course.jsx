import React from 'react'
import './Course.css'
import WaveShape from '../WaveShape'
import MulSlider from '../Slider/MulSlider'

function Course() {
  return (
    <div className='min-h-full overflow-hidden confWrap'>
                <WaveShape  rotate={'rotateY(180deg)'}/>
                <div className='welcome w-screen'>
                    <div className="heading w-screen pr-8 pl-8 flex justify-between items-center confWrap z-2" >
                        <h1 className='text-2xl lg:text-4xl'>LATEST COURSES </h1>
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
