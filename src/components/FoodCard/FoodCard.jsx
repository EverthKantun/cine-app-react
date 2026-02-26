import './FoodCard.css';

export function FoodCard({ food, isSelected, onSelect }) {
  const handleSelect = () => {
    onSelect(food.id);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className={`food-card ${isSelected ? 'selected' : ''}`}>
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
        
        <button 
          className={`btn-select ${isSelected ? 'selected' : ''}`}
          onClick={handleSelect}
        >
          {isSelected ? '✓ Seleccionado' : 'Seleccionar'}
        </button>
      </div>
    </div>
  );
}
