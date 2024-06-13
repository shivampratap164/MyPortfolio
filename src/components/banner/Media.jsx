import React from 'react'
import { FaGithub , FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";


const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap- lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
           


          </h2>
          <div className="flex gap-3">
           <a href="https://github.com/shivampratap164"> <span className="bannerIcon">
            <FaGithub />
            
            </span></a> 
            {/* <span className="bannerIcon">
              <FaTwitter />
            </span> */}
             <a href="https://www.linkedin.com/in/shivam-pratap-raj-99280826b/"  >
             <span className="bannerIcon">
            
              <FaLinkedinIn />
              
            </span></a>
            
          </div>
        </div>
        <div className="flex gap-4">
       <a href="https://docs.google.com/document/d/1C6yoMiyso7pioHCobS0Nyfr4o_uFgD6v2gAIo4Q00xg/edit?usp=sharing"><button type="button" class="btn btn-outline-light h-12 w-32 font-bold mt-4">Resume</button></a>
</div>
    
        {/* <div className="flex gap-4">
        <Button variant="outline-dark">Dark</Button>
        </div> */}
        {/* <div> 
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            
          </div>
        </div> */}
      </div>
  )
}

export default Media