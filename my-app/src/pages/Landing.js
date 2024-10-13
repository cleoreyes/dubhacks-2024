// src/HomePage.js
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
  return (
    <div className="d-flex flex-row vh-100">
        <div className="col-8 text-start d-flex flex-column justify-content-center ps-5">
          <h1 className="display-1 fw-bold">Eterna</h1>
          <h2 className="">Stay with your loved ones for eternity.</h2>
        </div>

      <div className="col-4 bg-secondary p-3 text-light rounded-left rounded-top">
        <p>Login</p>
      </div>
    </div>
  );
};

export default Landing;
