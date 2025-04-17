import React, { useState } from "react";
import BotonGUID from "./components/BotonGUID";
import BotonSobreMi from "./components/BotonSobreMi";
import BotonContacto from "./components/BotonContacto";
import BotonDescargarCV from "./components/BotonDescargarCV";
import MusicaFondo from "./components/MusicaFondo";

import "./App.css";

function App() {
  const [cargando, setCargando] = useState(true);
  const [musicaReproducida, setMusicaReproducida] = useState(false);

  // Función para iniciar la reproducción y ocultar la pantalla de carga
  const iniciarReproduccion = () => {
    setMusicaReproducida(true); // Establece que la música debe ser reproducida
    setCargando(false); // Oculta la pantalla de carga
  };

  if (cargando) {
    return (
      <div className="pantalla-espera" onClick={iniciarReproduccion}>
        <h1 className="advertencia-titulo">¡ADVERTENCIA!</h1>
        <span className="advertencia-texto">
          Una vez haga click, usted ingresará al Portfolio del desarrollador
        </span>
        <span className="advertencia-final">QUEDA DEBIDAMENTE AVISADO...</span>
      </div>
    );
  }

  return (
    <div className="container mt-5 fade-in">
      {musicaReproducida && <MusicaFondo />}{" "}
      {/* Reproduce la música solo después del clic */}
      <h1 className="text-center texto-con-contorno">Hola, soy Alejo</h1>
      <p className="text-center texto-con-contorno">
        Bienvenido a mi portfolio
      </p>
      <div className="row d-flex justify-content-between flex-wrap gap-3">
        <div className="col-auto">
          <BotonGUID />
        </div>
        <div className="col-auto">
          <BotonSobreMi />
        </div>
        <div className="col-auto">
          <BotonContacto />
        </div>
        <div className="col-auto">
          <BotonDescargarCV />
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-4 mt-5 text-center ps-5">
          <span className="texto-con-contorno1">
            "La clave del éxito radica en la perseverancia, en seguir adelante a
            pesar de los obstáculos y en aprender de cada desafío."
          </span>
        </div>
        <div className="col-6 padding-negativo">
          <img
            src="/Yo.png"
            alt="Foto de Alejo"
            style={{
              width: "300px",
              borderRadius: "10px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div id="sobre-mi" className="row texto-con-contorno">
        <div>
          Siendo un apasionado del código, he descubierto a lo largo de los años
          que lo mejor de un programador son sus habilidades blandas, las cuales
          considero son mis fortalezas. Me gusta trabajar en equipo y designarle
          tareas a los que considero más pertinentes para el caso y
          conocimiento. Un software no puede ser desarrollado por una sola
          persona, por lo menos no uno de alta gama, porque requiere de mucho
          trabajo y distintos puntos de vista para alcanzar el mismo objetivo:
          La satisfacción del usuario.
        </div>
      </div>
      <div className="row texto-con-contorno mt-5">
        <p>
          Trabajo principalmente con tecnologías modernas y versátiles para el
          desarrollo web. Utilizo <strong>React</strong> para construir
          interfaces interactivas, eficientes y responsivas que brindan una
          experiencia de usuario fluida. En el backend, empleo{" "}
          <strong>Node.js</strong> junto con <strong>Express</strong> para
          desarrollar APIs robustas y escalables que permiten conectar servicios
          y gestionar datos de forma eficiente.
        </p>
        <p>
          Para el manejo de bases de datos, tengo experiencia con{" "}
          <strong>SQL</strong> (especialmente <strong>MySQL</strong> y{" "}
          <strong>PostgreSQL</strong>), lo que me permite estructurar la
          información de manera lógica y optimizada, aplicando buenas prácticas
          en el modelado relacional. También utilizo herramientas como{" "}
          <strong>Bootstrap</strong> y <strong>Tailwind CSS</strong> para
          diseñar interfaces visualmente atractivas sin descuidar la
          accesibilidad y el rendimiento.
        </p>
        <p>
          Mi enfoque de desarrollo se basa en la escritura de código limpio,
          reutilizable y bien documentado, siempre buscando que cada proyecto
          sea escalable, mantenible y fácil de integrar con otras tecnologías.
          Estoy en constante aprendizaje y abierto a incorporar nuevas
          herramientas que mejoren los resultados.
        </p>
      </div>
    </div>
  );
}

export default App;
