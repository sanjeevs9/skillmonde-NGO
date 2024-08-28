import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,Navigation} from "swiper/modules"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from './Navbar';
import one from "../../public/1.png"
import two from "../../public/2.png"
import three from "../../public/3.png"
import left from "../../public/left.png"
import right from "../../public/right.png"
import "../index.css"

export default function Hero(){
    return (
        <>
         <div className=' relative z-0 '>
            <div className='absolute   z-20  w-full pt-1'>
                
            <Navbar/>
            
            </div>
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
      <SwiperSlide><div className='h-60 md:h-auto '><img className='object-cover h-full ' src={one}></img> </div></SwiperSlide>
      <SwiperSlide><div className='h-60 md:h-auto '><img className='object-cover h-full '  src={two}></img> </div></SwiperSlide>
      <SwiperSlide><div className='h-60 md:h-auto '><img className='object-cover h-full '  src={three}></img> </div></SwiperSlide>
    </Swiper>
    <div className="swiper-button-prev-custom">
    <img src={left} alt="Previous" />
</div>
<div className="swiper-button-next-custom">
    <img src={right} alt="Next" />
</div>
    </div>
        </>


    )
}