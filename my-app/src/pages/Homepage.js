import React, { useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import heartImage from "../img/heart.png";
import starImage from "../img/star.png"; 
const Homepage = () => {
  const [heartPosition, setHeartPosition] = useState({ x: 110, y: 220 });
  const [starPosition, setStarPosition] = useState({ x: 1280, y: 590 });
  const [isDragging, setIsDragging] = useState({ heart: false, star: false });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const heartRef = useRef(null);
  const starRef = useRef(null);
  const handleMouseDown = (e, type) => {
    const ref = type === 'heart' ? heartRef : starRef;
    if (ref.current && ref.current.contains(e.target)) {
      setIsDragging({ ...isDragging, [type]: true });
      const rect = ref.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  const handleMouseMove = (e) => {
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    };
    if (isDragging.heart) {
      setHeartPosition(newPosition);
    } else if (isDragging.star) {
      setStarPosition(newPosition);
    }
  };
  const handleMouseUp = () => {
    setIsDragging({ heart: false, star: false });
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
      <img
        ref={heartRef}
        src={heartImage}
        alt="draggable heart"
        onMouseDown={(e) => handleMouseDown(e, 'heart')}
        style={{
          position: 'absolute',
          left: `${heartPosition.x}px`,
          top: `${heartPosition.y}px`,
          cursor: 'move',
          userSelect: 'none',
          width: '100px',
          height: 'auto',
          zIndex: 1000,
        }}
      />
      <img
        ref={starRef}
        src={starImage}
        alt="draggable star"
        onMouseDown={(e) => handleMouseDown(e, 'star')}
        style={{
          position: 'absolute',
          left: `${starPosition.x}px`,
          top: `${starPosition.y}px`,
          cursor: 'move',
          userSelect: 'none',
          width: '80px',
          height: 'auto',
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '23%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '2px 5px',
          borderRadius: '3px',
          fontSize: '12px',
          fontWeight: 'bold',
          pointerEvents: 'none',
        }}
      >
        a heart i drew for you, kuromi - 2/12/24
      </div>
      <div
        style={{
          position: 'absolute',
          top: '80%',
          left: '87%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '2px 5px',
          borderRadius: '3px',
          fontSize: '12px',
          fontWeight: 'bold',
          pointerEvents: 'none',
        }}
      >
        a star to guide you - 4/13/24
      </div>
    </div>
  );
};
export default Homepage;