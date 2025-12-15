import './Gatos.css'

function Gatos() {
  const productos = [
    {
      id: 1,
      nombre: "Rascador Adultos",
      imagen: "https://nutrican.com.ar/wp-content/uploads/2021/08/7798296856090.png"
    },
    {
      id: 2,
      nombre: "Juguete CatNip",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_771333-MLA80110791085_102024-O.webp"
    },
    {
      id: 3,
      nombre: "Alimento Sieger",
      imagen: "https://animalworld.com.ar/wp-content/uploads/2024/02/Sieger-Katze-Adult.png"
    },
    {
      id: 4,
      nombre: "Bola Giratoria Cat Nip",
      imagen: "https://acdn-us.mitiendanube.com/stores/068/331/products/catnip-ball-pared-136af56fbcc8e3b27817230662288047-1024-1024.jpg"
    },
    {
      id: 5,
      nombre: "Bebedero Comedor",
      imagen: "https://http2.mlstatic.com/D_Q_NP_920598-MLU73111767472_122023-O.webp"
    }
  ]

  const handleComprar = (nombreProducto) => {
    alert(`Has seleccionado: ${nombreProducto}`)
  }

  return (
    <div className="gato">
      <header className="titulo">
        <h1>
          <span className="material-symbols-outlined">accesorios</span>
          Gatos
          <span className="material-symbols-outlined">alimento</span>
        </h1>
      </header>

      <main className="cards">
        {productos.map((producto) => (
          <article key={producto.id} className="card">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="text">
              <h2>{producto.nombre}</h2>
              <button onClick={() => handleComprar(producto.nombre)}>
                Comprar
              </button>
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}

export default Gatos