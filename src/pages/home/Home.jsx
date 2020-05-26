import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Slider from '../../components/slider/Slider'
import ProjectDemo from '../../components/utilities/project/Project'
import projectData from './projectData'

class Home extends React.Component {
  render() {

    const sliderData = [1, 2, 3, 4, 5, 6, 7].map((item) => {
      return <div className="slide" key={item}>
        <img src="https://picsum.photos/600/300" alt="random" className="slider-img" />
      </div>
    })

    const projects = projectData.map((item, index) => {
      return (
        <ProjectDemo key={index} title={item.title} desc={item.desc} img={item.img} link={item.link} external={item.external} />
      )
    })
    return (
      <div className="home-container">
        <div className="home-content">
          <section className="presentation-container u-marginb-big" id="presentation">
            <h1 className="main-header">I'm Gabriel Machado</h1>
            <h2 className="secondary-header u-marginb-huge">
              And this is my personal website
            </h2>
            <h3 className="tertiary-header u-marginb-small">
              What will you find here?
            </h3>
            <p className="paragraph u-marginb-medium">
              I'm an electrical engineer and developer, here you can find a
              little bit of information about me and my work
            </p>
          </section >
          <hr className="u-marginb-big" />
          <div id="projects">
            <h2 className="secondary-header u-marginb-medium">Projects</h2>
            <div className="project-grid u-marginb-big">
              {projects}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
