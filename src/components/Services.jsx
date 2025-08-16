import "./Services.css"
import photo from "/photo.png"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { services } from "../assets/mydata";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { FaCode, FaDatabase, FaServer, FaBug } from "react-icons/fa";



function Services() {

   

  return (
    <div className="services" id="services">
      <div className="services-title">
        <p>My Skill</p>
        <h1 className="h1">My Expertise</h1>
      </div>
      <div className="services-container">
        {
          services.map(({id,icon,name,para})=>{
            return <div className="services-format" key={id} style={{marginBottom:"15px"}}>
                              <div className="icon">{icon}</div>
                              <h4>{name}</h4>
                              <p>{para}</p>
                            
                          </div>       
          })
        }
        </div>
    </div>
  )
}

export default Services