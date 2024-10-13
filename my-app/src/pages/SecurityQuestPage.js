import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SecurityQuestPage = () => {
  return (
    <div className="homepage d-flex flex-row vh-100">
      <div className="col-8 bg-light p-3 text-start">
        <h1 className="display-1 fw-bold">Question</h1>
      </div>
      
      <div className="col-4 bg-secondary p-3 text-light">
        <p>Login</p>
      </div>
    </div>
  );
};

export default SecurityQuestPage;
