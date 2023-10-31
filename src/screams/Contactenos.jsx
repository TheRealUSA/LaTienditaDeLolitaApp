import React from 'react';

function Contactenos() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center font-bold mt-24">Ubicación</h1>
      <div className='min-h-screen'>
        <div className="bg-white bg-opacity-70 text-center rounded-lg shadow-md mt-10 mr-2 ml-2 md:mr-24 md:ml-24 ">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
        En La Tiendita de Lolita, nos enorgullecemos de ser un emprendimiento 100% Nicoyano que ha abrazado la era 
        digital para ofrecer a nuestros clientes una experiencia de 
        compra única y conveniente. A pesar de ser un emprendimiento completamente virtual, estamos comprometidos en 
        llevar nuestros productos de calidad a todos los rincones de país, y lo hacemos a través de la colaboración 
        con el servicio de correos de Correos de Costa Rica.
            </p>
          <div class="md:flex">
            <div class="md:w-1/3 sm:w-full mb-5">
              <h2 class="text-lg font-semibold">Numero de teléfono</h2>
              <p className='text-slate-700'>+506 6412-7442</p>
            </div>
            <div class="md:w-1/3 sm:w-full mb-5">
              <h2 class="text-lg font-semibold">Instagram</h2>
              <a href="https://www.instagram.com/latienditade_lolita/" target="_blank"
                rel="noopener noreferrer">
              <p className='text-fuchsia-600'>latienditade_lolita</p>
              </a>
            </div>
            <div class="md:w-1/3 sm:w-full mb-5">
              <h2 class="text-lg font-semibold">WhatsApp</h2>
              <a href="https://wa.link/o0tqqs" target="_blank"
                rel="noopener noreferrer">
              <p className='text-green-600'>Chat directo</p>
            </a>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Contactenos;