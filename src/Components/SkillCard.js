import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaPython,FaJava, FaDatabase,FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGit,
  SiAndroidstudio,
  SiCplusplus
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const SkillCard = () => {
  return (
    <>
      {/* for html */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaHtml5 size={48} />
        <p>HTML</p>
      </div>

      {/* for css */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaCss3Alt size={48} />
        <p>CSS</p>
      </div>

      {/* for tailwind css */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiTailwindcss size={48} />
        <p>Tailwind CSS</p>
      </div>

      {/* for chakra ui */}
      {/* <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiChakraui size={48} />
        <p>Chakra UI</p>
      </div> */}

      {/* for javascript */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <TbBrandJavascript size={48} />
        <p>JavaScript</p>
      </div>

      {/* for react */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaReact size={48} />
        <p>ReactJS</p>
      </div>

      {/* for node */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaNode size={48} />
        <p>NodeJS</p>
      </div>

      {/* for express */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiExpress size={48} />
        <p>ExpressJS</p>
      </div>

      {/* for mongodb */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiMongodb size={48} />
        <p>MongoDB</p>
      </div>

      {/* for git */}
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiGit size={48} />
        <p>Git</p>
      </div>

      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiCplusplus size={48} />
        <p>C++</p>
      </div>

      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaPython size={48} />
        <p>Python</p>
      </div>
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaJava size={48} />
        <p>Java</p>
      </div>
      
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaDatabase size={48} />
        <p>Database</p>
      </div>
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <FaBootstrap size={48} />
        <p>Bootstrap</p>
      </div>
      <div
        className="text-white flex flex-col items-center justify-center w-28 h-32 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-4"
        style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
      >
        <SiAndroidstudio size={48} />
        <p>AndroidStudio</p>
      </div>
    </>
  );
};

export default SkillCard;
