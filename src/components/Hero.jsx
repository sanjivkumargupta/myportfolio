import React from 'react'
import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import photo from "../assets/myphoto.png"


function Hero() {
  return (
    <div className='hero' id='hero'>
        <div className="hero-left">
        <p>Hey, I am Sanjiv</p>
        <h1>I'm a <span>Mern Stack Developer </span> based in India</h1>
        <p>Hey there! I’m a  MERN Stack Developer from Sultanpur,Uttar Pradesh.
          I turn ideas into powerful web applications using React, Node, Express & MongoDB.
          Currently growing through hands-on projects and continuous learning.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contacts">Get in touch</AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
      
          </div>  
          <div className="hero-right">
              <div className="hero-right-img">
                <img src={photo} alt="" />
              </div>
            
          </div>
    </div>
  )
}

export default Hero