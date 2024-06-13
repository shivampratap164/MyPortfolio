import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Farm Trade website"
          des=" FarmTrade is an innovative online platform designed as virtual marketplacefor farmers and investors to connect directly thereby removing the middlemen and making the farming process more streamlined and modernized"
       
    
          src={projectOne}
          githubLink="https://github.com/shivampratap164/farmtrade---project.git"
          liveLink="https://shivampratap164.github.io/farmtrade---project/"
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        <ProjectsCard
          title="my portfolio"
          des="My personal portfolio website highlights my journey in web development. Created with ReactJS, Bootstrap, and Tailwind CSS, it showcases projects, skills, and achievements in a modern and responsive design.
          
          
         "
          src={projectThree}
          githubLink="https://github.com/shivampratap164/MyPortfolio.git"
          liveLink="https://my-portfolio-ebon-delta-82.vercel.app/"
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        /> */}
        <ProjectsCard
          title="Amazon clone"
          des="A modern e-commerce platform inspired by built with React.js and styled with Tailwind CSS. Features include user authentication, product browsing with detailed views, and a streamlined shopping cart experience."
          src={projectTwo}
          githubLink="https://github.com/shivampratap164/amazon_clone_project.git"
          liveLink="https://amazon-clone-project-amber.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects
