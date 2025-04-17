import BotonGUID from "./components/BotonGUID";
import BotonSobreMi from "./components/BotonSobreMi";
import BotonContacto from "./components/BotonContacto";
import BotonTecnologias from "./components/BotonTecnologias";
import ImagenYo from "./components/ImagenYo";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center texto-con-contorno">Hola, soy Alejo</h1>
      <p className="text-center texto-con-contorno">
        Bienvenido a mi portfolio
      </p>
      <div className="row">
        <img
          src={ImagenYo}
          alt="Desarrollador GigaChad"
          className="img-fluid rounded shadow"
          width="200"
        />
      </div>
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
          <BotonTecnologias />
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
      <div id="contacto" className="row texto-con-contorno mt-5">
        <p>Podés contactarme en alejo@email.com o seguirme en mis redes...</p>
      </div>
    </div>
  );
}

export default App;
