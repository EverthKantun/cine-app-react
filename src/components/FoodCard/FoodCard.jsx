import { memo } from 'react';
import './FoodCard.css';

export const FoodCard = memo(function FoodCard({ food, quantity, onUpdateQuantity }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className={`food-card ${quantity > 0 ? 'selected' : ''}`}>
      <div className="food-image-container">
        <img 
          src={food.image} 
          alt={food.name} 
          className="food-image"
          loading="lazy"
        />
      </div>
      
      <div className="food-content">
        <div className="food-category">{food.category}</div>
        <h3 className="food-name">{food.name}</h3>
        <div className="food-price">{formatPrice(food.price)}</div>
        
        {quantity > 0 ? (
          <div className="food-quantity-controls">
            <button className="btn-qty" onClick={() => onUpdateQuantity(food.id, -1)}>-</button>
            <span className="qty-value">{quantity}</span>
            <button className="btn-qty" onClick={() => onUpdateQuantity(food.id, 1)}>+</button>
          </div>
        ) : (
          <button 
            className="btn-select"
            onClick={() => onUpdateQuantity(food.id, 1)}
          >
            Agregar
          </button>
        )}
      </div>
    </div>
  );
});
