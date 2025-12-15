import React from 'react';
import './Home.css';

import descuentosImage from '../assets/img/descuentos.jpg';
import accesoriosImage from '../assets/img/accesorios2.jpg';
import trabajoImage from '../assets/img/trabajo3.jpg';

function Home() {

  return (
    <div className="home-page">
      <div 
        id="carouselExampleAutoplaying" 
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          
          
          <div className="carousel-item active">
            <img 
              src={descuentosImage} 
              className="d-block w-100 descuentos" 
              alt="descuentos"
            />
          </div>
          
          <div className="carousel-item">
            <img 
              src={accesoriosImage} 
              className="d-block w-100 accesorios" 
              alt="accesorios"
            />
          </div>
          
          <div className="carousel-item">
            <img 
              src={trabajoImage} 
              className="d-block w-100 trabajo" 
              alt="trabajo"
            />
          </div>
          
        </div>
      
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleAutoplaying" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
      
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleAutoplaying" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;