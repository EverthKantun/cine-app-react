import './MovieCard.css'
import Button from '../Button/Button'

function MovieCard({ title, genre, year, rating, duration }) {
  return (
    <div className="movie-card">
      <div className="movie-header">
        <h3>{title}</h3>
        <span className="movie-year">{year}</span>
      </div>
      
      <div className="movie-info">
        <p><strong>Género:</strong> {genre}</p>
        <div className="movie-details">
          <span className="movie-rating">{rating}</span>
          <span className="movie-duration">{duration}</span>
        </div>
      </div>
      
      <div className="movie-actions">
        <Button 
          text="Ver horarios" 
          variant="primary"
          onClick={() => alert(`Ver horarios de: ${title}`)}
        />
        <Button 
          text="Comprar entradas" 
          variant="secondary"
          onClick={() => alert(`Comprar entradas para: ${title}`)}
        />
        <Button 
          text="Ver tráiler" 
          variant="outline"
          onClick={() => alert(`Ver tráiler de: ${title}`)}
        />
      </div>
    </div>
  )
}

export default MovieCard