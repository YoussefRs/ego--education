import React from 'react'
import './Wave.css'

function WaveShape({color, height, rotate}) {
  return (
    <div className="relative">
      <div className="custom-shape-divider-bottom-1693392432 " style={{ transform: `${rotate}`, width: '100%'}}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute "
          style={{ height: `${height}`,  }}
        >
          {/* ,<svg viewBox="0 0 1540 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(69, 53, 53, 0)" d="M 0 0 C 78.10000000000001 0 702.9 110 781 110 L 781 110 L 781 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(69, 53, 53, 0)" d="M 780 110 C 855 110 1455 200 1530 200 L 1530 200 L 1530 0 L 780 0 Z" stroke-width="0"></path> </svg> */}
          {/* <svg viewBox="0 0 1296 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fill="rgba(0, 0, 0, 1)" d="M 0 0 L 659 110 L 659 0 L 0 0 Z" strokeWidth="0"></path> <path fill="rgba(0, 0, 0, 1)" d="M 658 110 L 1296 200 L 1296 0 L 658 0 Z" stroke-width="0"></path> </svg> */}
          {/* <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path> */}
        </svg>
      </div>
    </div>
  )
}

export default WaveShape
