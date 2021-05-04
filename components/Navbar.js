import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-links">
      <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>about</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
