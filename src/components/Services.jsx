import ServicesComp from "./ServicesComp";
import course from "../assets/course.png"
import learn from "../assets/learn.png"
import lms from "../assets/lms.png"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';


// import required modules

export default function Services(){
    return(

        <>
            <div className="pt-20 ">
                <div className="items-center flex justify-center font-bold text-4xl pb-5">Services</div>
            <Swiper 
            style={{
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-pagination-bullet-vertical-gap": "10px"
            }}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{delay: 3500,disableOnInteraction: false}}
        loop={true}
        speed={2000}
        navigation={true}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination,Navigation,Autoplay]}
        
        className="mySwiper bg-[#eeeeee] flex xl:pl-40 pb-5 pt-10"
      >
        <SwiperSlide><ServicesComp text={"Course Conceptualization,Desgin and Development"} image={course}/></SwiperSlide>
        <SwiperSlide><ServicesComp text={"E-Learning Production"} image={learn}/></SwiperSlide>
        <SwiperSlide><ServicesComp text={"LMS Solution"} image={lms}/></SwiperSlide>
        <SwiperSlide><ServicesComp text={"Course Conceptualization,Desgin and Development"} image={course}/></SwiperSlide>
        <SwiperSlide><ServicesComp text={"E-Learning Production"} image={learn}/></SwiperSlide>
        
      </Swiper>
            </div>
        </>
    )
}