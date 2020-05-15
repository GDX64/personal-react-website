import React, { Component } from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

class Slider extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className="slick">
                    <SlickSlider {...settings}>
                        {this.props.data}
                    </SlickSlider>
                </div>
            </div>
        );
    }
}


export default Slider