import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Imageslider.css";

function Main() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="main-img-slider-component">
      <h2>Check out some of our Work</h2>
      <Slider {...settings}>
        <div className="img-slider-slide">
          <img
            src={require("../images/bathroomdark.jpg")}
            alt="kitchen-tiles"
          />
        </div>
        <div className="img-slider-slide">
          <img
            src={require("../images/whitekitchen.jpg")}
            alt="kitchen-tiles"
          />
        </div>
        <div className="img-slider-slide">
          <img
            src={require("../images/kitchentiles.jpg")}
            alt="kitchen-tiles"
          />
        </div>
        <div className="img-slider-slide">
          <img
            src={require("../images/bathroommodern.jpg")}
            alt="kitchen-tiles"
          />
        </div>
        <div className="img-slider-slide">
          <img
            src={require("../images/bathroomsink.jpg")}
            alt="kitchen-tiles"
          />
        </div>
        <div className="img-slider-slide">
          <img src={require("../images/kitchensink.jpg")} alt="kitchen-tiles" />
        </div>
      </Slider>
    </div>
  );
}

export default Main;
