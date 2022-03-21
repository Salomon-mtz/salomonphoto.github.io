import './App.css';
import React from 'react';

function Gallery() {
  return (
    <div className='transtion container'>
      <div className="heading text-center mb-4">
        <h2 className='font-link'>Grand Prix Formula E Mexico City</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/1.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/2.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/3.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/4.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/5.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/6.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/7.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/8.jpg')}/>
        </div>
        <div className="col-md-6 col-lg-4 item">
          <img className="img-fluid image scale-on-hover" src={require('./Gallery Fe/9.jpg')}/>
        </div>
      </div>
    </div>

  );
}

export default Gallery;
