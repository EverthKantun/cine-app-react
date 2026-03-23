import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cartelera } from '../pages/Cartelera';
import { Alimentos } from '../pages/Alimentos';
import { Promociones } from '../pages/Promociones';
import { MovieDetail } from '../pages/MovieDetail';
import { Checkout } from '../pages/Checkout';
import { About, Privacy, Terms, Refunds } from '../pages/PagesData';

// Placeholder componente genérico para 404
const NotFound = () => (
  <div className="container" style={{ textAlign: 'center', padding: '100px 0', minHeight: '60vh' }}>
    <h1 style={{ fontSize: '72px', color: 'var(--color-primary)' }}>404</h1>
    <h2>Página No Encontrada</h2>
    <p>Lo sentimos, la página que estás buscando no existe en nuestro universo cinematográfico.</p>
    <a href="/" className="btn-submit" style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}>Volver al Inicio</a>
  </div>
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/pelicula/:id" element={<MovieDetail />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/otros" element={<Promociones />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refunds" element={<Refunds />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
