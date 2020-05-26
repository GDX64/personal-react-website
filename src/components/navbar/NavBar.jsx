import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends React.Component {
  state = {
    navHidden: true
  }

  navToggle = () => {
    this.setState({ navHidden: !this.state.navHidden })
  }

  render() {
    return (<>
      <div onClick={this.navToggle} className="mobile-menu">M</div>

      <nav className={`nav-container mobile-nav ${this.state.navHidden ? "nav-hidden" : ""}`}>
        <div className="logo"></div>
        <div className="main-bullet">
          <Link to="/about" className="nav-element">
            About
          </Link>
          <Link to="/" className="nav-element">
            Home
          </Link>
          <a href="/#projects" className="nav-element">
            Projects
          </a>
          <Link to="/blog" className="nav-element">
            Blog
          </Link>
        </div>
      </nav>

    </>
    );
  }
}

export default NavBar;
