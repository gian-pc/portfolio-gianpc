import React from "react";
import CTA from "./CTA";
import ME from "../../assets/gian.png";
import HeaderSocial from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="border">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>

        <h1>Gian Paucar Cortez</h1>
        <h2 className="text-light">FrontEnd Developer</h2>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
