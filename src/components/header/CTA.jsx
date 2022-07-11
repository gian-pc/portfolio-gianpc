import React from "react";
import CV from "../../assets/CV-GianPaucarCortez.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a target={"_blank"} href={CV} className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
