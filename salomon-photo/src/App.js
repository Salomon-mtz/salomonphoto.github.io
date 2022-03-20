import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <div class="row d-flex">
        <div class="col-lg-4 col-md-12 mb-3">
          <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg" class="img-fluid mb-4" alt=""/>
          <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(66).jpg" class="img-fluid mb-4" alt=""
            data-wow-delay="0.3s"/>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(74).jpg" class="img-fluid mb-4" alt=""
            data-wow-delay="0.1s"/>
          <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(64).jpg" class="img-fluid mb-4" alt=""
            data-wow-delay="0.4s"/>
        </div>
        <div class="col-lg-4 col-md-6 mb-3">
          <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(77).jpg" class="img-fluid mb-4" alt=""
            data-wow-delay="0.2s"/>

          <img src="http://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(67).jpg" class="img-fluid mb-4" alt=""
            data-wow-delay="0.5s"/>
        </div>
        </div>
    </div>
  );
}

export default App;
