import { useState, useEffect } from 'react';
import { PromotionCard } from '../components/PromotionCard/PromotionCard';
import { fetchPromotions } from '../services/api';
import './Promociones.css';

export function Promociones() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPromotions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchPromotions();
        setPromotions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPromotions();
  }, []);

  return (
    <div className="promociones-page">
      <div className="container">
        {/* Header */}
        <section className="promociones-header">
          <h1 className="page-title">Promociones</h1>
          <p className="page-subtitle">
            Descubre nuestras ofertas especiales y ahorra en tu próxima visita
          </p>
        </section>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Cargando promociones...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h3 className="error-title">Error al cargar promociones</h3>
            <p className="error-message">{error}</p>
            <button 
              className="btn-retry"
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Promotions Grid */}
        {!loading && !error && (
          <section className="promotions-section">
            <div className="promotions-grid">
              {promotions.map(promotion => (
                <PromotionCard
                  key={promotion.id}
                  promotion={promotion}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
