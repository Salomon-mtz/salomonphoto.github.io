import './App.css';
import React from 'react';

function Gallery() {
  return (
    <div className='container'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img class="d-block w-100" src="https://via.placeholder.com/150x50" alt="First slide"/>
          </div>
          <div class="carousel-item">
          <img class="d-block w-100" src="https://via.placeholder.com/150x50" alt="Second slide"/>
          </div>
          <div class="carousel-item">
          <img class="d-block w-100" src="https://via.placeholder.com/150x50" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    </div>

  );
}

export default Gallery;
