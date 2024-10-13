import React from "react";
import profile from "../img/user.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#91A3B0",
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
      <a href="/homepage" style={brandStyle}>
        Eterna
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
