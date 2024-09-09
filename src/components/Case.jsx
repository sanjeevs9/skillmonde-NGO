import { casestudy } from "../casestudy";
import CaseSubComp from "./CaseSubComp";
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';


export default function Case(){
    const [page,setpage]=useState(1); 

    useEffect(()=>{
        if(window.innerWidth>=850){
            setpage(2);
        }
        if(window.innerWidth<850){
            setpage(1);
        }
        if(window.innerWidth>1250){
            console.log("sdfkasndf")
            setpage(3);
        }
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
      
        
    },[])

    return (
        <>
            <div className="pt-10">
            <div className="items-center flex justify-center font-bold text-4xl pb-5">CASE STUDIES</div>
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
        modules={[Pagination,Navigation]}
        
        className="mySwiper bg-[#eeeeee] flex xl:pl-40 pb-10 pt-10 "
      >
        {casestudy.map((data)=>(
                <SwiperSlide key={data.id} className=""><CaseSubComp heading={data.title} paragraph={data.paragraph} text={data.text} id={data.id} /> </SwiperSlide>
                ))}

        
      </Swiper>
            </div>
                


        </>
    )
}