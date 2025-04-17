import React from "react";
import { FaUser } from "react-icons/fa";

const BotonSobreMi = () => {
  return (
    <a href="#sobre-mi" className="boton-animado">
      <button className="btn btn-primary d-flex align-items-center gap-2">
        <FaUser /> Sobre mí
      </button>
    </a>
  );
};

export default BotonSobreMi;
