import './App.css';
import React from 'react';

function App() {
  return (
    <div className="transtion container">
      <div class="row d-flex">

        <div class="col-lg-4 col-md-12 mb-3">
          <img src={require('./Images/1.JPG')} class="img-fluid mb-4" alt="img1"/>
          <img src={require('./Images/4.jpg')} class="img-fluid mb-4" alt="img2"/>
          <img src={require('./Images/9.jpg')} class="img-fluid mb-4" alt="img3"/>
          
        </div>

        <div class="col-lg-4 col-md-6 mb-3">
          <img src={require('./Images/2.jpg')} class="img-fluid mb-4" alt="img4"/>
          <img src={require('./Images/5.jpg')} class="img-fluid mb-4" alt="img5"/>
          <img src={require('./Images/3.JPG')} class="img-fluid mb-4" alt="img6"/>
        </div>

        <div class="col-lg-4 col-md-6 mb-3">
          <img src={require('./Images/6.jpg')} class="img-fluid mb-4" alt="img7"/>
          <img src={require('./Images/8.jpg')} class="img-fluid mb-4" alt="img8"/>
          <img src={require('./Images/7.JPG')} class="img-fluid mb-4" alt="img9"/>
        </div>

      </div>
    </div>
  );
}

export default App;
