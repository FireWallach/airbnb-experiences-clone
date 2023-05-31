import React from "react";
import HeroPic from "../images/Group 77.png";

const Hero = () => {
  return (
    <div className="hero-content">
      <img src={HeroPic} alt="Banner Image" />
      <h1>Online Experiences</h1>
      <h2>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h2>
    </div>
  );
};

export default Hero;
