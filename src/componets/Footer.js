import "./Footer.css"
import React from 'react'
import { FaHome, FaPhone,FaMailBulk, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight:
            "2rem"}}/>
            <div>
                <p>21 Tait Hillside </p>
                <p>Harare</p>
            </div>
        </div>
        <div> 
         <h4 className="phone">
        <FaPhone size={20} style={{color:"#fff", marginRight:
            "2rem"}}/>+263-784-320-423
        </h4>
        </div>
        <div> 
         <h4 className="email">
        <FaMailBulk size={20} style={{color:"#fff", marginRight:
            "2rem"}}/>douglasnyabasa400@gmail.com
        </h4>
        </div>
        </div>
        <div className="right">
            <h4>About Douglas</h4>
            <p>
                I am a Software Developer,with proffessional experience with building custome Enterprise Level Software Solutions,that caters for different companies of all sizes.
            </p>
            <div className="social">
            <FaLinkedin size={20} style={{color:"#fff", marginRight:
            "2rem"}}/>
             <FaFacebook size={20} style={{color:"#fff", marginRight:
            "2rem"}}/>
             <FaInstagram size={20} style={{color:"#fff", marginRight:
            "2rem"}}/>d
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
