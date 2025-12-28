import './Footer.css'

function Footer () {
  return ( 
    <nav>
        <h3>Acerca de...</h3>
    <footer className="footer">
      <div className="footer-section">
        <h4>📍 Dirección</h4>
        <p>Av Ficticia 323</p>
      </div>
      
      <div className="footer-section">
        <h4>💳 Medios de pago</h4>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
          alt="Visa"
          className="card-logo"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8rt8iXdjEvaMmZ8Q0s72wWDFAB_vpWhmCA&s"
          alt="Mastercard"
          className="card-logo"
        />
      </div>
      
      <div className="footer-section">
        <h4>📞 Contacto</h4>
        <p>+54 362 483 7463</p>
      </div>
    </footer>
    </nav>
  );
}

export default Footer;
