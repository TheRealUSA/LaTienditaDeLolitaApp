import React from 'react';
import { Link } from 'react-router-dom';

function Sobrenosotros() {
  return (
    <>
      <div className='lg:min-h-screen mx-auto'>
        <div className="bg-white bg-opacity-70 text-center rounded-lg p-8 sm:p-12 md:p-16 lg:p-24 shadow-md mt-24 lg:mt-36 mr-2 ml-2 md:mr-24 md:ml-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-5">¡Hola, Bienvenido! <br /> Nos alegra que estés aquí.</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
            Mi nombre es Camila estoy encantada de contarte más sobre nosotros,
            somos un emprendimiento ubicado en Nicoya. Para nosotros cada detalle cuenta
            por eso nos encantaria trabajar para ustedes.
          </p>
          <img src="/Img/LogoLlita.png" alt="Descripción de la imagen" className="mx-auto mb-5 max-w-full h-44" />
        </div>
      </div>
      <div className='lg:min-h-screen mx-auto'>
        <div className="bg-white bg-opacity-70 text-center rounded-lg p-8 sm:p-12 md:p-16 lg:p-24 shadow-md mt-24 lg:mt-36 mr-2 ml-2 md:mr-24 md:ml-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-5">Historia</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
            ¡Hola! Somos La tiendita de Lolita, un emprendimiento único y especial 
            creado por una niña de 10 años con una gran pasión por la creatividad y 
            la independencia financiera. <br /> <br />

            Nuestra historia comenzó cuando Camila, con solo 10 años, decidió embarcarse 
            en el mundo del emprendimiento. Le encantan las pulseras y siempre ha deseado 
            tener su propio dinero para comprar las cosas que le gustan. Inició su viaje 
            vendiendo dibujos hechos a mano en su escuela, ofreciendo a sus compañeros la 
            oportunidad de llevarse a casa sus creaciones únicas. <br /> <br />

            Sin embargo, en su nueva escuela, Camila notó que varias de sus compañeras 
            también estaban vendiendo pulseras. En lugar de rendirse, Camila decidió dar 
            un giro innovador a su emprendimiento. Comenzó a personalizar lapiceros y lápices, 
            transformándolos en obras de arte únicas y reflejando la personalidad de sus clientes.<br /> <br />

            Hoy en día, Camila continúa su viaje emprendedor, ofreciendo lapiceros y lápices 
            decorados que son más que simples herramientas de escritura; son expresiones de 
            individualidad y creatividad. Cada compra apoya su deseo de tener independencia 
            financiera y le permite comprar las cosas que ama.<br /> <br />

            ¡Gracias por ser parte de nuestra historia! Esperamos que encuentres algo 
            especial en nuestra colección que te haga sonreír y que desees ser parte de 
            nuestro viaje.<br />
          </p>
        </div>
      </div>

      <div className='lg:min-h-screen'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-8 sm:p-12 md:p-16 lg:p-24 shadow-md mt-12 lg:mt-36">
          <div className="bg-white bg-opacity-70 text-center rounded-lg p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center font-semibold mb-5">Misión</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
            En La tiendita de Lolita, nuestra misión es inspirar la creatividad y 
            promover la individualidad a través de productos únicos y personalizados. 
            Creemos en empoderar a las personas, independientemente de su edad, para que 
            expresen su originalidad y estilo a través de nuestros lapiceros y lápices 
            decorados. Nos esforzamos por brindar a nuestros clientes una experiencia que 
            les permita destacarse en un mundo de objetos cotidianos.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 text-center rounded-lg p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center font-semibold mb-5">Visión</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-justify p-3 sm:p-5 md:p-8 lg:p-12">
            Nuestra visión en La tiendita de Lolita es convertirnos en un referente en 
            la creación de productos personalizados que inspiren la creatividad y fomenten 
            la expresión personal. Buscamos expandir nuestro alcance y colaborar con artistas 
            y diseñadores jóvenes para seguir innovando en la personalización de artículos 
            cotidianos. Queremos llegar a comunidades más amplias y permitir que más personas 
            descubran la alegría de poseer objetos que reflejen su identidad única.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobrenosotros;