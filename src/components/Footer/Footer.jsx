import { useState } from "react"
import "./Footer.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
    const [menu, setMenu] = useState("Home")
  
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
         <span>Sanjiv</span><span>Kumar</span><span>Gupta</span>
        </div>
        <div className="footer-middle">
            <ul className="nav-menu">
                      <li ><AnchorLink className="anchor-link" offset={50} href="#hero"><p onClick={() => setMenu("Home")}>Home</p></AnchorLink></li>
            
                      <li ><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("Services")} >Services</p></AnchorLink></li>
                      
                      <li ><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("About")}>About</p></AnchorLink></li>
            
            
                      <li ><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("Portfolio")} >Portfolio</p></AnchorLink></li>
            
                      <li ><AnchorLink className="anchor-link" offset={50} href="#contacts"><p onClick={() => setMenu("Contacts")}>Contacts</p></AnchorLink></li>
                    </ul>
      </div>
      <div className="footer-right">
          <FaFacebook/>
          <AiOutlineInstagram/>
          <FaXTwitter/>
          <FaLinkedin/>
      </div>
      </div>
      <hr />
      <div className="footer-bottom">
        
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        <p>
          &copy; 2025 Sanjiv Kumar Gupta . All right reserved
        </p>
      </div>
    </div>
  )
}

export default Footer