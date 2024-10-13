// src/HomePage.js
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
  return (
    <div className="homepage d-flex flex-row vh-100">
      <div className="col-8 bg-light p-3 text-start">
        <h1 className="display-1 fw-bold">Eterna</h1>
        <h2 className="">Stay with your loved ones for eternity.</h2>
      </div>
      
      <div className="col-4 bg-secondary p-3 text-light">
        <p>Login</p>
      </div>
    </div>
  );
};

export default HomePage;
