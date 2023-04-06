import React from "react";
import StatCard from "../Components/StatCard";
import Layout from "../Layout/Layout";
import contactManager from "../Assets/contactManager.png";
import bubbleGame from "../Assets/bubbleGame.png";
import snakeGame from "../Assets/snakeGame.png";
import whatsappClone from "../Assets/whatsappClone.png";
import notesApp from "../Assets/notesApp.png";
import { SiGithub } from "react-icons/si";
import { HiStatusOnline } from "react-icons/hi";

const Projects = () => {
  const projectOverview = [
    {
      name: "HTML + CSS",
      number: 15,
    },
    {
      name: "Tailwind CSS",
      number: 5,
    },
    {
      name: "JavaScript",
      number: 16,
    },
    {
      name: "ReactJS",
      number: 5,
    },
    {
      name: "MERN",
      number: 2,
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
            href="https://github.com/Vinay-Pratap-Singh"
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
                src={contactManager}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">01.</span>
                  Contact Manager
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">MERN</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="sm:flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Chakra UI</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                    It is a full-fledged contact manager web app, created using
                    the MERN stack and Chakra UI. It supports all CRUD features
                    for user and it's contact with a test account for testing
                    the app.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>Test account for testing the app</li>
                    <li>Authentication system for signup and login</li>
                    <li>
                      User can create, read, update and delete his account
                    </li>
                    <li>User can change his password</li>
                    <li>
                      User can create, read, update and delete his contacts
                    </li>
                    <li>
                      Image uploading support for profile of user and it's
                      contacts
                    </li>
                    <li>Dark and light mode support</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/Vinay-Pratap-Singh/Contact-App-Client"
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
                      href="https://contact-app-harvi.netlify.app/"
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
                src={snakeGame}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">02.</span>
                  Snake Game
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
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                    It is a snake game inspired from the nokia mobile snake game
                    in which the user has to control the snake and gather it's
                    food to reach next level.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>
                      Game has 10 different level with different complexity
                    </li>
                    <li>Bonus food for quickly increasing the score</li>
                    <li>Dynamic walls for increasing the game complexity</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/Vinay-Pratap-Singh/Snake-using-Canvas"
                      target={"_blank"}
                    >
                      <SiGithub size={24} />
                    </a>
                  </button>
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Live Link"
                  >
                    <a href="https://harvisnake.netlify.app/" target={"_blank"}>
                      <HiStatusOnline size={24} />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* for project 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-10 text-white">
              <img
                src={bubbleGame}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">03.</span>
                  Bubble Game
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
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                    It is a bubble game, inspired from the typing master typing
                    test game. It is a simple, easy to use game for increasing
                    the typing speed by having some fun to.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>
                      Dynamic speed increment for bubbles with increment in
                      score
                    </li>
                    <li>Five life support for user to play</li>
                    <li>Negative scoring on wrong key press</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/Vinay-Pratap-Singh/Bubble-Game"
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
                      href="https://harvi-bubble-game.netlify.app/"
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
                src={whatsappClone}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">04.</span>
                  Whatsapp web UI clone
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">ReactJS</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>ReactJS</li>
                    <li>Chakra UI</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                    It is a user interface clone of the whatsapp web. I had
                    added some dummy information in it using the JSON file for
                    having a better visualisation of the project.
                  </p>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/Vinay-Pratap-Singh/Whatsapp-UI-Clone"
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
                      href="https://whatsappuiclone-harvi.netlify.app/"
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
                src={notesApp}
                className="sm:w-1/3 border-2 border-[#64ffda] cursor-pointer p-2 transition-all ease-in-out hover:p-0 rounded-md"
                alt="image"
              />

              {/* right section for project details */}
              <div className="flex flex-col gap-2">
                <h1 className="text-center text-2xl font-semibold mb-4 font-mono">
                  <span className="mr-4 text-xl text-[#64ffda]">05.</span>
                  Notes App
                </h1>
                <p className="flex items-center gap-2">
                  <h4 className="font-medium">Project Category :</h4>
                  <p className="text-gray-200">ReactJS</p>
                </p>

                <div>
                  <h4 className="font-medium">Technology Used</h4>
                  <ul className="flex items-center list-disc gap-8 pl-4 flex-wrap text-gray-200">
                    <li>ReactJS</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-gray-200">
                    It is a notes keeping app inspired from the google keep
                    mobile app. Any user can create a note to remember his tasks
                    easily.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Features</h4>
                  <ul className="text-gray-200 list-disc pl-4">
                    <li>Simple and easy to use user interface</li>
                    <li>Multiple color option for the notes card</li>
                    <li>User can create, read, update and delete notes</li>
                    <li>Local storage support for storing the notes data</li>
                  </ul>
                </div>

                {/* for buttons */}
                <div className="flex items-center gap-4">
                  <button
                    className="hover:text-[#64ffda] transition-all ease-in-out duration-300 tooltip tooltip-accent"
                    data-tip="Repo Link"
                  >
                    <a
                      href="https://github.com/Vinay-Pratap-Singh/Notes-Keeping-App"
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
                      href="https://notes-harvi.netlify.app/"
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
                href="https://github.com/Vinay-Pratap-Singh"
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
