import { useEffect, useRef, useState } from 'react'
import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Intro from './pages/intro'
import Homepage from './pages/HomePage'
import Course from './components/HomePageComponents/Courses/Course'
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
        <Intro />
        <Homepage />
    </>
  )
}

export default App
