import './Header.css'

function Header({ onNavigate }) {
  return (
    <header>
      <div className="titulo">
        <h1>¡Bienvenidos a My Happy Pet Friend</h1>
      </div>
      <nav>
        <ol className="listas">
          <li><a onClick={() => onNavigate('home')}>Inicio</a></li>
          <li><a onClick={() => onNavigate('perros')}>Perros</a></li>
          <li><a onClick={() => onNavigate('gatos')}>Gatos</a></li>
          <li><a onClick={() => onNavigate('aves')}>Aves</a></li>
          <li><a onClick={() => onNavigate('adopcion')}>Centro de adopción</a></li>
          <li><a onClick={() => onNavigate('trabaja')}>Trabaja con nosotros</a></li>
        </ol>
      </nav>
    </header>
  )
}

export default Header