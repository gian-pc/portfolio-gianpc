import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gianpaucarcortez/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/gianpaucarcortez" target="_blank">
        <FaGithub />
      </a>
      <a href="https://vercel.com/gianpaucarcortez" target="_blank">
        <IoLogoVercel />
      </a>
    </div>
  );
};

export default HeaderSocials;
