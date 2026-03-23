import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FoodCard } from '../components/FoodCard/FoodCard';
import { getFoods } from '../services/foodService';
import './Alimentos.css';

export function Alimentos() {
  const { cart, updateQuantity } = useAppContext();
  const navigate = useNavigate();
  const foodsData = useMemo(() => getFoods(), []);

  const { total, itemsCount } = useMemo(() => {
    return cart.reduce((acc, cartItem) => {
      const item = foodsData.find(food => food.id === cartItem.id);
      if (item) {
        acc.total += item.price * cartItem.quantity;
        acc.itemsCount += cartItem.quantity;
      }
      return acc;
    }, { total: 0, itemsCount: 0 });
  }, [cart, foodsData]);

  const categories = useMemo(() => [...new Set(foodsData.map(food => food.category))], [foodsData]);

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

        <div className="alimentos-layout">
          <div className="alimentos-main">
            {/* Foods Grid */}
            <section className="foods-section">
              <div className="foods-grid">
                {foodsData.map(food => {
                  const cartItem = cart.find(c => c.id === food.id);
                  const quantity = cartItem ? cartItem.quantity : 0;
                  return (
                    <FoodCard
                      key={food.id}
                      food={food}
                      quantity={quantity}
                      onUpdateQuantity={updateQuantity}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          {cart.length > 0 && (
            <div className="alimentos-sidebar">
              <div className="summary-card sidebar-style">
                <h3 className="summary-title">Resumen de Selección</h3>
                <div className="summary-content sidebar-layout">
                  <div className="summary-items">
                    <span className="summary-label">Artículos:</span>
                    <span className="summary-value">{itemsCount}</span>
                  </div>
                  <div className="summary-total">
                    <span className="total-label">Total:</span>
                    <span className="total-value">
                      {new Intl.NumberFormat('es-MX', {
                        style: 'currency',
                        currency: 'MXN'
                      }).format(total)}
                    </span>
                  </div>
                </div>
                <button 
                  className="btn-checkout" 
                  onClick={() => navigate('/checkout', { state: { fromAlimentos: true } })}
                >
                  Proceder al Pago
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
