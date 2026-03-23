import { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { getMovies } from '../services/movieService';
import './Cartelera.css';

export function Cartelera() {
  const { favorites, toggleFavorite } = useAppContext();
  
  // Memoize the data fetch so it doesn't recalculate on re-renders (like when favorites change)
  const movies = useMemo(() => getMovies(), []);

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
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
