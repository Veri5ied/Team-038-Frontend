import React from "react";
import "./Header-Footer.css";
import Logo from "./Repify.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <nav className="nav navBar">
        <Link to="/">
          <img src={Logo} alt="Replify" />
        </Link>
        <ul className="navItems">
          <li className="navLink">
            <Link className="links" to="/login">
              Login
            </Link>
            <Link className="links" to="/register">
              Sign
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Footer">
      <h2>Footer</h2>
    </div>
  );
};

export { Header, Footer };
