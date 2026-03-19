import { useLocation, useNavigate } from 'react-router-dom';
import { TicketPurchaseForm } from '../components/TicketPurchaseForm/TicketPurchaseForm';
import moviesData from '../data/movies.json';
import './Checkout.css';

export function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extraemos estado proveniente de "/pelicula/:id"
  const movieId = location.state?.movieId;
  const time = location.state?.time;
  
  const selectedMovie = moviesData.find(m => m.id === movieId);
  
  // Si entró aquí directamente por URL sin datos de película
  if (!selectedMovie) {
    return (
      <div className="checkout-page error-checkout">
        <div className="container">
          <h2>No haz seleccionado ninguna película</h2>
          <p>Para comprar boletos, primero elige tu película en la cartelera.</p>
          <button className="btn-return" onClick={() => navigate('/cartelera')}>
            Ir a Cartelera
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <button className="btn-back-link" onClick={() => navigate(`/pelicula/${movieId}`)}>
            &larr; Volver a {selectedMovie.title}
          </button>
          <h1 className="page-title">Finalizar Compra</h1>
          <p className="page-subtitle">Estás a un paso de asegurar tus lugares</p>
        </div>

        <div className="checkout-grid">
          <div className="checkout-summary">
            <h3>Resumen de Reserva</h3>
            <div className="summary-card-inner">
              <img src={selectedMovie.image} alt={selectedMovie.title} className="summary-image" />
              <div className="summary-details">
                <h4>{selectedMovie.title}</h4>
                <p><strong>Clasificación:</strong> {selectedMovie.rating}</p>
                <p><strong>Duración:</strong> {selectedMovie.duration}</p>
                <p className="summary-time"><strong>Horario:</strong> {time}</p>
              </div>
            </div>
          </div>
          
          <div className="checkout-form-container">
            <TicketPurchaseForm 
              movie={selectedMovie} 
              time={time} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
