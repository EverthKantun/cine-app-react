import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useAppContext } from '../../context/AppContext';
import './TicketPurchaseForm.css';

export function TicketPurchaseForm({ movie, time, hasFood }) {
  const navigate = useNavigate();
  const { clearCart } = useAppContext();
  const [submitted, setSubmitted] = useState(false);
  
  const { formData, errors, handleChange, validate } = useFormValidation({
    name: '',
    email: '',
    quantity: movie ? '1' : '0'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const rules = {
      name: [{ test: (v) => v.trim().length > 0, message: 'El nombre es requerido' }],
      email: [
        { test: (v) => v.trim().length > 0, message: 'El email es requerido' },
        { test: (v) => /\S+@\S+\.\S+/.test(v), message: 'Email inválido' }
      ]
    };

    if (movie) {
      rules.quantity = [
        { test: (v) => parseInt(v) >= 1, message: 'La cantidad debe ser al menos 1' },
      ];
    }
    
    if (validate(rules)) {
      setSubmitted(true);
      if (hasFood) {
        clearCart();
      }
    }
  };

  if (submitted) {
    return (
      <div className="ticket-form success-card-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h3 className="success-title">¡Compra Confirmada!</h3>
          <div className="success-details">
            <p><strong>Nombre:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            {movie && (
              <>
                <p><strong>Película:</strong> {movie.title}</p>
                <p><strong>Horario:</strong> {time}</p>
                <p><strong>Cantidad boletos:</strong> {formData.quantity}</p>
              </>
            )}
            {hasFood && (
              <p><strong>Dulcería:</strong> Sus productos estarán listos.</p>
            )}
          </div>
          <p className="success-message">
            Recibirás un email de confirmación en breve con tus recibos.
          </p>
          <button 
            className="btn-submit" 
            style={{ marginTop: '20px' }}
            onClick={() => navigate('/')}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-header" style={{ marginBottom: '24px' }}>
        <h2 className="form-title">Tus Datos</h2>
        <p className="form-subtitle">Completa el formulario para reservar</p>
      </div>

      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Juan Pérez"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="ejemplo@correo.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {movie && (
          <div className="form-group">
            <label htmlFor="quantity" className="form-label">Cantidad de Boletos</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max="10"
              className={`form-input ${errors.quantity ? 'error' : ''}`}
            />
            {errors.quantity && <span className="error-message">{errors.quantity}</span>}
          </div>
        )}

        <button type="submit" className="btn-submit">
          Confirmar y Pagar
        </button>
      </form>
    </div>
  );
}
