import "./MyWork.css"
import { myworks } from "../../assets/mydata"
import { FiArrowUpRight } from "react-icons/fi";
import quick1 from "/quick1.png"
import quick2 from "/quick2.png"
import { SiGithub } from "react-icons/si";


function MyWork() {
  return (
    <div className='mywork' id="work">
      <div className="mywork-title">
        <div><h3>Recent Projects</h3>
          <h1>My Projects</h1></div>
        <div className="github"><SiGithub className="github-icon" /><span>Visit on Github</span></div>

      </div>
      <div className="mywork-container">
        {
          myworks.map(({ id, icon, name, para,img }) => {
            console.log(img);
            
            return <div className="mywork-format" key={id}>
              <div className="project-img-container">
                <img src={img? img : ""} alt="" />
              </div>
              <div className="project">
              <h4>{name}</h4>
              <p>{para}</p>
              <div className="mywork-showmore">
                Show More
                <FiArrowUpRight  className="icon"/>
              </div>
              </div>

            </div>
          })
        }

      </div>
    </div>
  )
}

export default MyWork