import TestimonialComp from "./TestimonialComp";
import left from "../../public/left.png"
import right from "../../public/right.png"
import "../index.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Navigation, Pagination} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonial(){
    return(
        <>
            <div className="pt-10 p-5 relative  ">
            <Swiper className=''
      spaceBetween={50}
      slidesPerView={1}
      // autoplay={{delay: 3500,disableOnInteraction: false}}
      loop={true}
      speed={1000}
      navigation={{nextEl:".swiper-button-next-custom-one",
        prevEl:".swiper-button-prev-custom-one"
      }}
      pagination={{clickable:true}}
      modules={[Navigation,Pagination]}
    >
      <SwiperSlide><TestimonialComp review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nemo earum minus, cum repudiandae inventore, perspiciatis ipsam itaque soluta sapiente accusantium animi provident! Fugiat explicabo non aliquid iste eum?"}  client={"-sanjeev"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nemo earum minus, cum repudiandae inventore, perspiciatis ipsam itaque soluta sapiente accusantium animi provident! Fugiat explicabo non aliquid iste eum?"}  client={"-sanjeev"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nemo earum minus, cum repudiandae inventore, perspiciatis ipsam itaque soluta sapiente accusantium animi provident! Fugiat explicabo non aliquid iste eum?"}  client={"-sanjeev"}/></SwiperSlide>
    </Swiper>

    <div className="swiper-button-prev-custom-one absolute cursor-pointer left-0 lg:left-1/4 top-1/2 transform -translate-y-1/2 z-10 pl-5">
    <img className="object-contain h-10" src={left} alt="Previous" />
</div>
<div className="swiper-button-next-custom-one absolute  cursor-pointer right-0  lg:right-1/4 top-1/2 transform -translate-y-1/2 z-10 pr-5">
    <img className="object-contain h-10" src={right} alt="Next" />
</div>
            </div>
        </>
    )
}
