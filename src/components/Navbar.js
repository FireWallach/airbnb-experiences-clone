import '../App.css'
import React from "react";
import AirbnbLogo from '../images/Vector.png'

export default function Navbar() {
  return (
    <div className="header">
      <img src={AirbnbLogo} alt="Logo" />
    </div>
  );
}
