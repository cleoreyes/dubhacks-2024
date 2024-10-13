import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="vh-100">
        <h1 className="text-center pb-2 pt-4">
          <i>Made by, Karen Miroku</i>
        </h1>
        <div className="margins d-flex flex-column justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-6 p-3">
              <Link to="/personal-info" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center ">
                  <p className="m-0 h4">Personal Information</p>
                </div>
              </Link>
            </div>
            <div className="col-6 p-3">
              <Link to="/messages" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center ">
                  <p className="m-0 h4">Messages and Advice</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 p-3">
              <Link to="/reflections" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center ">
                  <p className="m-0 h4">Reflections and Stories</p>
                </div>
              </Link>
            </div>
            <div className="col-6 p-3">
              <Link to="/lifedocuments" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center ">
                  <p className="m-0 h4">Life Documents</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 p-3">
              <Link to="/media" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center ">
                  <p className="m-0 h4">Media and Memories</p>
                </div>
              </Link>
            </div>
            <div className="col-6 p-3">
              <Link
                to="/recipesandtraditions"
                style={{ textDecoration: "none" }}
              >
                <div className="category-box w-100 d-flex justify-content-center align-items-center ">
                  <p className="m-0 h4">Recipes and Traditions</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
