import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Cartelera } from './pages/Cartelera';
import { Alimentos } from './pages/Alimentos';
import { Promociones } from './pages/Promociones';
import { MovieDetail } from './pages/MovieDetail';
import { Checkout } from './pages/Checkout';
import { About, Privacy, Terms, Refunds } from './pages/PagesData';

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
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;