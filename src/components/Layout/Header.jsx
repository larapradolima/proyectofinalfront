import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="titulo">
        <h1>¡Bienvenidos a My Happy Pet Friend!</h1>
      </div>

      <nav>
        <ol className="listas">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/perros">Perros</Link></li>
          <li><Link to="/gatos">Gatos</Link></li>
          <li><Link to="/aves">Aves</Link></li>
          <li><Link to="/adopcion">Centro de adopción</Link></li>
          <li><Link to="/trabaja">Trabajá con nosotros</Link></li>
        </ol>
      </nav>
    </header>
  )
}

export default Header
