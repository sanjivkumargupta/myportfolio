import { useState } from "react"
import "./Navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SlMenu } from "react-icons/sl";
import { SiD3Dotjs } from "react-icons/si";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState("Home")
  const [sideBar, setSideBar] = useState(false)
  
  return (
    <div className="navbar-container">
      <p className="nav-logo"><span>S</span><span>K</span><span>G</span></p>
        <ul className="nav-menu">
        <li className={menu === "Home" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#hero"><p onClick={() => setMenu("Home")} >Home</p></AnchorLink></li>

        <li className={menu === "Services" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("Services")} >Services</p></AnchorLink></li>
          
        <li className={menu === "About" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("About")} >About</p></AnchorLink></li>


        <li className={menu === "Portfolio" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("Portfolio")} >Portfolio</p></AnchorLink></li>

        <li className={menu === "Contacts" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#contacts"><p onClick={() => setMenu("Contacts")} >Contacts</p></AnchorLink></li>
        </ul>
        <div className="nav-contact btn"><AnchorLink className="anchor-link" offset={50} href="#contacts"><p>Contact Me</p></AnchorLink></div>
      <SlMenu className="icon" onClick={()=>setSideBar(true)}/>
      {sideBar && <div className="side-bar ">
        <IoClose onClick={()=>setSideBar(false)} className="icon"/>
        <ul className="side-bar-ul">
          <li className={menu === "Home" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#hero"><p onClick={() => setMenu("Home")} >Home</p></AnchorLink></li>

          <li className={menu === "Services" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("Services")} >Services</p></AnchorLink></li>

          <li className={menu === "About" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("About")} >About</p></AnchorLink></li>


          <li className={menu === "Portfolio" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("Portfolio")} >Portfolio</p></AnchorLink></li>

          <li className={menu === "Contacts" ? "nav-color" : ""}><AnchorLink className="anchor-link" offset={50} href="#contacts"><p onClick={() => setMenu("Contacts")} >Contacts</p></AnchorLink></li>
        </ul>
      </div>
      }
    </div>
  )
}

export default Navbar