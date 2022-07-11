import React from "react";
import { BsPatchCheckFill} from "react-icons/bs";
import html5 from '../../assets/icons/html5.png'
import python from '../../assets/icons/python.png'
import css3 from '../../assets/icons/css3.png'
import js from '../../assets/icons/javascript.png'
import react from '../../assets/icons/react.png'
import node from '../../assets/icons/node.png'
import mongo from '../../assets/icons/mongo.png'
import nextjs from '../../assets/icons/next-js.png'
import docker from '../../assets/icons/docker.png'



import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Que habilidades tengo</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
            <img src={html5} alt="" className="logos"/>
              {/* <AiFillHtml5 className="experience__details-icon" /> */}
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
            <img src={css3} alt="" className="logos"/>
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediated</small>
              </div>
            </article>

            <article className="experience__details">
            <img src={js} alt="" className="logos"/>
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
            <img src={react} alt="" className="logos"/>
              {/* <BsPatchCheckFill className="experience__details-icon" /> */}
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>


           
            
          </div>
        </div>

        <div className="experience__backend">
          <div className="experience__frontend">
            <h3>Backend</h3>
            <div className="experience__content">
              <article className="experience__details">
              <img src={node} alt="" className="logos"/>
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
              <img src={python} alt="" className="logos"/>
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Intermediated</small>
                </div>
              </article>
              <article className="experience__details">
              <img src={mongo} alt="" className="logos"/>
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
              <img src={docker} alt="" className="logos"/>
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <h4>Docker</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
