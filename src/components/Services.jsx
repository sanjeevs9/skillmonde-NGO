import ServicesComp from "./ServicesComp";
import course from "../assets/course.png"
import learn from "../assets/learn.png"
import lms from "../assets/lms.png"

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';


// import required modules

export default function Services(){
    const [page,setpage]=useState(1); 

    useEffect(()=>{
        const handle=()=>{
            if(window.innerWidth>=850){
                setpage(2);
            }
            if(window.innerWidth<850){
                setpage(1);
            }
            if(window.innerWidth>1250){
                setpage(3);
            }
            console.log(window.innerWidth)
        }
        window.addEventListener("resize",handle);

        return ()=>{
            window.removeEventListener("resize",handle)
        }
      
        
    },[window])
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
        slidesPerView={page}
        autoplay={{delay: 3500,disableOnInteraction: false}}
        loop={true}
        speed={2000}
        navigation={true}
        pagination={{
          clickable: true,
        }} 
        modules={[Pagination,Navigation,Autoplay]}
        
        className="mySwiper bg-[#eeeeee] flex xl:pl-40 pb-10 pt-10 "
      >
        <SwiperSlide className="flex justify-center items-center"><ServicesComp text={"Desgin and Development"} image={course}/></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center"><ServicesComp text={"E-Learning Production"} image={learn}/></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center"><ServicesComp text={"LMS Solution"} image={lms}/></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center"><ServicesComp text={"Desgin and Development"} image={course}/></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center"><ServicesComp text={"E-Learning Production"} image={learn}/></SwiperSlide>
        
      </Swiper>
            </div>
        </>
    )
}