import React from "react";

const StatCard = ({ name, number }) => {
  return (
    <div
      className="text-white flex flex-col items-center justify-center w-40 py-2 rounded-md font-semibold cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2"
      style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
    >
      <h2 className="text-xl font-semibold font-mono">{name}</h2>
      <p className="text-2xl text-center font-mono text-[#64ffda]">{number}+</p>
    </div>
  );
};

export default StatCard;
