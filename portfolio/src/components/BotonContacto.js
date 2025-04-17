import React from "react";
import { MdEmail } from "react-icons/md"; // Icono de email

const BotonContacto = () => {
  return (
    <a href="#contacto" className="boton-animado">
      <button className="btn btn-primary d-flex align-items-center gap-2">
        <MdEmail size={20} />
        Contactame
      </button>
    </a>
  );
};

export default BotonContacto;
