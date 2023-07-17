import React from 'react';
import PricingCard from '../componets/PricingCard';
import Navbar from '../componets/Navbar';
import Footer from "../componets/Footer";
import HeroImg2 from '../componets/HeroImg2';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading ="Projects." text ="Some OF My Most Recent Works"/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
