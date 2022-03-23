import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
      <Link
        className={`nav-link ${match ? "active" : ""}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
}
function Menu(){
  return (
    <nav className="navbar navbar-expand-lg navbar  bg text-center">
      <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#salomon-menu" aria-controls="salomon-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="salomon-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/gallery">Gallery</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Menu;