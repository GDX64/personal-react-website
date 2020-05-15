import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="logo">Logo</div>
        <div className="main-bullet">
          <Link to="/about" className="nav-element">
            About
          </Link>
          <Link to="/" className="nav-element">
            Home
          </Link>
          <Link to="#" className="nav-element">
            Projects
          </Link>
          <Link to="#" className="nav-element">
            Blog
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
