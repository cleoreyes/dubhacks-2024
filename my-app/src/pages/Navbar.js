import React from "react";
import profile from "../img/user.png";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#6B7D7D",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const brandStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#000",
    textDecoration: "none",
  };

  const navListStyle = {
    listStyle: "none",
    display: "flex",
    padding: 0,
    margin: 0,
  };

  const navItemStyle = {
    margin: "0 0.5rem",
  };

  const navLinkStyle = {
    color: "#000",
    textDecoration: "none",
  };

  return (
    <nav style={navbarStyle}>
      <a
        href="/homepage"
        style={brandStyle}
        className="text-white d-flex flex-row align-items-end text-center"
      >
        <img src={logo} style={{ width: "50px" }} alt="Logo" />
        <p className="fw-bold" style={{ marginBottom: 5, marginLeft: 4 }}>
          Eterna
        </p>
      </a>
      <ul style={navListStyle}>
        <li style={navItemStyle}></li>
        <Link to="/">
          <img className="profile" src={profile} />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
