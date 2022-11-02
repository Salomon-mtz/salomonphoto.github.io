
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png';
import App from './App';
import Menu from "./Menu";
import Contact from './Contact';
import Gallery from './Gallery';
import About from './About';
import Footer from "./Footer";
import 'animate.css';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <div className='header text-center'><img src={logo} className='img-fluid' style={{maxWidth: "170px", marginTop:"50px"}}/></div>
      <Menu />
      <div className='social text-center'>
        <a className='ig' href='https://www.instagram.com/salomon__photo/' target={"_blank"} rel="noreferrer"><i class="bi bi-instagram" style={{color: "#828282"}}></i></a>
        <a className='ig' href='https://www.tiktok.com/@salomon_photo' target={"_blank"} rel="noreferrer"><i class="bi bi-tiktok " style={{color: "#828282"}}></i></a>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();