import React from 'react'
import './blog.css'
import Robo from '../../three/robo/Robo'

function Blog(props) {


    return (
        <div className="blog-container">
            <h2 className="secondary-header u-margint-medium u-marginb-small">We are still assembling parts to put the blog to work</h2>
            <p className="paragraph">Take a look at my <a href="https://medium.com/@gabriel.delmachado" className="outside-link">medium</a>  meanwhile</p>
            <div className="robo-animation">
                <Robo />
            </div>
        </div>
    )
}

export default Blog