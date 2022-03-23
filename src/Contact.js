import './App.css';
import React from 'react';

function Contact() {
  return (
<div className="transtion container text-center">
    <div className='heading mb-4 font-link'>
      <h2>Contact me</h2>
    </div>
    <div className="row justify-content-md-center">
    <form className="col-lg-9" id="contacto">
      <div className="form-row d-flex">
        <div className="form-floating col-sm-6 me-2 mb-3">
          <input type="text" className="form-control" name="name" id="name"
          placeholder="Ingrese su nombre" required />
          <label className='font-link contact' htmlFor="nombre">Name</label>
        </div>
        <div className="form-floating col-sm-6 mb-3">
          <input type="text" className="form-control" name="surename" id="surename"
          placeholder="Ingrese su apellido" required />
          <label className='font-link contact' htmlFor="apellido">Last Name</label>
        </div>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" name="email" id="email"
        placeholder="Ingrese su email" required />
        <label className='font-link contact' htmlFor="email">Email</label>
      </div>
      <div className="form-group">
        <textarea id="comment" name="comment" className="form-control font-link contact" rows="10" placeholder="Comments" required></textarea>
        <label form="comentario"></label>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-send btn-outline-dark">Enviar</button>
      </div>
    </form>
    </div>
    </div>

  );
}

export default Contact;
