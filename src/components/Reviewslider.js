import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../components/reviews";
import "../styles/Review.css";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="review-component">
        <h2 className="review-title">Dont just take our word! See what others are saying.</h2>
      <Slider {...settings}>
        {reviews.map((item) => (
          <div className="review-card-component">
            <div className="review-card-top">
              <h4>{item.review}</h4>
            </div>
            <div className="review-card-bottom">{item.author}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Reviews;
