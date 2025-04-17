import React from "react";
import { FaFileDownload } from "react-icons/fa";

const BotonDescargarCV = () => {
  return (
    <a
      href="/cv-alejo.pdf"
      download
      className="btn btn-secondary d-flex align-items-center gap-2"
    >
      <FaFileDownload size={20} />
      Descargar CV
    </a>
  );
};

export default BotonDescargarCV;
