import { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [copiedMessage, setCopiedMessage] = useState('');

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage('¡Contenido copiado!');

    setTimeout(() => {
      setCopiedMessage('');
    }, 700);
  };

  return (
    <div className="footer">
      <div className="sb_footer section__padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Links de Interés</h4>
            <a href="/">
              <p>Inicio</p>
            </a>
            <a href="/SobreNosotros">
              <p>Sobre Nosotros</p>
            </a>
            <a href="/Galeria">
              <p>Galería</p>
            </a>
            <a href="/Contactenos">
              <p>Contactenos</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Somos una tienda
              totalmente virtual.
              Hacemos envios
              por correos de Costa Rica.
              </h4>
          </div>
          <div className="sb_footer-links_div">
            <h4>Escríbenos</h4>
            <a href="https://wa.link/o0tqqs" target="_blank"
                rel="noopener noreferrer">
              <p>WhatsApp</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Información</h4>
            <button onClick={() => handleCopyToClipboard('+506 6412-7442')}>
              <p>+506 6412-7442</p>
            </button>
            <button onClick={() => handleCopyToClipboard('Nicoya, Guanacate, Costa Rica')}>
              <p>Nicoya, Guanacate, Costa Rica</p>
            </button>
            {copiedMessage && <p>{copiedMessage}</p>}
          </div>
          <div className="sb_footer-links_div">
            <h4>Redes Sociales</h4>
            <div className="socialmedia">
              <p><a href="https://www.instagram.com/latienditade_lolita/" target="_blank"
                rel="noopener noreferrer"><img src="/Img/Instagram.png" alt="Intagram" /></a></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} La tiendita de lolita. All rights reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;