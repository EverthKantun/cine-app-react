import './Button.css'

function Button({ text, onClick, disabled = false, variant = "primary" }) {
  const buttonClass = `custom-button ${variant}`
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button