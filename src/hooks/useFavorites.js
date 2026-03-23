import { useState, useEffect, useCallback } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('cine-favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem('cine-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((movieId) => {
    setFavorites(prev => {
      if (prev.includes(movieId)) {
        return prev.filter(id => id !== movieId);
      } else {
        return [...prev, movieId];
      }
    });
  }, []);

  return { favorites, toggleFavorite };
}
