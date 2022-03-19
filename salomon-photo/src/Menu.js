import { Link } from 'react-router-dom';
import React from 'react';

function Menu(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Salomon Photo
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/galería">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/nosotros">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contacto">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;