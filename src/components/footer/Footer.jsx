import React from "react";

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Gian Paucar Cortez
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Principal</a>
        </li>
        
        <li>
          <a href="#experience">Tecnologías</a>
        </li>

        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/gian.paucarcortez/" target={"_blank"}><FaFacebookF/></a>
      <a href="https://www.instagram.com/gianpaucarcortez/" target={"_blank"}><FiInstagram/></a>
      <a href="https://twitter.com/GianPaucar" target={"_blank"}><IoLogoTwitter/></a>
    </div>


    <div className="footer__copyright">
      <small> Gian Paucar Cortez 2022 &copy;. All rights reserved.</small>
    </div>


    </footer>
  );
};

export default Footer;
