import React, { useEffect, useRef } from "react";

const MusicaFondo = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.log("Reproducción bloqueada por el navegador -.-", e);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/musica-fondo.mp3" type="audio/mp3" />
      Tu navegador no soporta la reproducción de audio.
    </audio>
  );
};

export default MusicaFondo;
