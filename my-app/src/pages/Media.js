import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import familyImage from "../img/famImage.jpg";

export const Media = () => {
  return (
    <div className="m-5">
      <h1 className="fw-bold">Media</h1>
      <div>
        <img src={familyImage} width={250}></img>
        <img src={familyImage} width={250}></img>
        <img src={familyImage} width={250}></img>
        <img src={familyImage} width={250}></img>
      </div>
    </div>
  );
};

export default Media;
