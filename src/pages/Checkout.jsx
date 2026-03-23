import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { TicketPurchaseForm } from '../components/TicketPurchaseForm/TicketPurchaseForm';
import { getMovieById } from '../services/movieService';
import { getFoods } from '../services/foodService';
import { useAppContext } from '../context/AppContext';
import './Checkout.css';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useAppContext();
  
  // Extraemos estado proveniente de "/pelicula/:id" o "/alimentos"
  const movieId = location.state?.movieId;
  const time = location.state?.time;
  
  const selectedMovie = movieId ? getMovieById(movieId) : null;
  const foodsData = useMemo(() => getFoods(), []);

  const { totalFoods, cartDetails } = useMemo(() => {
    return cart.reduce((acc, cartItem) => {
      const item = foodsData.find(food => food.id === cartItem.id);
      if (item) {
        acc.totalFoods += item.price * cartItem.quantity;
        acc.cartDetails.push({ ...item, quantity: cartItem.quantity });
      }
      return acc;
    }, { totalFoods: 0, cartDetails: [] });
  }, [cart, foodsData]);
  
  // Si no hay película Y no hay carrito
  if (!selectedMovie && cartDetails.length === 0) {
    return (
      <div className="checkout-page error-checkout">
        <div className="container">
          <h2>No haz seleccionado nada</h2>
          <p>Para procesar un pago, primero elige una película o productos en dulcería.</p>
          <button className="btn-return" onClick={() => navigate('/cartelera')}>
            Ir a Cartelera
          </button>
        </div>
      </div>
    );
  }

  const handleReturn = () => {
    if (selectedMovie) navigate(`/pelicula/${movieId}`);
    else navigate('/alimentos');
  };
  
  const returnText = selectedMovie ? `&larr; Volver a ${selectedMovie.title}` : `&larr; Volver a Alimentos`;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <button className="btn-back-link" onClick={handleReturn} dangerouslySetInnerHTML={{ __html: returnText }} />
          <h1 className="page-title">Finalizar Compra</h1>
          <p className="page-subtitle">Estás a un paso de asegurar tu pedido</p>
        </div>

        <div className="checkout-grid">
          <div className="checkout-summary">
            <h3>Resumen de Reserva</h3>
            
            {selectedMovie && (
              <div className="summary-card-inner" style={{ marginBottom: '24px' }}>
                <img src={selectedMovie.image} alt={selectedMovie.title} className="summary-image" />
                <div className="summary-details">
                  <h4>{selectedMovie.title}</h4>
                  <p><strong>Clasificación:</strong> {selectedMovie.rating}</p>
                  <p><strong>Duración:</strong> {selectedMovie.duration}</p>
                  <p className="summary-time"><strong>Horario:</strong> {time}</p>
                </div>
              </div>
            )}

            {cartDetails.length > 0 && (
              <div className="cart-summary-inner" style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)'}}>
                <h4 style={{ margin: '0 0 12px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>Dulcería</h4>
                <ul className="cart-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {cartDetails.map(item => (
                    <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '15px' }}>
                      <span>{item.quantity}x {item.name}</span>
                      <span style={{ fontWeight: '500', color: 'var(--color-accent)' }}>{formatPrice(item.price * item.quantity)}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px' }}>
                  <span>Subtotal Alimentos:</span>
                  <span style={{ color: 'var(--color-accent)' }}>{formatPrice(totalFoods)}</span>
                </div>
              </div>
            )}
            
          </div>
          
          <div className="checkout-form-container">
            <TicketPurchaseForm 
              movie={selectedMovie} 
              time={time} 
              hasFood={cartDetails.length > 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
