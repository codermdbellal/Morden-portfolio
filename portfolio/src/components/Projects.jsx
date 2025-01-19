
import Image1 from "../assets/images/4208903.jpg"
import Image2 from "../assets/images/Material-Dashboard-2-React-01-15-2025_10_23_PM.png"
import Image3 from "../assets/images/project-image-3.png";
import Image4 from "../assets/images/project-image-4.png";
import Image5 from "../assets/images/project-image-5.png";
import Image6 from "../assets/images/project-image-6.png";


import "./responsive.css"
const ProjectShowcase = () => {
  return (
    <div className="project-container bg-customColor">

      <div className="project-demo-1">
          <div className="project">
           <img src={Image1} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae modi labore sequi repellendus !</p>
           <a href="https://pizza-selling.onrender.com" target="_blanck">
             <button>Demo</button>
           </a>
          </div>
          
          <div className="project">
           <img src={Image2} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae modi labore sequi repellendus !</p>
           <a href="https://dashboard54.netlify.app/" target="_blanck">
             <button>Demo</button>
           </a>
          </div>

          <div className="project">
           <img src={Image3} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae modi labore sequi repellendus !</p>
           <a href="#" target="_blanck">
             <button>Demo</button>
           </a>
          </div>
      </div>

      <div className="project-demo-1 mt-10">
          <div className="project">
           <img src={Image4} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae modi labore sequi repellendus !</p>
           <a href="https://medilap.netlify.app/" target="_blanck">
             <button>Demo</button>
           </a>
          </div>

          <div className="project">
           <img src={Image5} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae modi labore sequi repellendus !</p>
           <a href="https://fresh-food-com.netlify.app/" target="_blanck">
             <button>Demo</button>
           </a>
          </div>

          <div className="project">
           <img src={Image6} alt="" />
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore beatae modi labore sequi repellendus !</p>
           <a href="https://royelmaster.netlify.app/" target="_blanck">
             <button>Demo</button>
           </a>
          </div>
      </div>

    </div>
  );
};

export default ProjectShowcase;


