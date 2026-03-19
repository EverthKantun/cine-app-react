import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-text" onClick={closeMenu}>
            CinexPopuli
          </Link>
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
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cartelera" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Cartelera
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/alimentos" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Alimentos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/otros" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Promociones
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
