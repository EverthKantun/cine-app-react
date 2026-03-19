import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

export function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  const navigate = useNavigate();

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    onToggleFavorite(movie.id);
  };

  const handleCardClick = () => {
    navigate(`/pelicula/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="movie-image-container">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="movie-image"
          loading="lazy"
        />
        <div className="movie-badge">{movie.rating}</div>
      </div>
      
      <div className="movie-content">
        <h3 className="movie-title">{movie.title}</h3>
        
        <div className="movie-info">
          <span className="movie-genre">{movie.genre}</span>
          <span className="movie-divider">•</span>
          <span className="movie-year">{movie.year}</span>
        </div>
        
        <div className="movie-duration">{movie.duration}</div>
        
        <div className="movie-actions">
          <button 
            className={`btn-favorite ${isFavorite ? 'active' : ''}`}
            onClick={handleToggleFavorite}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <span className="heart-icon">{isFavorite ? '❤️' : '🤍'}</span>
            {isFavorite ? 'Favorito' : 'Favoritos'}
          </button>
          
          <button 
            className="btn-more"
            onClick={handleCardClick}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
