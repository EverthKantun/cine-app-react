import { useState } from 'react';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { Form } from '../components/Form/Form';
import moviesData from '../data/movies.json';
import './Cartelera.css';

export function Cartelera() {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (movieId) => {
    setFavorites(prev => {
      if (prev.includes(movieId)) {
        return prev.filter(id => id !== movieId);
      } else {
        return [...prev, movieId];
      }
    });
  };

  return (
    <div className="cartelera-page">
      <div className="container">
        {/* Header Section */}
        <section className="cartelera-header">
          <h1 className="page-title">Cartelera</h1>
          <p className="page-subtitle">
            Descubre todas las películas disponibles en nuestros cines
          </p>
          {favorites.length > 0 && (
            <div className="favorites-count">
              <span className="heart-emoji">❤️</span>
              {favorites.length} {favorites.length === 1 ? 'Favorito' : 'Favoritos'}
            </div>
          )}
        </section>

        {/* Movies Grid */}
        <section className="movies-section">
          <div className="movies-grid">
            {moviesData.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="form-section">
          <Form movies={moviesData} />
        </section>
      </div>
    </div>
  );
}
