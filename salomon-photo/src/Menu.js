import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Menu(){
  return (
    <nav className="navbar navbar-expand-lg navbar  bg text-center">
      <Link className="navbar-brand" to="/">
      </Link>
      <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="nav-link-active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="nav-link-active" aria-current="page" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="nav-link-active" aria-current="page" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="nav-link-active" aria-current="page" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Menu;