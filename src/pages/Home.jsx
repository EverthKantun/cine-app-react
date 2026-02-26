import './Home.css';

export function Home({ onNavigate }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a CinePro</h1>
          <p className="hero-subtitle">
            Vive la mejor experiencia cinematográfica
          </p>
          <button onClick={() => onNavigate('cartelera')} className="btn-hero">
            Ver Cartelera
          </button>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access">
        <div className="container">
          <h2 className="section-title">Explora Nuestros Servicios</h2>
          
          <div className="quick-grid">
            <button onClick={() => onNavigate('cartelera')} className="quick-card">
              <div className="quick-icon">🎬</div>
              <h3>Cartelera</h3>
              <p>Descubre las películas en estreno</p>
            </button>

            <button onClick={() => onNavigate('alimentos')} className="quick-card">
              <div className="quick-icon">🍿</div>
              <h3>Alimentos</h3>
              <p>Palomitas, refrescos y más</p>
            </button>

            <button onClick={() => onNavigate('promociones')} className="quick-card">
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
              <button onClick={() => onNavigate('promociones')} className="btn-promo">
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
            <button onClick={() => onNavigate('alimentos')} className="btn-food">
              Ver Menú Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
