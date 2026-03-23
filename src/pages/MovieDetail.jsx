import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getMovieById } from '../services/movieService';
import './MovieDetail.css';

export function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useAppContext();
  
  const movie = getMovieById(id);
  
  if (!movie) {
    return (
      <div className="movie-detail-error">
        <h2>Película no encontrada</h2>
        <button onClick={() => navigate('/cartelera')} className="btn-back">
          Volver a Cartelera
        </button>
      </div>
    );
  }

  const isFavorite = favorites.includes(movie.id);

  const handlePurchase = (time) => {
    // Navigate to checkout with the selected movie and time
    navigate('/checkout', { state: { movieId: movie.id, time } });
  };

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-hero" style={{ backgroundImage: `url(${movie.image})` }}>
        <div className="movie-detail-overlay"></div>
      </div>
      
      <div className="container movie-detail-content">
        <button className="btn-back-link" onClick={() => navigate('/cartelera')}>
          &larr; Volver a Cartelera
        </button>
        
        <div className="detail-grid">
          <div className="detail-poster-container">
            <img src={movie.image} alt={movie.title} className="detail-poster" />
            <div className="detail-badge">{movie.rating}</div>
          </div>
          
          <div className="detail-info">
            <div className="detail-header">
              <h1 className="detail-title">{movie.title}</h1>
              <button 
                className={`btn-favorite-icon ${isFavorite ? 'active' : ''}`}
                onClick={() => toggleFavorite(movie.id)}
                aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
            
            <div className="detail-meta">
              <span className="meta-item">{movie.genre}</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">{movie.year}</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">{movie.duration}</span>
            </div>
            
            <div className="detail-synopsis">
              <h3>Sinopsis</h3>
              <p>{movie.description}</p>
            </div>
            
            <div className="detail-schedules">
              <h3>Horarios Disponibles</h3>
              <p className="schedules-help">Selecciona un horario para comprar tus boletos</p>
              <div className="schedules-grid">
                {movie.schedules.map(time => (
                  <button 
                    key={time} 
                    className="btn-schedule"
                    onClick={() => handlePurchase(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
