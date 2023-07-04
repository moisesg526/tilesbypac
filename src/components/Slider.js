import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"

import "../styles/Slider.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectCoverflow, Pagination, Navigation} from "swiper/modules";

import bathroomdark from "../images/bathroomdark.jpg"
import whitekitchen from "../images/whitekitchen.jpg";
import kitchentiles from "../images/kitchentiles.jpg";
import bathroommodern from "../images/bathroommodern.jpg";
import bathroomsink from "../images/bathroomsink.jpg";
import kitchensink from "../images/kitchensink.jpg";



function Main() {

  return (
    <div className="container">
      <Swiper
      effect={ "coverflow" }
      grabCursor={ true }
      centeredSlides={ true }
      loop={ true }
      slidesPerView={ "auto" }
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }
      }
      pagination={{el:".swiper-pagination",clickable:true}}
      navigation={{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
      >
        <SwiperSlide>
          <img src={bathroomdark} alt="bathroom-dark" className="slider-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={whitekitchen} alt="white-kitchen" className="slider-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kitchentiles} alt="kitchen-tiles" className="slider-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bathroommodern} alt="bathroom-modern" className="slider-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bathroomsink} alt="bathroom-sinkk" className="slider-img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kitchensink} alt="kitchen-sink" className="slider-img"/>
        </SwiperSlide>
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Main;
