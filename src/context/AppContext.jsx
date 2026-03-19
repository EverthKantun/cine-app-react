import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Inicializamos desde localStorage si existe, sino valores por defecto
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('cine-favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });
  
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cine-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Efecto para guardar en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('cine-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cine-cart', JSON.stringify(cart));
  }, [cart]);

  // Funciones Favoritos
  const toggleFavorite = (movieId) => {
    setFavorites(prev => {
      if (prev.includes(movieId)) {
        return prev.filter(id => id !== movieId);
      } else {
        return [...prev, movieId];
      }
    });
  };

  // Funciones Carrito (Alimentos)
  const toggleCartItem = (foodId) => {
    setCart(prev => {
      if (prev.includes(foodId)) {
        return prev.filter(id => id !== foodId);
      } else {
        return [...prev, foodId];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider value={{ 
      favorites, 
      toggleFavorite,
      cart,
      toggleCartItem,
      clearCart
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
}
