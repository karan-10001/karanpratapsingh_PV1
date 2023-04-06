import React, { useState } from "react";
import Bubble from "../Components/Bubble/Bubble";
import Layout from "../Layout/Layout";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
  const [view, setView] = useState(true);

  return (
    <Layout>
      {/* for displaying the bubbles and cards */}
      {view ? (
        <div className="h-[90vh] sm:h-[85vh] sm:ml-[15%] pt-4 sm:pt-10 relative overflow-hidden">
          <button
            className="border-2 border-[#1aba95] bg-[#1aba95] hover:bg-[#41e2bd] transition-all ease-in-out duration-300 p-2 rounded-full font-semibold text-white absolute sm:right-10 sm:top-0 right-4 z-20 tooltip tooltip-top"
            data-tip="Switch View"
            onClick={() => {
              setView(!view);
            }}
          >
            <AiFillEye className="bg-transparent" fontSize={"20px"} />
          </button>

          <Bubble name="FaHtml5" time="3100" />
          <Bubble name="FaCss3Alt" time="3300" />
          <Bubble name="SiTailwindcss" time="3500" />
          <Bubble name="TbBrandJavascript" time="3700" />
          <Bubble name="FaReact" time="3900" />
          <Bubble name="FaNode" time="4100" />
          <Bubble name="SiExpress" time="4300" />
          <Bubble name="SiMongodb" time="4500" />
          <Bubble name="SiChakraui" time="4700" />
          <Bubble name="SiGit" time="4900" />
        </div>
      ) : (
        <div className="sm:h-[85vh] flex items-center justify-center overflow-hidden relative">
          <button
            className="border-2 border-[#1aba95] bg-[#1aba95] hover:bg-[#41e2bd] transition-all ease-in-out duration-300 p-2 rounded-full font-semibold text-white absolute sm:right-10 top-0 right-4 z-20 tooltip tooltip-top"
            data-tip="Switch View"
            onClick={() => {
              setView(!view);
            }}
          >
            <AiFillEyeInvisible className="bg-transparent" fontSize={"20px"} />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-10 w-fit pb-24 pt-10">
            {<SkillCard />}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Skills;
