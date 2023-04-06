import React from "react";
import Layout from "../Layout/Layout";
import Resume from "../Assets/Resume.pdf";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className=" text-white h-[90vh] sm:h-[85vh] mx-4 sm:ml-[15%]">
        {/* wrapper for content */}
        <div className="h-full flex flex-col justify-center">
          {/* introduction */}
          <p className="text-[#64ffda] font-mono text-lg">Hello! I am</p>
          <h1 className="text-4xl sm:text-6xl font-bold py-4">
            Karan Pratap Singh
          </h1>
          <p className="text-[#64ffda] text-2xl sm:text-3xl font-bold">
            Full Stack Developer
          </p>

          <ul className="mt-2 ml-4 flex flex-col sm:flex-row sm:items-center sm:space-x-10 list-disc">
            <li>Web Developer</li>
            <li>Programmer</li>
            <li>Data Analyst</li>
          </ul>

          {/* creating the button */}
          <div className="mt-6 space-x-4 sm:space-x-10">
            <button className="border-2 border-[#1aba95] bg-[#1aba95] px-4 py-2 sm:px-5 sm:py-3 rounded-md font-semibold">
              <a className="bg-transparent" href={Resume} target={"_blank"}>
                Get Resume
              </a>
            </button>
            <Link to={"/contact"}>
              <button className="border-2 border-[#1aba95] px-4 py-2 sm:px-5 sm:py-3 rounded-md font-semibold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
