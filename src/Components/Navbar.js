import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  // creating the reference of menu
  const menu = useRef();
  const toggle = () => {
    // getting the menu element
    const element = menu.current;
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };
  return (
    <nav className="sticky top-0 z-50 flex flex-row-reverse sm:flex-row items-center justify-between px-[5%] text-white font-mono h-[10vh] sm:h-[15vh]">
      {/* creating the name logo */}
      <NavLink to="/">
        <div
          className="h-[55px] w-[45px] bg-[#64ffda] flex items-center justify-center font-bold"
          style={{
            clipPath:
              "polygon(50% 0, 0 30%, 0 70%, 50% 100%, 100% 70%, 100% 30%)",
          }}
        >
          <div
            className="h-[50px] w-[42px] flex items-center justify-center text-2xl"
            style={{
              clipPath:
                "polygon(50% 0, 0 30%, 0 70%, 50% 100%, 100% 70%, 100% 30%)",
            }}
          >
            K
          </div>
        </div>
      </NavLink>

      {/* adding the menu button */}
      <FiMenu onClick={toggle} size={32} className="sm:hidden relative" />

      {/* creating the navigation menu */}
      <ul
        ref={menu}
        className="hidden absolute sm:static z-50 left-0 w-full sm:w-auto top-[4.5rem] pb-2 sm:pb-0 pl-6 sm:pl-0 transition-all ease-in-out duration-500 sm:flex sm:space-x-8"
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#64ffda" : "white",
            })}
          >
            <span className="text-[#64ffda] mr-1 text-sm">01.</span> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#64ffda" : "white",
            })}
          >
            <span className="text-[#64ffda] mr-1 text-sm">02.</span> About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            style={({ isActive }) => ({
              color: isActive ? "#64ffda" : "white",
            })}
          >
            <span className="text-[#64ffda] mr-1 text-sm">03.</span> Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? "#64ffda" : "white",
            })}
          >
            <span className="text-[#64ffda] mr-1 text-sm">04.</span> Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#64ffda" : "white",
            })}
          >
            <span className="text-[#64ffda] mr-1 text-sm">05.</span> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
