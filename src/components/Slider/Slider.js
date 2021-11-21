import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./Slider.css"
import sample1 from "../../images/sample1.jpg";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Slider() {
  return (

      <Swiper
      
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <img style={{width:'100%'}} src={sample1} alt='sample1'></img>
        </SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={sample1} alt='s1'></img></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={sample1} alt='s2'></img></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={sample1} alt='s3'></img></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={sample1} alt='s4'></img></SwiperSlide>
        <SwiperSlide><img style={{width:'100%'}} src={sample1} alt='s5'></img></SwiperSlide>
       
      </Swiper>
   
  );
}
