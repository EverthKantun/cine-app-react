import { useState } from 'react';
import './Form.css';

export function Form({ movies }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '1',
    movie: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.movie) {
      newErrors.movie = 'Selecciona una película';
    }

    if (parseInt(formData.quantity) < 1) {
      newErrors.quantity = 'La cantidad debe ser al menos 1';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        quantity: '1',
        movie: ''
      });
    }, 5000);
  };

  const selectedMovie = movies.find(m => m.id === parseInt(formData.movie));

  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-title">Compra de Boletos</h2>
        <p className="form-subtitle">Completa el formulario para reservar tus boletos</p>
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

        <div className="form-group">
          <label htmlFor="movie" className="form-label">Película</label>
          <select
            id="movie"
            name="movie"
            value={formData.movie}
            onChange={handleChange}
            className={`form-select ${errors.movie ? 'error' : ''}`}
          >
            <option value="">Selecciona una película</option>
            {movies.map(movie => (
              <option key={movie.id} value={movie.id}>
                {movie.title} ({movie.rating})
              </option>
            ))}
          </select>
          {errors.movie && <span className="error-message">{errors.movie}</span>}
        </div>

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

        <button type="submit" className="btn-submit">
          Confirmar Compra
        </button>
      </form>

      {submitted && (
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h3 className="success-title">¡Compra Confirmada!</h3>
          <div className="success-details">
            <p><strong>Nombre:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Película:</strong> {selectedMovie?.title}</p>
            <p><strong>Cantidad:</strong> {formData.quantity} boleto(s)</p>
          </div>
          <p className="success-message">
            Recibirás un email de confirmación en breve.
          </p>
        </div>
      )}
    </div>
  );
}
