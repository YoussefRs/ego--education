
import Particles from "react-tsparticles";
import '../App.css'

function particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "00000",
          },
        },

        fpsLimit: 30,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: "push",
              resize: "1",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 500,
              duration: 5,
              opacity: 0.5,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "fff",
          },
          links: {
            color: "#046635",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 200,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />)
}
export default particle
