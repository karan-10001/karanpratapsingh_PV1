import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiGeeksforgeeks,SiHackerrank} from "react-icons/si";

const SocialMedia = () => {
  return (
    <ul className="text-gray-100 fixed z-10 flex items-center justify-center w-full py-4 space-x-4 bottom-0 sm:left-[6%] sm:block sm:space-x-0 sm:w-fit maxWidth:left-[17%] sm:top-[35%] sm:space-y-4 text-3xl">
      <li className="hover:text-[#64ffda]">
        <a
          href="https://github.com/karan-10001"
          target={"_blank"}
          className="tooltip tooltip-top sm:tooltip-right tooltip-accent"
          data-tip="Github"
        >
          <AiFillGithub />
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://www.linkedin.com/in/karan1000001/"
          target={"_blank"}
          className="tooltip tooltip-top sm:tooltip-right tooltip-accent"
          data-tip="Linkedin"
        >
          <AiFillLinkedin />
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://auth.geeksforgeeks.org/user/karan_para_sf"
          target={"_blank"}
          className="tooltip tooltip-top sm:tooltip-right tooltip-accent"
          data-tip="GeeksforGeeks"
        >
          <SiGeeksforgeeks />
        </a>
      </li>
      <li className="hover:text-[#64ffda]">
        <a
          href="https://www.hackerrank.com/__Commando_karan"
          target={"_blank"}
          className="tooltip tooltip-top sm:tooltip-right tooltip-accent"
          data-tip="Hackerrank"
        >
          <SiHackerrank />
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://www.instagram.com/___kommando.karan_/"
          target={"_blank"}
          className="tooltip tooltip-top sm:tooltip-right tooltip-accent"
          data-tip="Instagram"
        >
          <AiFillInstagram />
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://twitter.com/karansingh_1001"
          target={"_blank"}
          className="tooltip tooltip-top sm:tooltip-right tooltip-accent"
          data-tip="Twitter"
        >
          <AiOutlineTwitter />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
