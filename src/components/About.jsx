import React from 'react'
import "./About.css"
import photo from "/photo.png"


function About() {
  return (
    <div className='about' id='about'>
      <div className="about-sections">
        <div className="about-left">
          <img src={photo} alt="" />
        </div>
        <div className="about-right">
          <div className="about-title">
            <h4>About</h4>
            <h1>About me</h1>
          </div>
          <div className="about-para">
            <p>I’m a MERN Stack Developer with internship experience in building real-world web applications. I’m passionate about coding, problem-solving, and continuously learning to grow as a full-stack developer.</p>
            <p>I develop full-stack applications using MongoDB, Express.js, React.js, and Node.js. I’ve worked on projects involving user authentication, dynamic UIs, and REST APIs, with a focus on clean code and performance.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML5 </p><hr style={{ width: "63%" }} /></div>
            <div className='about-skill'>
              <p>CSS3</p><hr style={{ width: "63%" }} />
            </div>
            <div className='about-skill'>
              <p>TailwindCSS</p><hr style={{ width: "59%" }} />
            </div>
              <div className='about-skill'>
                <p>Javascript(ES6+)</p><hr style={{width:"62%"}}/>
              </div>
              <div className="about-skill">
                <p>ReactJs </p><hr style={{width:"60%"}}/>
              </div>
              <div className="about-skill">
                <p>NodeJs</p><hr style={{width:"58%"}}/>
              </div>
            <div className='about-skill'>
              <p>ExpressJs</p><hr style={{ width: "58%" }} />
            </div>
              <div className="about-skill">
                <p>MongoDB</p><hr style={{width:"56%"}}/>
              </div>
            <div className='about-skill'>
              <p>SQL</p><hr style={{ width: "56%" }} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About