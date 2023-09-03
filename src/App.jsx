import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Intro from './pages/intro'
import Homepage from './pages/HomePage'
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
