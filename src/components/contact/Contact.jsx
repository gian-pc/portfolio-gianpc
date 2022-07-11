import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import { useRef } from 'react';
import emailjs from 'emailjs-com'



import "./contact.css";

const Contact = () => {


  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n12q97l', 'template_gksmsut', form.current, 'RX-SPXfECIzVzMJRy')

    e.target.reset()
  };




  return (
    <section id="contact">
      <h5>Ponerse en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>gpaucarcortez@gmail.com</h5>
            <a href="mailto:gpaucarcortez@gmail.com" target="_blank">
              Enviar un mensaje
            </a>
          </article>

          <article className="contact__option">

          
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Gian PC</h5>
            <a href="https://m.me/gian.paucarcortez" target="_blank">
            Enviar un mensaje
            </a>
          </article>

         
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
