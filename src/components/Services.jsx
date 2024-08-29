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
    
    return(

        <>
            <div className="pt-20 ">
                <div className="items-center flex justify-center font-bold text-4xl pb-5">Services</div>
            <div className="flex bg-[#eeeeee] gap-5 justify-evenly pt-10 pb-10">

       <ServicesComp text={"Desgin and Development"} image={course}/>
       <ServicesComp text={"E-Learning Production"} image={learn}/>
       <ServicesComp text={"LMS Solution"} image={lms}/>


       </div>
        
      
            </div>
        </>
    )
}