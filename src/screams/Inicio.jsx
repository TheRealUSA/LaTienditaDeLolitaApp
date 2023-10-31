import React from 'react';
import { Link} from 'react-router-dom';

function Inicio() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='lg:min-h-screen mx-auto'>
        <div className="bg-white bg-opacity-70 text-center rounded-lg p-8 sm:p-12 md:p-16 lg:p-24 shadow-md mt-24 lg:mt-36 mr-2 ml-2 md:mr-24 md:ml-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-5">¡Accesorios llenos de amor y color!</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
            En la Tiendita de Lolita, creemos que cada día de clases es una oportunidad para brillar y mostrar tu estilo único.
            Nuestros accesorios personalizados no solo hacen que tus lápices destaquen, sino que también reflejan tu personalidad.
            Imagina lápices rodeados de colores vibrantes, destellos de magia y diseños que te hagan sonreír cada vez que los uses.
          </p>
          <a
        href="/Galeria"
        onClick={handleScrollToTop}
        className="bg-[#A3D2CA] text-black font-semibold py-2 px-4 rounded mt-5 inline-block shadow-md sm:text-xl md:text-xl lg:text-xl"
      >
         Explora nuestra colección
      </a>
        </div>
      </div>
      <div className='lg:min-h-screen'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-8 sm:p-12 md:p-16 lg:p-24 shadow-md  ">
          <div className="text-center rounded-lg p-6 sm:p-10">
            <img src="/Img/Bicicletas.jpeg" alt="Imagen de un lapiz decorado" className="mx-auto mb-5 max-w-full h-auto" />
          </div>
          <div className="lg:bg-white bg-opacity-70 text-center rounded-lg p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center font-semibold mb-5">¿Estás cansado de que tus hijos pierdan o descuiden sus útiles escolares por desinteres?</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
              Cada año, gastas dinero en la compra de nuevos lápices y manteriales escolares,
              solo para verlos desaparecer o deteriorarse rápidamente. Además, te preocupa que
              esta actitud descuidada hacia los útiles escolares puedan afectar su desempeño
              academico y su actitud hacia el estudio.
            </p>
          </div>
        </div>
      </div>

      <div className='lg:min-h-screen'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-8 sm:p-12 md:p-16 lg:p-24 shadow-md mt-12 lg:mt-36">
          <div className="bg-white bg-opacity-70 text-center rounded-lg p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center font-semibold mb-5">Transformando útiles escolares en tesoros valiosos</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
              Nuestros accesorios decorados para lápices están diseñados
              pensando en la durabilidad y el estilo. Cada producto ec único y
              atractivo, lo que hace que los lápices sean fácilmente
              identificables y difíciles de perder. Los colores vibrantes y los
              diseños encantadores fomentan la creatividad y el interes de tus
              hijos en sus materiales escolares.
              Además, al darles la libertad de personalizar sus propios lápices
              con nuestros accesorios, les fomentamos la importancia de cuidar y
              apreciar lo que tienen.
            </p>
            <a
        href="/Contactenos"
        onClick={handleScrollToTop}
        className="bg-[#A3D2CA] text-black font-semibold py-2 px-4 rounded mt-5 inline-block shadow-md sm:text-xl md:text-xl lg:text-xl"
      >
        ¿Cómo contactarnos?
      </a>
          </div>
          <div className="text-center rounded-lg p-6 sm:p-10">
            <img src="/Img/Montaña.jpeg" alt="Descripción de la imagen" className="mx-auto mb-5 max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
