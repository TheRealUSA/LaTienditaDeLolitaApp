import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importa el ícono "X" de react-icons

const Galeria = () => {
  // Aquí podrías definir un array de datos con tus imágenes y videos.
  const galeriaData = [
    { "id": 1, "tipo": "video", "url": "/Galeria/Serenidad.mp4" },
    { "id": 2, "tipo": "video", "url": "/Galeria/Amanecer.mp4" },
    { "id": 3, "tipo": "imagen", "url": "/Galeria/Reflejos.jpeg" },
    { "id": 4, "tipo": "imagen", "url": "/Galeria/Ciudad.jpeg" },
    { "id": 5, "tipo": "video", "url": "/Galeria/Belleza.mp4" },
    { "id": 6, "tipo": "imagen", "url": "/Galeria/Montaña.jpeg" },
    { "id": 7, "tipo": "video", "url": "/Galeria/Atardecer.mp4" },
    { "id": 8, "tipo": "imagen", "url": "/Galeria/Familia.jpeg" },
    { "id": 9, "tipo": "imagen", "url": "/Galeria/Arquitectura.jpeg" },
    { "id": 10, "tipo": "imagen", "url": "/Galeria/Naturaleza.jpeg" },
    { "id": 11, "tipo": "imagen", "url": "/Galeria/Multitud.jpeg" },
    { "id": 12, "tipo": "imagen", "url": "/Galeria/Paisaje.jpeg" },
    { "id": 13, "tipo": "imagen", "url": "/Galeria/Puesta.jpeg" },
    { "id": 14, "tipo": "imagen", "url": "/Galeria/Misterio.jpeg" },
    { "id": 15, "tipo": "imagen", "url": "/Galeria/Feria.jpeg" },
    { "id": 16, "tipo": "imagen", "url": "/Galeria/Tren.jpeg" },
    { "id": 17, "tipo": "imagen", "url": "/Galeria/Gente.jpeg" },
    { "id": 18, "tipo": "imagen", "url": "/Galeria/Texturas.jpeg" },
    { "id": 19, "tipo": "imagen", "url": "/Galeria/Exploración.jpeg" },
    { "id": 20, "tipo": "imagen", "url": "/Galeria/Pesca.jpeg" },
    { "id": 21, "tipo": "imagen", "url": "/Galeria/Senderismo.jpeg" },
    { "id": 22, "tipo": "imagen", "url": "/Galeria/Diversión.jpeg" },
    { "id": 23, "tipo": "imagen", "url": "/Galeria/Esculturas.jpeg" },
    { "id": 24, "tipo": "imagen", "url": "/Galeria/Atracciones.jpeg" },
    { "id": 25, "tipo": "imagen", "url": "/Galeria/Tranquilidad.jpeg" },
    { "id": 26, "tipo": "imagen", "url": "/Galeria/Mercado.jpeg" },
    { "id": 27, "tipo": "imagen", "url": "/Galeria/Marina.jpeg" },
    { "id": 28, "tipo": "imagen", "url": "/Galeria/Aves.jpeg" },
    { "id": 29, "tipo": "imagen", "url": "/Galeria/Nieve.jpeg" },
    { "id": 30, "tipo": "video", "url": "/Galeria/Rascacielos.mp4" },
    { "id": 31, "tipo": "video", "url": "/Galeria/Trabajo.mp4" },
    { "id": 32, "tipo": "imagen", "url": "/Galeria/Bicicletas.jpeg" },
    { "id": 33, "tipo": "imagen", "url": "/Galeria/Jardín.jpeg" },
    { "id": 34, "tipo": "imagen", "url": "/Galeria/Cultural.jpeg" },
    { "id": 35, "tipo": "imagen", "url": "/Galeria/Aventura.jpeg" },
    { "id": 36, "tipo": "video", "url": "/Galeria/Café.mp4" },
    { "id": 37, "tipo": "imagen", "url": "/Galeria/Moderna.jpeg" },
    { "id": 38, "tipo": "video", "url": "/Galeria/Momento.mp4" },
    { "id": 39, "tipo": "imagen", "url": "/Galeria/Nocturna.jpeg" },
    { "id": 40, "tipo": "imagen", "url": "/Galeria/Hamaca.jpeg" },
    { "id": 41, "tipo": "imagen", "url": "/Galeria/Granja.jpeg" },
    { "id": 42, "tipo": "imagen", "url": "/Galeria/Riqueza.jpeg" },
    { "id": 43, "tipo": "video", "url": "/Galeria/Fuegos.mp4" },
    { "id": 44, "tipo": "imagen", "url": "/Galeria/Colores.jpeg" },
    { "id": 45, "tipo": "video", "url": "/Galeria/Parque.mp4" },
    { "id": 46, "tipo": "imagen", "url": "/Galeria/Desierto.jpeg" },
    { "id": 47, "tipo": "video", "url": "/Galeria/Luces.mp4" },
    { "id": 48, "tipo": "imagen", "url": "/Galeria/Río.png" },
    { "id": 49, "tipo": "imagen", "url": "/Galeria/Cielo.jpeg" },
    { "id": 50, "tipo": "video", "url": "/Galeria/Viaje.mp4" },
    { "id": 51, "tipo": "imagen", "url": "/Galeria/Playa.jpeg" },
    { "id": 52, "tipo": "video", "url": "/Galeria/Arte.mp4" },
    { "id": 53, "tipo": "imagen", "url": "/Galeria/Fiesta.jpeg" },
    { "id": 54, "tipo": "video", "url": "/Galeria/Calle.mp4" },
    { "id": 55, "tipo": "imagen", "url": "/Galeria/Amigos.jpeg" },
    { "id": 56, "tipo": "imagen", "url": "/Galeria/Gourmet.jpeg" },
    { "id": 57, "tipo": "video", "url": "/Galeria/Elegancia.mp4" },
    { "id": 58, "tipo": "video", "url": "/Galeria/Aventura.mp4" }
  ];

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const handleClickImagen = (url) => {
    setImagenSeleccionada(url);
  };

  const handleCloseImagen = () => {
    setImagenSeleccionada(null);
  };

  return (
    <>
      <div className="p-5 md:p-10 mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center font-semibold mb-10">Galería</h1>
        <div className="columns-1 gap-5 lg:gap-5 sm:columns-3 xl:columns-4 space-y-5 lg:space-y-8">
          {galeriaData.map((item) => (
            <div key={item.id} className="cursor-pointer" onClick={() => handleClickImagen(item.url)}>
              {item.tipo === "imagen" ? (
                <img src={item.url} alt={`Imagen ${item.id}`} title={item.title} />
              ) : (
                <video controls>
                  <source src={item.url} type="video/mp4" />
                  Tu navegador no admite la reproducción de videos.
                </video>
              )}
            </div>
          ))}
        </div>

        {imagenSeleccionada && !imagenSeleccionada.includes(".mp4") && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="max-w-full max-h-full overflow-auto">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-white text-4xl cursor-pointer"
                  onClick={handleCloseImagen}
                >
                  <AiOutlineClose className="text-white" />
                </button>
                <img
                  src={imagenSeleccionada}
                  alt="Imagen ampliada"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Galeria;