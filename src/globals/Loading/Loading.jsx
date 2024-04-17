import React from "react";
import "./Loading.css";
import logo from "../../assets/Logos/logo-ego-white-2.png";

function Loading() {
  return (
    <div className="loading">
      <svg width="200" height="200" id="svg">
        <circle id="dot1" className="shape" />
        <circle id="dot2" className="shape" />
        <circle id="dot3" className="shape" />
        <circle id="dot4" className="shape" />
      </svg>
      <img src={logo} alt="ego education" className="loading_img" />
    </div>
  );
}

export default Loading;
