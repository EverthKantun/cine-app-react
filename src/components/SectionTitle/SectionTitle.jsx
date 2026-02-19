import "./SectionTitle.css"

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <div className="section-title-accent"></div>
      <div>
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}

export default SectionTitle
