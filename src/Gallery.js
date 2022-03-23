import './App.css';
import React from 'react';

function Gallery() {
  return (
    <div className='transtion container'>
      <div className="heading text-center mb-4">
        <h2 className='font-link'>Grand Prix Formula E Mexico City</h2>
      </div>
      <div className="row d-flex" id='gallery1'>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/1.jpg')} alt="car1"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/2.jpg')} alt="car2"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/3.jpg')} alt="car3"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/4.jpg')} alt="car4"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/5.jpg')} alt="car5"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/6.jpg')} alt="car6"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/7.jpg')} alt="car7"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/8.jpg')} alt="car8"/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/9.jpg')} alt="car9"/>
        </div>
      </div>


      <div className="heading text-center mb-4">
        <h2 className='font-link'>Film Street Photography</h2>
      </div>
      <div class="row d-flex" id='gallery2'>

        <div class="col-lg-4 col-md-12 mb-3">
          <img src={require('./Film/1.jpg')} class="img-fluid mb-4" alt="img1"/>
          <img src={require('./Film/4.jpg')} class="img-fluid mb-4" alt="img2"/>
          <img src={require('./Film/9.jpg')} class="img-fluid mb-4" alt="img3"/>
          
        </div>

        <div class="col-lg-4 col-md-6 mb-3">
          <img src={require('./Film/2.jpg')} class="img-fluid mb-4" alt="img4"/>
          <img src={require('./Film/5.jpg')} class="img-fluid mb-4" alt="img5"/>
          <img src={require('./Film/3.jpg')} class="img-fluid mb-4" alt="img6"/>
        </div>

        <div class="col-lg-4 col-md-6 mb-3">
          <img src={require('./Film/6.jpg')} class="img-fluid mb-4" alt="img7"/>
          <img src={require('./Film/8.jpg')} class="img-fluid mb-4" alt="img8"/>
          <img src={require('./Film/7.jpg')} class="img-fluid mb-4" alt="img9"/>
        </div>

      </div>
    </div>

  );
}

export default Gallery;
