import { createContext, useContext, useMemo } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../hooks/useCart';

const AppContext = createContext();

export function AppProvider({ children }) {
  const { favorites, toggleFavorite } = useFavorites();
  const { cart, updateQuantity, clearCart } = useCart();

  const value = useMemo(() => ({
    favorites,
    toggleFavorite,
    cart,
    updateQuantity,
    clearCart
  }), [favorites, toggleFavorite, cart, updateQuantity, clearCart]);

  return (
    <AppContext.Provider value={value}>
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
