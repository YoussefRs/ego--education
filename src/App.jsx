
import './App.css'
import './components/Welcome-section/Welcome.css'
import Intro from './pages/Intro'
import Homepage from './pages/Homepage'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/Welcome-section/Welcome'
import Course from './components/Course-Section/Course'
import { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Exp from './components/Experience-Section/Exp'


function App() {

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
    <>
      <Intro />
      <Homepage />
    </>
  )
}

export default App
