import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";

const Landing = () => {
  return (
    <div className="d-flex flex-row vh-100">
      <div className="col-8 text-start d-flex flex-column justify-content-center p-5">
        <div className="d-flex flex-row align-items-end text-center">
          <img src={logo} style={{ width: "250px" }} alt="Logo" />
          <h1 className="display-1 fw-bold" style={{ marginBottom: 20 }}>
            Eterna
          </h1>
        </div>

        <h2>
          <i>Stay with your loved ones for eternity.</i>
        </h2>
        <h3 className="h6">
          Keep Your Legacy Alive with Eterna. Capture cherished memories,
          reflections, and essential documents effortlessly, ensuring your story
          lives on for your loved ones. Share your wisdom and celebrate your
          life—because every story deserves to be told.
        </h3>
      </div>

      <div className="col-4 p-3 text-light d-flex flex-column justify-content-center text-start login">
        <form className="d-flex flex-column px-5">
          <h3>
            <b>Log in or sign up to tell your story!</b>
          </h3>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input type="password" id="password" className="form-control" />
          </div>
          <Link to="/security">
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
