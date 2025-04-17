import React from "react";
import { FaTools } from "react-icons/fa";

const BotonTecnologias = () => {
  return (
    <a href="#tecnologias" className="boton-animado boton-sin-subrayado">
      <button className="btn btn-info d-flex align-items-center gap-2">
        <FaTools size={18} />
        Tecnologías
      </button>
    </a>
  );
};

export default BotonTecnologias;
