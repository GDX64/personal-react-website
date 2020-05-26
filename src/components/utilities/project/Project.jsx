import React from 'react'
import { Link } from 'react-router-dom'
import "./project.css"

function ProjectDemo(props) {

    const inner = <>
        <div className="img-container">
            <img className="project-demo-img" src={props.img} alt="random" />
        </div>
        <h4 className="project-title">{props.title}</h4>
        <p className="project-description">{props.desc}</p>
    </>

    if (props.external === 'true') {
        return <div className="project-demo">
            <a href={props.link}>
                {inner}
            </a>
        </div>
    } else {
        return <div className="project-demo">
            <Link to={props.link}>
                {inner}
            </Link>
        </div>

    }

}

export default ProjectDemo