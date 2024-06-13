import { AiFillAppstore } from "react-icons/ai";
import { FaHtml5, FaGlobe,FaLinkedinIn ,FaCss3Alt ,FaReact,FaBootstrap ,FaFigma,FaNode} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs,SiMysql,SiMongodb } from "react-icons/si";
import { MdHtml,MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Frontend Development",
    des: (
      <div className="flex gap-4">
      <span className="bannerIcon">
      <FaHtml5 />
      </span>
      {/* <span className="bannerIcon">
        <FaTwitter />
      </span> */}
      <span className="bannerIcon">
      
      <FaCss3Alt />
        
      </span>
      <span className="bannerIcon">
      
      <IoLogoJavascript />
        
      </span>
      <span className="bannerIcon">
      
      <FaReact/>
        
      </span>
      <span className="bannerIcon">
      
      <FaBootstrap />
        
      </span>
      <span className="bannerIcon">
      
      <SiTailwindcss />
        
      </span>
    </div>
      

    ),
    
  },
  
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "backnend development",
    des: (
      <div className="flex gap-4">
      <span className="bannerIcon">
      <FaNode /> 
      </span> 
      <span className="bannerIcon">
      
      <SiMysql />
        
      </span>
      <span className="bannerIcon">
      
      <SiMongodb />
        
      </span></div>),
  },
  // {
  //   id: 3,
  //   icon: <SiProgress />,
  //   title: "SEO Optimisation",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  // {
  //   id: 4,
  //   icon: <FaMobile />,
  //   title: "Mobile Development",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des:(
      <div className="flex gap-4">
      <span className="bannerIcon">
      <FaFigma /> 
      </span> 
      </div>),
  },
  
  // {
  //   id: 6,
  //   icon: <FaGlobe />,
  //   title: "Hosting Websites",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
];
