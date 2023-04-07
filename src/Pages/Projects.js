import React from "react";
import StatCard from "../Components/StatCard";
import Layout from "../Layout/Layout";
import dsaVisualizer from "../Assets/dsaVisualizer.png";
import musicPlayer from "../Assets/musicPlayer.png";
import elearning from "../Assets/elearning.png";
import bloodBank from "../Assets/bloodBank.png";
import textUtils from "../Assets/textUtils.png";
import { SiGithub } from "react-icons/si";
import { HiStatusOnline } from "react-icons/hi";

const Projects = () => {
  const projectOverview = [
    {
      name: "HTML + CSS",
      number: 10,
    },
    {
      name: "Androidstudio",
      number: 1,
    },
    {
      name: "JavaScript",
      number: 10,
    },
    {
      name: "ReactJS",
      number: 4,
    },
    {
      name: "MERN",
      number: 1,
    },
  ];

  return (
    <Layout>
      <div className="sm:ml-[15%] sm:mr-10 mx-6">
        <h1 className="text-center my-2 text-3xl text-white font-semibold">
          Projects Statistics
        </h1>
        <p className="mb-10 mx-[15%] text-gray-200 text-center">
          Project statistics data can be verified by visiting{" "}
          <a
            className="link text-[#64ffda]"
            href="https://github.com/karan-10001"
            target={"_blank"}
          >
            Github Profile
          </a>
        </p>
        {/* for displaying the projects stats */}
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {projectOverview.map((element, index) => {
            return (
              <StatCard
                name={element.name}
                number={element.number}
                key={index}
              />
            );
          })}
        </div>

        {/* for displaying the important projects card */}
        <div className="pb-10">
          <h1 className="text-center mt-16 mb-10 text-3xl text-white font-semibold">
            Some Projects Overview
          </h1>
          <div className="flex flex-col gap-20">
            {/* for project 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-10 text-white">
              <img
                src={dsaVisualizer}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">01.</span>
                  Data Structure Visualizer
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">ReactJS</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="sm:flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                  Developed a visualizer that can help to visualize commonly used data structures 
                  and algorithms as a result Algorithms and data structures become easier to understand.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>Users can use custom inputs</li>
                    <li>Users can add and remove the nodes</li>
                    <li>Users can visualize data structures in custom motions</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/karan-10001/dataStructureVisualizer"
                      target={"_blank"}
                    >
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Live Link"
                  >
                    <a
                      href="https://karan-10001.github.io/dataStructureVisualizer"
                      target={"_blank"}
                    >
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 2 */}
            <div className="flex flex-col sm:flex-row-reverse items-center gap-10 text-white">
              <img
                src={elearning}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">02.</span>
                  eLearning Web Application
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">Full Stack</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                  
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                  Developed e-learning interactiv website which offers online courses, technical
                  articles and often used code-snippets.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>
                      Commanly used code snippets are available.
                    </li>
                    <li>Embedded integrated development environment (IDE) to run and test the code. </li>
                    <li>Courses can be availble for self learning and live .</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/karan-10001/Codeyard_v2"
                      target={"_blank"}
                    >
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Live Link"
                  >
                    <a href="https://karan-10001.github.io/Codeyard_v2" target={"_blank"}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-10 text-white">
              <img
                src={musicPlayer}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">03.</span>
                  Music Player Application
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">JavaScript</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                  Designed and developed a music player with demonstrative, customizable
                  user interface and personalized playlist.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Demonstrative and cool user interface</li>
                    <li>
                      Users can customize user interface colors.
                    </li>
                    <li>User can have customizable playlist</li>
                    <li>Usres can create favourite songs playlist</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/karan-10001/musicPlayer_v2"
                      target={"_blank"}
                    >
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Live Link"
                  >
                    <a
                      href="https://karan-10001.github.io/musicPlayer_v2"
                      target={"_blank"}
                    >
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 4 */}
            <div className="flex flex-col sm:flex-row-reverse items-center gap-10 text-white">
              <img
                src={bloodBank}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">04.</span>
                  e-Blood Bank Android Application
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">Androidstudio </p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>Androidstudio</li>
                    <li>Java</li>
                    <li>XML</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                  Designed and developed online portal where people can find blood donors at the times of need.
                  </p>

                </div>
                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Users can have individual account with verified mobile number </li>
                    <li>
                      Needy people can request for specific group of blood.
                    </li>
                    <li>Needy users can contact with dooners</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/karan-10001"
                      target={"_blank"}
                    >
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Live Link"
                  >
                    <a
                      href="https://drive.google.com/drive/folders/1cq0HI2ztUo99bEHGvwTawRz3IPDJqVNs?usp=sharing"
                      target={"_blank"}
                    >
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 5 */}
            <div className="flex flex-col sm:flex-row items-center gap-10 text-white">
              <img
                src={textUtils}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">05.</span>
                  Text Utility Application
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">ReactJS</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJS</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                    It is text utility application and It is designed to help users to manipulate and manage 
                    text data such as formating, word count, reading time.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>Users can input custom paragraph of text in the box.</li>
                    <li>User can see the number of characters, sentences and paragraph.</li>
                    <li> Users can also see the how much time it will take to read.</li>
                    <li>Through this application users can also remove whiteshapces from the paragraph.</li>
                    <li>Day and Night mode feature available.</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/karan-10001/textUtilityApplication"
                      target={"_blank"}
                    >
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Live Link"
                  >
                    <a
                      href="https://karan-10001.github.io/textUtilityApplication"
                      target={"_blank"}
                    >
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* show more button */}
            <button className="border-2 border-[#1aba95] bg-[#1aba95] px-5 mb-16 sm:mb-0 py-2 rounded-md font-semibold w-fit mx-auto text-white transition-all ease-in-out duration-300 hover:-translate-y-2">
              <a
                className="bg-transparent"
                href="https://github.com/karan-10001"
                target={"_blank"}
              >
                Show More
              </a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
