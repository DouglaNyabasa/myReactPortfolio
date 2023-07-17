import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from "../componets/Footer";
import HeroImg2 from '../componets/HeroImg2';


const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading ="About." text="I'm I Good Front-End Developer"/>
      <Footer/>
    </div>
  )
}

export default About
