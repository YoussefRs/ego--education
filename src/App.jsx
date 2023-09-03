import './App.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Intro from './Intro'
import Homepage from './HomePage'
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
