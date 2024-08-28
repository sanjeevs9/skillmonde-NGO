import TestimonialComp from "./TestimonialComp";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Navigation} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonial(){
    return(
        <>
            <div className="pt-10">
            <Swiper className=''
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay: 3500,disableOnInteraction: false}}
      loop={true}
      speed={1000}
      navigation={{nextEl:".swiper-button-next-custom",
        prevEl:".swiper-button-prev-custom"
      }}
      pagination={{clickable:true}}
      modules={[Autoplay,Navigation]}
    >
      <SwiperSlide><TestimonialComp review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nemo earum minus, cum repudiandae inventore, perspiciatis ipsam itaque soluta sapiente accusantium animi provident! Fugiat explicabo non aliquid iste eum?"}  client={"-sanjeev"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nemo earum minus, cum repudiandae inventore, perspiciatis ipsam itaque soluta sapiente accusantium animi provident! Fugiat explicabo non aliquid iste eum?"}  client={"-sanjeev"}/></SwiperSlide>
      <SwiperSlide><TestimonialComp review={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ea nemo earum minus, cum repudiandae inventore, perspiciatis ipsam itaque soluta sapiente accusantium animi provident! Fugiat explicabo non aliquid iste eum?"}  client={"-sanjeev"}/></SwiperSlide>
    </Swiper>
                <div className="  flex justify-center">
                    
                    
                </div>
            </div>
        </>
    )
}
