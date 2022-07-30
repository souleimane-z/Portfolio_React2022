import React from "react";
import Wave from "react-wavify";
import "./Footer.css";
// import Shape from "../../../Assets/Home/Footer/shape-bg.png";

export default function Footer() {
  return (
   {/* <div className="footer-container">
     <div className="footer-parent">
       <img src={Shape} alt="decoration Shape" className="shape-bg"></img>
     </div>
  </div>*/},
    <div className="wave-container">
      <Wave
        fill="#FF5823"
        paused={false}
        options={{
          height: 100,
          amplitude: 30,
          speed: 0.25,
          points: 6,
        }}
      />
    </div>
  );
}
