import React, { useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import heartImage from "../img/heart.png";

const Homepage = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const heartRef = useRef(null);

  const handleMouseDown = (e) => {
    if (heartRef.current && heartRef.current.contains(e.target)) {
      setIsDragging(true);
      const rect = heartRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="position-relative vh-100"
    >
      <Navbar />
      <div className="vh-100">
        <h1 className="text-center pb-2 pt-4">
          <i>Made by, Karen Miroku</i>
        </h1>
        <div className="margins d-flex flex-column justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-6 p-3">
              <Link to="/personal-info" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center text-black">
                  <p className="m-0 h4">Personal Information</p>
                </div>
              </Link>
            </div>
            <div className="col-6 p-3">
              <Link to="/messages" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center text-black">
                  <p className="m-0 h4">Messages and Advice</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 p-3">
              <Link to="/reflections" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center text-black">
                  <p className="m-0 h4">Reflections and Stories</p>
                </div>
              </Link>
            </div>
            <div className="col-6 p-3">
              <Link to="/lifedocuments" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center text-black">
                  <p className="m-0 h4">Life Documents</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 p-3">
              <Link to="/media" style={{ textDecoration: "none" }}>
                <div className="category-box w-100 d-flex justify-content-center align-items-center text-black">
                  <p className="m-0 h4">Media and Memories</p>
                </div>
              </Link>
            </div>
            <div className="col-6 p-3">
              <Link
                to="/recipesandtraditions"
                style={{ textDecoration: "none" }}
              >
                <div className="category-box w-100 d-flex justify-content-center align-items-center text-black">
                  <p className="m-0 h4">Recipes and Traditions</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        ref={heartRef}
        src={heartImage}
        alt="Draggable Heart"
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: 'move',
          userSelect: 'none',
          width: '100px',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default Homepage;