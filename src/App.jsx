import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Cartelera } from './pages/Cartelera';
import { Alimentos } from './pages/Alimentos';
import { Promociones } from './pages/Promociones';
import './app.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'cartelera':
        return <Cartelera />;
      case 'alimentos':
        return <Alimentos />;
      case 'promociones':
        return <Promociones />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="main-content">
        {renderPage()}
      </main>
      
      <footer className="app-footer">
        <div className="footer-container">
          <p className="footer-text">
            © 2026 CinexPopuli. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;