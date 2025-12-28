import React, { useState } from 'react';
import './Adopcion.css';
import { Link } from 'react-router-dom'


// Importaciones de imágenes
import lokiiImage from '../assets/img/loki.jpg'; 
import luliImage from '../assets/img/luli.jpg';
import marleyImage from '../assets/img/marley.jpg';
import negroImage from '../assets/img/negro.jpg';
import titoImage from '../assets/img/tito.jpg';
import milaImage from '../assets/img/mila.jpg';

function Adopcion() {
  const [selectedImage, setSelectedImage] = useState(null);

  const mascotas = [
    { id: 1, nombre: "Loki", imagen: lokiiImage },
    { id: 2, nombre: "Luli", imagen: luliImage },
    { id: 3, nombre: "Marley", imagen: marleyImage },
    { id: 4, nombre: "Negro", imagen: negroImage },
    { id: 5, nombre: "Tito", imagen: titoImage },
    { id: 6, nombre: "Mila", imagen: milaImage }
  ];

  const handleImageClick = (imagen, nombre) => {
    setSelectedImage({ imagen, nombre });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="adopcion">
      <header className="adopcion-header">
        <h1>¡Adoptame!</h1>
      </header>

      <div className="adopcion-info">
        <h2>En esta sección encontrarás a todos los que están listos para que puedas buscarlos.</h2>
        <p>
          Por favor, en caso de querer realizar el proceso de adopción póngase en 
          contacto a nuestro número que aparece en el pie de la página.
        </p>
      </div>

      <div className="gallery">
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="gallery-item">
            <div 
              onClick={() => handleImageClick(mascota.imagen, mascota.nombre)}
              style={{ cursor: 'pointer' }}
            >
              {/* ESTA LÍNEA ES CLAVE Y ESTÁ CORRECTA: */}
              <img 
                src={mascota.imagen} 
                alt={mascota.nombre}
              />
            </div>
            <div className="desc">{mascota.nombre}</div>
          </div>
        ))}
      </div>

      
      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img src={selectedImage.imagen} alt={selectedImage.nombre} />
            <h3>{selectedImage.nombre}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adopcion;