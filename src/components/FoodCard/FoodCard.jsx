import "./FoodCard.css"
import Button from "../Button/Button"

function FoodCard({ name, category, price, description }) {
  return (
    <div className="food-card">
      <div className="food-header">
        <h3>{name}</h3>
        <span className="food-price">${price}</span>
      </div>

      <p className="food-category">{category}</p>

      <p className="food-description">
        {description}
      </p>

      <div className="food-actions">
        <Button 
          text="Agregar al combo" 
          variant="secondary"
          onClick={() => alert(`Agregado: ${name}`)}
        />
      </div>
    </div>
  )
}

export default FoodCard
