import { useState } from 'react';
import { FoodCard } from '../components/FoodCard/FoodCard';
import foodsData from '../data/foods.json';
import './Alimentos.css';

export function Alimentos() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (foodId) => {
    setSelectedItems(prev => {
      if (prev.includes(foodId)) {
        return prev.filter(id => id !== foodId);
      } else {
        return [...prev, foodId];
      }
    });
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = foodsData.find(food => food.id === itemId);
      return total + (item?.price || 0);
    }, 0);
  };

  const categories = [...new Set(foodsData.map(food => food.category))];

  return (
    <div className="alimentos-page">
      <div className="container">
        {/* Header */}
        <section className="alimentos-header">
          <h1 className="page-title">Dulcería</h1>
          <p className="page-subtitle">
            Complementa tu experiencia cinematográfica con nuestros deliciosos productos
          </p>
        </section>

        {/* Categories Filter */}
        <section className="categories-section">
          <h3 className="categories-title">Categorías</h3>
          <div className="categories-list">
            {categories.map(category => (
              <div key={category} className="category-badge">
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Foods Grid */}
        <section className="foods-section">
          <div className="foods-grid">
            {foodsData.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                isSelected={selectedItems.includes(food.id)}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </section>

        {/* Selected Items Summary */}
        {selectedItems.length > 0 && (
          <section className="summary-section">
            <div className="summary-card">
              <h3 className="summary-title">Resumen de Selección</h3>
              <div className="summary-content">
                <div className="summary-items">
                  <span className="summary-label">Productos seleccionados:</span>
                  <span className="summary-value">{selectedItems.length}</span>
                </div>
                <div className="summary-total">
                  <span className="total-label">Total:</span>
                  <span className="total-value">
                    {new Intl.NumberFormat('es-MX', {
                      style: 'currency',
                      currency: 'MXN'
                    }).format(calculateTotal())}
                  </span>
                </div>
              </div>
              <button className="btn-checkout">
                Proceder al Pago
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
