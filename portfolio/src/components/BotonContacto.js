import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const BotonContacto = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const enviarPorWhatsApp = () => {
    const numero = "3534192047";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const enviarPorEmail = () => {
    const mailto = `mailto:alejomartinez00@hotmail.com?subject=Contacto&body=${encodeURIComponent(
      mensaje
    )}`;
    window.location.href = mailto;
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={toggleFormulario}>
        <FaRegEdit size={20} />
        {mostrarFormulario ? "Cerrar formulario" : "Contactame"}
      </button>

      {mostrarFormulario && (
        <div className="mt-3">
          <textarea
            className="form-control mb-2"
            rows="4"
            placeholder="Escribí tu mensaje..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-outline-success"
              onClick={enviarPorWhatsApp}
            >
              <FaWhatsapp size={20} />
              Enviar por WhatsApp
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={enviarPorEmail}
            >
              <MdEmail size={20} />
              Enviar por Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotonContacto;
