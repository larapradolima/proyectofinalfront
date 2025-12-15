import './Perros.css'

function Perros() {
  const productos = [
    {
      id: 1,
      nombre: "Collar de Pua",
      imagen: "https://i5.walmartimages.com/seo/Bellaven-Adjustable-Studded-Dog-Collar-Microfiber-Leather-Spiked-Puppy-Collars-Anti-Bite-Pet-Collar-for-Small-Medium-and-Large-Dogs-Cat-Black_a8756175-8228-4339-83f7-400d82c2f3b0.4d56bfd87c5ab2f15e3d85d6c7c51db0.jpeg"
    },
    {
      id: 2,
      nombre: "Collar localizador",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_711365-MLA93568967801_092025-T.webp"
    },
    {
      id: 3,
      nombre: "Alimento Sieger",
      imagen: "https://acdn-us.mitiendanube.com/stores/884/444/products/sieger-bolsa-adultml-1000x1000-1-980293abe95c78b7ac17170891644966-480-0.jpg"
    },
    {
      id: 4,
      nombre: "Cucha Termica",
      imagen: "https://rosariopet.com.ar/wp-content/uploads/2022/07/C99.jpg"
    },
    {
      id: 5,
      nombre: "Plato Doble",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_827702-MLU76163650069_052024-O.webp"
    }
  ]

  const handleComprar = (nombreProducto) => {
    alert(`Has seleccionado: ${nombreProducto}`)
   
  }

  return (
    <div className="perros">
      <header className="titulo">
        <h1>
          <span className="material-symbols-outlined">accesorios</span>
          Perros
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

export default Perros