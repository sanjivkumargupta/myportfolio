import { useState } from "react"
import "./Navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import photo from "/photo.png"

function Navbar() {
  const [menu, setMenu] = useState("Home")
  
  return (
    <div className="navbar-container">
      <div className="navbar">
        <p className="nav-logo">Sanjiv Kr Gupta</p>
        <ul className="nav-menu">
          <li ><AnchorLink className="anchor-link" offset={50} href="#hero"><p onClick={() => setMenu("Home")} className={menu === "Home" ? "nav-color" : ""}>Home</p></AnchorLink></li>

          <li ><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("Services")} className={menu === "Services" ? "nav-color" : ""}>Services</p></AnchorLink></li>
          
          <li ><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("About")} className={menu === "About" ? "nav-color" : ""}>About</p></AnchorLink></li>


          <li ><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("Portfolio")} className={menu === "Portfolio" ? "nav-color" : ""}>Portfolio</p></AnchorLink></li>

          <li ><AnchorLink className="anchor-link" offset={50} href="#contacts"><p onClick={() => setMenu("Contacts")} className={menu === "Contacts" ? "nav-color" : ""}>Contacts</p></AnchorLink></li>
        </ul>
        <div className="nav-contact"><AnchorLink className="anchor-link" offset={50} href="#contacts"><p>Contact Me</p></AnchorLink></div>
      </div>
    </div>
  )
}

export default Navbar