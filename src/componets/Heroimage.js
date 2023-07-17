import "./Heroimage.css";
import hero from "../Assets/hero.jpg"

import React from 'react'
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero ">
    <div className="Mask">
      <img className="IntroImage"
      src={hero } alt="hero"/>
    </div>
    <div className="content">
    <p>HI,My Name Is DOUGLAS.I AM A FREELANCER</p>
     <h1>Java (Spring Boot),Flutter And React Developer.</h1>
    <div className="dug">
    <Link to="/project"
    className="btn">Projects
    </Link>
    <Link to="/contact "
    className="btn btn-light">Contact
    </Link>
    </div>
    </div>
    </div>
    
    
  )
}

export default Heroimage
