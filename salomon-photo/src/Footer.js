import { Link } from 'react-router-dom';
import React from 'react';

function Footer(){
  return (
    <footer>
      <div className='social text-center'>
        <a className='ig' href='https://www.instagram.com/salomon__photo/' target={"_blank"}><i class="bi bi-instagram me-4" style={{color: "#828282"}}></i></a>
        <a className='ig' href='https://www.tiktok.com/@salomon_photo' target={"_blank"}><i class="bi bi-tiktok " style={{color: "#828282"}}></i></a>
      </div>
      <p className='copy text-center' style={{color: "#828282"}}>Copyrights 2022</p>
    </footer>

  );
}

export default Footer;