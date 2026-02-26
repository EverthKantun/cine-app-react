import { useState } from 'react';
import './Header.css';

export function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1 className="logo-text" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            CinePro
          </h1>
        </div>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'cartelera' ? 'active' : ''}`}
                onClick={() => handleNavClick('cartelera')}
              >
                Cartelera
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'alimentos' ? 'active' : ''}`}
                onClick={() => handleNavClick('alimentos')}
              >
                Alimentos
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'promociones' ? 'active' : ''}`}
                onClick={() => handleNavClick('promociones')}
              >
                Promociones
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
