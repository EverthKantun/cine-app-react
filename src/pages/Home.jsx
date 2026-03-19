import { useNavigate } from 'react-router-dom';
import { Carousel } from '../components/Carousel/Carousel';
import './Home.css';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Swiper Section */}
      <Carousel />

      {/* Quick Access Section */}
      <section className="quick-access">
        <div className="container">
          <h2 className="section-title">Explora Nuestros Servicios</h2>
          
          <div className="quick-grid">
            <button onClick={() => navigate('/cartelera')} className="quick-card">
              <div className="quick-icon">🎬</div>
              <h3>Cartelera</h3>
              <p>Descubre las películas en estreno</p>
            </button>

            <button onClick={() => navigate('/alimentos')} className="quick-card">
              <div className="quick-icon">🍿</div>
              <h3>Alimentos</h3>
              <p>Palomitas, refrescos y más</p>
            </button>

            <button onClick={() => navigate('/otros')} className="quick-card">
              <div className="quick-icon">🎁</div>
              <h3>Promociones</h3>
              <p>Ofertas especiales para ti</p>
            </button>
          </div>
        </div>
      </section>

      {/* Promotions Preview */}
      <section className="promo-preview">
        <div className="container">
          <div className="promo-content">
            <div className="promo-text">
              <h2 className="promo-title">Promociones Especiales</h2>
              <p className="promo-description">
                Descubre nuestras promociones exclusivas y ahorra en tu próxima visita al cine. 
                Ofertas especiales cada semana.
              </p>
              <button onClick={() => navigate('/otros')} className="btn-promo">
                Ver Todas las Promociones
              </button>
            </div>
            <div className="promo-image">
              <div className="promo-badge">
                <span className="badge-text">NUEVAS</span>
                <span className="badge-subtitle">Promociones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Preview */}
      <section className="food-preview">
        <div className="container">
          <h2 className="section-title">Dulcería</h2>
          <p className="section-subtitle">
            Complementa tu experiencia con nuestros deliciosos productos
          </p>
          
          <div className="food-grid">
            <div className="food-item">
              <div className="food-emoji">🍿</div>
              <h4>Palomitas</h4>
            </div>
            <div className="food-item">
              <div className="food-emoji">🥤</div>
              <h4>Bebidas</h4>
            </div>
            <div className="food-item">
              <div className="food-emoji">🌭</div>
              <h4>Hot Dogs</h4>
            </div>
            <div className="food-item">
              <div className="food-emoji">🍫</div>
              <h4>Dulces</h4>
            </div>
          </div>

          <div className="food-cta">
            <button onClick={() => navigate('/alimentos')} className="btn-food">
              Ver Menú Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
