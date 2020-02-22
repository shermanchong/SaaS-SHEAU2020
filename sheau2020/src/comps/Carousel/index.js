import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ImgCarousel(){
    return(
        <Carousel width="500px">
            <div>
                <img src={require("../../images/1.jpg")}/>
            </div>
            <div>
                <img src={require("../../images/2.jpg")}/>
            </div>
            <div>
                <img src={require("../../images/3.jpg")}/>
            </div>
        </Carousel>
    )
}

export default ImgCarousel;