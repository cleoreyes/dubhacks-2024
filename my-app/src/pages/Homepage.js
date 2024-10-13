import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
  return (
    <div className="vh-100">
      <h1 className="text-center pb-2">Made by, Karen Miroku</h1>
      <div className="homepage d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-6 p-3">
            <div className="  category-box  w-100 d-flex justify-content-center align-items-center">
              <p className="m-0 h4">Personal Information</p>
            </div>
          </div>
          <div className="col-6 p-3">
            <div className="  category-box  w-100 d-flex justify-content-center align-items-center">
              <p className="m-0 h4">Messages and Advice</p>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-6 p-3">
            <div className="  category-box  w-100 d-flex justify-content-center align-items-center" >
              <p className="m-0 h4">Reflections and Stories</p>
            </div>
          </div>
          <div className="col-6 p-3">
            <div className="  category-box  w-100 d-flex justify-content-center align-items-center" >
              <p className="m-0 h4">Life Documents</p>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-6 p-3">
            <div className="  category-box  w-100 d-flex justify-content-center align-items-center" >
              <p className="m-0 h4">Media</p>
            </div>
          </div>
          <div className="col-6 p-3">
            <div className="  category-box  w-100 d-flex justify-content-center align-items-center" >
              <p className="m-0 h4">Recipes and Traditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
