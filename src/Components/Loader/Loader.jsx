import React from 'react'
import './Loader.css'
import logo from '../../assets/logo/logo-ego-white-2.png'

function Loader() {
  return (
    <div className="loader-container">
        <div className="loader">
            <img src={logo} alt="Loading..." />
        </div>
    </div>
  )
}

export default Loader
