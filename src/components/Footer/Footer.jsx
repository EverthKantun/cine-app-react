import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-modern">
      <div className="container footer-container">
        
        {/* Contacto */}
        <div className="footer-col">
          <h3>CinexPopuli</h3>
          <p>La mejor experiencia de cine.</p>
          <div className="contact-info">
            <strong>Teléfono:</strong>
            <p>55 5257-6969</p>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Legal & Info</h4>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/refunds">Refunds</Link></li>
          </ul>
        </div>

        {/* Apps & Payment */}
        <div className="footer-col">
          <h4>Aplicaciones</h4>
          <p className="app-text">Available on App Store / Google Play</p>
          
          <h4 className="mt-4">Métodos de Pago</h4>
          <p className="payment-text">PayPal accepted</p>
        </div>

        {/* Redes Sociales */}
        <div className="footer-col text-right">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} CinexPopuli. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
