import React, { Component } from "react";
import Slider from "react-slick";

//code for slider

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mt-2">
        
        <Slider {...settings}>
          <div>
            <img src="assets/img/clients/client-1.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-2.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-3.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-4.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-5.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-1.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-4.png" width="160px" alt="/"></img>
          </div>
          <div>
            <img src="assets/img/clients/client-3.png" width="160px" alt="/"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
