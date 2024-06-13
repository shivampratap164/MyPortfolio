import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h6 className=" text-lg font-bold">HELLO,</h6>
        <h1 className="text-6xl font-bold text-white">
           I'm <span className="text-designColor capitalize">Shivam </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        

        Aspiring Software and Web Developer with 1+ years of experience in coding and front-end development. Skilled in creating responsive user interfaces using React and Bootstrap, translating designs into high-quality code, and integrating APIs. Proficient in JavaScript, React JS, and familiar with tools like Visual Studio Code, GitHub, and Vercel. Passionate about technology, problem-solving, and quick learning. Strong in leadership, teamwork, and communication.


        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner