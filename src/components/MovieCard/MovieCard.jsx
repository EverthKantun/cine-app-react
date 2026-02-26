import { useState } from 'react';
import './MovieCard.css';

export function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleFavorite = () => {
    onToggleFavorite(movie.id);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`movie-card ${expanded ? 'expanded' : ''}`}>
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
        
        {expanded && (
          <div className="movie-description">
            <p>{movie.description}</p>
          </div>
        )}
        
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
            onClick={toggleExpand}
          >
            {expanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </div>
  );
}
