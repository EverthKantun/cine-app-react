import { useState, useEffect, useCallback } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cine-cart');
    // Si habían IDs viejos guardados (formato anterior) se van a borrar con un map o reiniciar
    try {
      const parsed = savedCart ? JSON.parse(savedCart) : [];
      // Verificar compatibilidad formato nuevo: { id, quantity }
      if (parsed.length > 0 && typeof parsed[0] === 'number') {
        return []; // Reset it to avoid crashing the new implementation
      }
      return parsed;
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cine-cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = useCallback((foodId, quantityChange) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === foodId);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantityChange;
        
        // Remove item if quantity becomes 0 or less
        if (newQuantity <= 0) {
          return prev.filter(item => item.id !== foodId);
        }
        
        // Update quantity
        return prev.map(item => 
          item.id === foodId ? { ...item, quantity: newQuantity } : item
        );
      } else {
        // Add new item if positive change
        if (quantityChange > 0) {
          return [...prev, { id: foodId, quantity: quantityChange }];
        }
        return prev;
      }
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return { cart, updateQuantity, clearCart };
}
