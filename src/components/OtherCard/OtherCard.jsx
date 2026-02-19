import "./OtherCard.css"
import Button from "../Button/Button"

function OtherCard({ title, description, label }) {
  return (
    <div className="other-card">
      {label && <span className="other-badge">{label}</span>}

      <h3>{title}</h3>

      <p className="other-description">
        {description}
      </p>

      <div className="other-actions">
        <Button 
          text="Más información" 
          variant="outline"
          onClick={() => alert(`Más información sobre: ${title}`)}
        />
      </div>
    </div>
  )
}

export default OtherCard
