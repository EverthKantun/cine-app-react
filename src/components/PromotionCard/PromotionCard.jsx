import './PromotionCard.css';

export function PromotionCard({ promotion }) {
  return (
    <div className="promotion-card">
      <div className="promotion-header">
        <span className="promotion-badge">PROMOCIÓN</span>
      </div>
      
      <div className="promotion-content">
        <h3 className="promotion-title">{promotion.title}</h3>
        <p className="promotion-body">
          {promotion.body.length > 100 
            ? `${promotion.body.substring(0, 100)}...` 
            : promotion.body}
        </p>
      </div>
      
      <div className="promotion-footer">
        <button className="btn-read-more">
          Leer más
        </button>
      </div>
    </div>
  );
}
