import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <div className="presentation-container">
            <h1 className="main-header">I'm Gabriel Machado</h1>
            <h2 className="secondary-header u-marginb-big">
              And this is my personal website
            </h2>
            <h3 className="tertiary-header u-marginb-small">
              What will you find here?
            </h3>
            <p className="paragraph u-marginb-medium">
              I'm an electrical engineer and developer, here you can find a
              little bit of information about me and my work
            </p>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Home;
