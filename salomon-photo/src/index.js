
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from "./Menu";
import Contact from './Contact';
import Gallery from './Gallery';
import About from './About';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Menu />
      <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/galería" element={<Gallery />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();