import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Slider from '../../components/slider/Slider'

class Home extends React.Component {
  render() {

    const sliderData = [1, 2, 3, 4, 5, 6, 7].map((item) => {
      return <div className="slide">
        <img src="https://picsum.photos/600/300" alt="random" className="slider-img" />
      </div>
    })

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
          <hr className="u-marginb-big" />
          <h2 className="secondary-header u-marginb-medium">Projects</h2>
          <Slider data={sliderData} className="u-marginb-medium" />
        </div>
      </div>
    );
  }
}

export default Home;
