import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Cartelera } from './pages/Cartelera';
import { Alimentos } from './pages/Alimentos';
import { Promociones } from './pages/Promociones';
import { MovieDetail } from './pages/MovieDetail';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/pelicula/:id" element={<MovieDetail />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Promociones />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Routes>
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