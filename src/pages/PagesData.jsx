import './info-pages.css';

export function About() {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Sobre Nosotros</h1>
        <p>
          CinexPopuli lidera la industria del entretenimiento cinematográfico en la región. 
          Nuestra misión es ofrecer la mejor experiencia, tecnología de punta, comodidad inigualable y 
          los mejores estrenos para nuestros invitados. 
        </p>
        <p>
          Con más de 10 años en el mercado, seguimos innovando para ti, llevando la magia 
          del cine a tu ciudad.
        </p>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Aviso de Privacidad</h1>
        <p>
          De acuerdo con la legislación vigente en materia de protección de datos, te informamos 
          que los datos personales recabados en nuestros sitios web se manejan con estricta 
          confidencialidad.
        </p>
        <p>
          Tu información solo será utilizada para procesar transacciones, responder consultas 
          y enviarte promociones de CinexPopuli si así lo has aceptado. No vendemos ni compartimos 
          tu información con terceros no autorizados.
        </p>
      </div>
    </div>
  );
}

export function Terms() {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Términos y Condiciones</h1>
        <p>
          Al utilizar este sitio web, aceptas nuestros Términos y Condiciones. Todas las compras 
          de boletos son finales. Revisa cuidadosamente la función y horarios antes de pagar.
        </p>
        <p>
          CinexPopuli se reserva el derecho de reservar admisión por comportamiento 
          inapropiado dentro de nuestras instalaciones.
        </p>
      </div>
    </div>
  );
}

export function Refunds() {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Política de Reembolsos</h1>
        <p>
          No contamos con reembolsos por compras realizadas en nuestras plataformas digitales 
          ni en taquillas al menos que exista una falla técnica u operativa prolongada atribuible 
          al cine o la exhibición sea cancelada de forma permanente.
        </p>
        <p>
          Para cambios de horario debes acudir físicamente al complejo al menos 2 horas antes 
          del inicio de tu función adquirida.
        </p>
      </div>
    </div>
  );
}
