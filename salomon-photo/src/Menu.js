import { Link } from 'react-router-dom';
import React from 'react';

function Menu(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg">
      <Link className="navbar-brand" to="/">
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" style={{color: "#828282"}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/gallery" style={{color: "#828282"}}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about" style={{color: "#828282"}}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contact" style={{color: "#828282"}}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Menu;