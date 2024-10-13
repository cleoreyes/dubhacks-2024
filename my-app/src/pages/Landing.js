import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <div className="d-flex flex-row vh-100">
      <div className="col-8 text-start d-flex flex-column justify-content-center ps-5">
        <h1 className="display-1 fw-bold">Eterna</h1>
        <h2>Stay with your loved ones for eternity.</h2>
      </div>

      <div className="col-4 bg-secondary p-3 text-light d-flex flex-column justify-content-center text-start">
        <form className="d-flex flex-column px-5">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" id="password" className="form-control" />
          </div>
          <Link to="/homepage">
            <h3 className="text-center">
              <button type="submit" className="btn btn-light">
                Login
              </button>
            </h3>
          </Link>
        </form>
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-light">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Landing;
