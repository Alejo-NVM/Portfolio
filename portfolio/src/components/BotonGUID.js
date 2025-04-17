import React from "react";
import guidIcono from "../assets/github-mark-white.png"; // Ruta relativa a la imagen

const BotonGUID = () => {
  return (
    <a
      href="https://github.com/Alejo-NVM?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      className="boton-animado boton-sin-subrayado"
    >
      <button className="btn btn-success d-flex align-items-center gap-2">
        <img src={guidIcono} alt="icono GUID" width="20" height="20" />
        Ir a GUID
      </button>
    </a>
  );
};

export default BotonGUID;
