import React from "react";
import Slider from "react-slick";

export default function Service() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "ease-in",
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <div className="flex">
        <Slider {...settings}>
          <div className="sliderBox">
            <div className="sliderItem">ss</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
          <div className="sliderBox">
            <div className="sliderItem">1</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
