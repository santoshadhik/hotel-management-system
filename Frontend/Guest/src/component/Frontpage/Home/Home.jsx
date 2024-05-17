import React, { useState } from "react";
// import Swipeable from 'react-swipeable';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "./Home.css";
import "swiper/css";
import About from '../About/About'

import hotel_background from "../../../assets/hotel-background.jpg";
import hotel2_background from "../../../assets/hotel-gallery.jpg";
import hotel3_background from "../../../assets/hotel1-gallery.jpg";
import hotel4_background from "../../../assets/hotel2-gallery.jpg";
import hotel5_background from "../../../assets/hotel3-gallery.jpg";
import hotel6_background from "../../../assets/hotel6-background.jpg";
import hotel7_background from "../../../assets/hotel8-background.jpg";

const Home = () => {
 function Booknow() {
  return(
    <div className="booknow">
      <h1>Book Now</h1>
      </div>
  )
 }
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{delay:4000,}}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination ,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="background">
            <img src={hotel_background} alt="" />
            {Booknow()}
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="background">
            <img src={hotel2_background} alt="" />
           {Booknow()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="background">
            <img src={hotel3_background} alt="" />
            {Booknow()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="background">
            <img src={hotel4_background} alt="" />
            {Booknow()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="background">
            <img src={hotel5_background} alt="" />
            {Booknow()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="background">
            <img src={hotel_background} alt="" />
            {Booknow()}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="background">
            <img src={hotel_background} alt="" />
            {Booknow()}
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Home;
