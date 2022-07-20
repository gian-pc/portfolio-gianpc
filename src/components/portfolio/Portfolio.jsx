import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import { FaGithub } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import {IoLogoYoutube} from "react-icons/io"

import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container container">
        <div className="card">
          <img src={IMG1} alt="" />

          <div className="card__details">
            <div className="portfolio__item-cta">
              <h3>Pokemon App</h3>
              <div className="portfolio__item-icons">
                <a
                  href="https://github.com/gianpaucarcortez/next-pokemon"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://next-pokemon-gian.vercel.app/"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <FiLink2 />
                </a>
              </div>
            </div>

            <div className="tags">
              <h5>ReactJs</h5>
              <h5>Next Js</h5>
              <h5>Next UI</h5>
              
            </div>
            <h5 className="description">
              Es una aplicación desarrollada en Next Js, donde desarrollamos dos
              conceptos muy importates como: GetStaticProps y getStaticPaths.
            </h5>
          </div>
        </div>

        <div className="card">
          <img src={IMG2} alt="" />

          <div className="card__details">
            <div className="portfolio__item-cta">
              <h3>Traveler App</h3>
              <div className="portfolio__item-icons">
                <a
                  href="https://github.com/gianpaucarcortez/traveler-app"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://traveler-app-gian.vercel.app/"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <FiLink2 />
                </a>
              </div>
            </div>

            <div className="tags">
              <h5>React Js</h5>
              <h5>Styled Components</h5>
              
            </div>
            <h5 className="description">
              Es una aplicación de agencia de viajes desarrollada en React Js y Styled Components.
            </h5>
          </div>
        </div>

        <div className="card">
          <img src={IMG3} alt="" />

          <div className="card__details">
            <div className="portfolio__item-cta">
              <h3>Ecommerce</h3>
              <div className="portfolio__item-icons">
                <a
                  href="https://github.com/gianpaucarcortez/gian-store"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://gianstore.herokuapp.com/"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <FiLink2 />
                </a>
                <a
                  href="https://youtu.be/1HVRSZEkdDI"
                  className="portfolio__btn"
                  target="_blank"
                >
                  <IoLogoYoutube />
                </a>
              </div>
            </div>

            <div className="tags">
              
              <h5>Next Js</h5>
              <h5>TypeScript</h5>
              <h5>MongoDB</h5>
              
            </div>
            <h5 className="description">
              Aplicación FullStack desarrolada en NextJs, TypeScript, MongoDB.
              La App cuenta con administración de productos y pasarela de pagos.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
